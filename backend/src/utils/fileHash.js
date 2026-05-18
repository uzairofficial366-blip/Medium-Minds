import crypto from "crypto";

export function createContentHash(content) {
  return crypto.createHash("sha256").update(content || "", "utf8").digest("hex");
}
