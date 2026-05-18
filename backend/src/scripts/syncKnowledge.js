import dotenv from "dotenv";
import { syncKnowledgeBase } from "../services/knowledgeSyncService.js";

dotenv.config();

try {
  const summary = await syncKnowledgeBase();
  console.log("Knowledge sync complete:", summary);
  process.exit(0);
} catch (error) {
  console.error("Knowledge sync failed:", error.message);
  process.exit(1);
}
