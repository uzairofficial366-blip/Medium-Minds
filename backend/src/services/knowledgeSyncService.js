import chokidar from "chokidar";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { getSql } from "../config/db.js";
import { chunkText } from "../utils/chunkText.js";
import { extractTextFromFile } from "../utils/extractTextFromFiles.js";
import { createContentHash } from "../utils/fileHash.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SUPPORTED_EXTENSIONS = new Set([".js", ".jsx", ".html", ".css", ".md", ".txt", ".json", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".avif"]);
const IGNORED_NAMES = new Set(["node_modules", "dist", "build", ".git"]);
const IGNORED_FILES = new Set(["package-lock.json", ".env", ".env.local", ".env.production"]);

let watcher;
let syncTimer;

export function getRepoRoot() {
  return path.resolve(__dirname, "../../..");
}

function toPosix(relativePath) {
  return relativePath.split(path.sep).join("/");
}

function isIgnored(filePath) {
  const parts = filePath.split(path.sep);
  const baseName = path.basename(filePath);
  const extension = path.extname(filePath).toLowerCase();

  return (
    parts.some((part) => IGNORED_NAMES.has(part)) ||
    IGNORED_FILES.has(baseName) ||
    baseName.endsWith(".log") ||
    extension === ".lock"
  );
}

function getScanTargets(rootDir) {
  return [
    "frontend/src/pages",
    "frontend/src/components",
    "frontend/src/index.css",
    "frontend/public",
    "public",
    "README.md",
    "index.html",
    "careers.html",
    "divisions.html",
    "style.css",
    "script.js",
    "backend/src/data/projectContext.js",
  ].map((target) => path.join(rootDir, target));
}

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(targetPath) {
  if (!(await pathExists(targetPath)) || isIgnored(targetPath)) return [];

  const stats = await fs.stat(targetPath);
  if (stats.isFile()) {
    const extension = path.extname(targetPath).toLowerCase();
    return SUPPORTED_EXTENSIONS.has(extension) ? [targetPath] : [];
  }

  const entries = await fs.readdir(targetPath, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => collectFiles(path.join(targetPath, entry.name))),
  );

  return files.flat();
}

function getSourceType(filePath) {
  const extension = path.extname(filePath).toLowerCase().replace(".", "");
  return extension || "text";
}

async function upsertSourceAndChunks(sql, relativePath, sourceType, hash, chunks) {
  const sourceRows = await sql`
    INSERT INTO knowledge_sources (source_path, source_type, content_hash, last_synced_at)
    VALUES (${relativePath}, ${sourceType}, ${hash}, NOW())
    ON CONFLICT (source_path)
    DO UPDATE SET content_hash = EXCLUDED.content_hash, last_synced_at = NOW()
    RETURNING id
  `;

  const sourceId = sourceRows[0].id;

  await sql`DELETE FROM knowledge_chunks WHERE source_id = ${sourceId}`;

  for (const [index, content] of chunks.entries()) {
    const title = `${path.basename(relativePath)} chunk ${index + 1}`;
    await sql`
      INSERT INTO knowledge_chunks (source_id, chunk_index, title, content, search_vector)
      VALUES (
        ${sourceId},
        ${index},
        ${title},
        ${content},
        to_tsvector('english', ${content})
      )
    `;
  }
}

export async function syncKnowledgeFile(filePath, rootDir = getRepoRoot()) {
  if (isIgnored(filePath) || !(await pathExists(filePath))) return { skipped: true };

  const extension = path.extname(filePath).toLowerCase();
  if (!SUPPORTED_EXTENSIONS.has(extension)) return { skipped: true };

  const sql = getSql();
  const relativePath = toPosix(path.relative(rootDir, filePath));
  const content = await extractTextFromFile(filePath);
  const cleanedContent = content.replace(/DATABASE_URL\s*=\s*["']?[^"'\s]+/gi, "DATABASE_URL=[redacted]");
  const hash = createContentHash(cleanedContent);

  if (!cleanedContent || cleanedContent.length < 20) return { skipped: true };

  const existingRows = await sql`
    SELECT content_hash FROM knowledge_sources WHERE source_path = ${relativePath}
  `;

  if (existingRows[0]?.content_hash === hash) {
    return { skipped: true, sourcePath: relativePath };
  }

  const chunks = chunkText(cleanedContent);
  if (chunks.length === 0) return { skipped: true, sourcePath: relativePath };

  await upsertSourceAndChunks(sql, relativePath, getSourceType(filePath), hash, chunks);
  return { updated: true, sourcePath: relativePath, chunks: chunks.length };
}

export async function syncKnowledgeBase() {
  getSql();

  const rootDir = getRepoRoot();
  const targetFiles = (await Promise.all(getScanTargets(rootDir).map(collectFiles))).flat();
  const uniqueFiles = [...new Set(targetFiles)];
  const existingSourcePaths = new Set(uniqueFiles.map((filePath) => toPosix(path.relative(rootDir, filePath))));
  const summary = { scanned: uniqueFiles.length, updated: 0, skipped: 0, removed: 0, errors: 0 };

  for (const filePath of uniqueFiles) {
    try {
      const result = await syncKnowledgeFile(filePath, rootDir);
      if (result.updated) summary.updated += 1;
      else summary.skipped += 1;
    } catch (error) {
      summary.errors += 1;
      console.warn(`Knowledge sync skipped ${filePath}:`, error.message);
    }
  }

  try {
    const sql = getSql();
    const rows = await sql`SELECT source_path FROM knowledge_sources`;
    for (const row of rows) {
      if (!existingSourcePaths.has(row.source_path)) {
        await sql`DELETE FROM knowledge_sources WHERE source_path = ${row.source_path}`;
        summary.removed += 1;
      }
    }
  } catch (error) {
    summary.errors += 1;
    console.warn("Knowledge cleanup skipped:", error.message);
  }

  return summary;
}

export function startKnowledgeWatcher() {
  if (watcher || process.env.KNOWLEDGE_WATCH !== "true") return;

  const rootDir = getRepoRoot();
  watcher = chokidar.watch(getScanTargets(rootDir), {
    ignoreInitial: true,
    ignored: (targetPath) => isIgnored(targetPath),
  });

  const scheduleSync = () => {
    clearTimeout(syncTimer);
    syncTimer = setTimeout(() => {
      syncKnowledgeBase().catch((error) => {
        console.warn("Knowledge watch sync failed:", error.message);
      });
    }, 750);
  };

  watcher.on("add", scheduleSync).on("change", scheduleSync).on("unlink", scheduleSync);
  console.log("Knowledge watch mode enabled.");
}
