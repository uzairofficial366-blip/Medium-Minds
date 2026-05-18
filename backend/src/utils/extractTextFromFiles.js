import fs from "fs/promises";
import path from "path";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".avif"]);

function stripCodeNoise(content) {
  return content
    .replace(/import\s+[^;]+;?/g, " ")
    .replace(/export\s+default\s+/g, " ")
    .replace(/className=\{?["'`][^"'`]+["'`]?\}?/g, " ")
    .replace(/<\/?[A-Za-z][^>]*>/g, " ")
    .replace(/[{}()[\];,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractHtmlText(content) {
  return content
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function extractCssText(content) {
  const comments = content.match(/\/\*[\s\S]*?\*\//g)?.join(" ") || "";
  const variables = [...content.matchAll(/--([a-z0-9-]+)\s*:\s*([^;]+);/gi)]
    .map((match) => `${match[1]} ${match[2]}`)
    .join(" ");

  return `${comments} ${variables}`.replace(/[/*]/g, " ").replace(/\s+/g, " ").trim();
}

function extractJsonText(content) {
  try {
    const parsed = JSON.parse(content);
    return JSON.stringify(parsed, (key, value) => {
      const lowered = key.toLowerCase();
      if (lowered.includes("secret") || lowered.includes("token") || lowered.includes("key") || lowered.includes("password")) {
        return undefined;
      }
      return value;
    });
  } catch {
    return "";
  }
}

export async function extractTextFromFile(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  if (IMAGE_EXTENSIONS.has(extension)) {
    const baseName = path.basename(filePath, extension).replace(/[-_]/g, " ");
    return `Image asset: ${baseName}. File name: ${path.basename(filePath)}.`;
  }

  const rawContent = await fs.readFile(filePath, "utf8");

  if (extension === ".html") return extractHtmlText(rawContent);
  if (extension === ".css") return extractCssText(rawContent);
  if (extension === ".json") return extractJsonText(rawContent);
  if (extension === ".js" || extension === ".jsx") return stripCodeNoise(rawContent);

  return rawContent.replace(/\s+/g, " ").trim();
}
