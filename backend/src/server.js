import dotenv from "dotenv";
import app from "./app.js";
import {
  startKnowledgeWatcher,
  syncKnowledgeBase,
} from "./services/knowledgeSyncService.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

if (!process.env.VERCEL) {
  app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);

    if (process.env.KNOWLEDGE_AUTO_SYNC !== "false") {
      try {
        const summary = await syncKnowledgeBase();
        console.log("Knowledge auto-sync complete:", summary);
      } catch (error) {
        console.warn("Knowledge auto-sync skipped:", error.message);
      }
    }

    startKnowledgeWatcher();
  });
}

export default app;