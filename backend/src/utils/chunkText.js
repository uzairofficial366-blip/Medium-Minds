const DEFAULT_MIN_SIZE = 800;
const DEFAULT_MAX_SIZE = 1200;

function splitSentences(text) {
  return text
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?])\s+/)
    .filter(Boolean);
}

export function chunkText(text, options = {}) {
  const minSize = options.minSize || DEFAULT_MIN_SIZE;
  const maxSize = options.maxSize || DEFAULT_MAX_SIZE;
  const normalized = (text || "").replace(/\s+/g, " ").trim();

  if (!normalized) return [];
  if (normalized.length <= maxSize) return [normalized];

  const chunks = [];
  let current = "";

  for (const sentence of splitSentences(normalized)) {
    const next = current ? `${current} ${sentence}` : sentence;

    if (next.length <= maxSize) {
      current = next;
      continue;
    }

    if (current.length >= minSize) {
      chunks.push(current);
      current = sentence;
      continue;
    }

    chunks.push(next.slice(0, maxSize).trim());
    current = next.slice(maxSize).trim();
  }

  if (current) chunks.push(current);

  return chunks.filter((chunk) => chunk.length > 80);
}
