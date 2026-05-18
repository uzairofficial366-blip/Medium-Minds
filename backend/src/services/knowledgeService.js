import { getSql } from "../config/db.js";

export async function searchKnowledge(query) {
  return getTopKnowledgeChunks(query, 8);
}

export async function getTopKnowledgeChunks(query, limit = 8) {
  const trimmedQuery = String(query || "").trim();
  if (!trimmedQuery) return [];

  const sql = getSql();
  const safeLimit = Math.min(Math.max(Number(limit) || 8, 1), 8);

  const fullTextResults = await sql`
    SELECT
      kc.title,
      kc.content,
      ks.source_path,
      ts_rank(kc.search_vector, plainto_tsquery('english', ${trimmedQuery})) AS rank
    FROM knowledge_chunks kc
    JOIN knowledge_sources ks ON ks.id = kc.source_id
    WHERE kc.search_vector @@ plainto_tsquery('english', ${trimmedQuery})
    ORDER BY rank DESC
    LIMIT ${safeLimit}
  `;

  if (fullTextResults.length > 0) return fullTextResults;

  const likeQuery = `%${trimmedQuery}%`;
  return sql`
    SELECT
      kc.title,
      kc.content,
      ks.source_path,
      0 AS rank
    FROM knowledge_chunks kc
    JOIN knowledge_sources ks ON ks.id = kc.source_id
    WHERE kc.content ILIKE ${likeQuery} OR kc.title ILIKE ${likeQuery}
    ORDER BY kc.updated_at DESC
    LIMIT ${safeLimit}
  `;
}

export function formatKnowledgeContext(chunks) {
  if (!Array.isArray(chunks) || chunks.length === 0) return "";

  return chunks
    .map((chunk, index) => {
      const title = chunk.title ? `Title: ${chunk.title}\n` : "";
      return `[${index + 1}] Source: ${chunk.source_path}\n${title}${chunk.content}`;
    })
    .join("\n\n---\n\n");
}
