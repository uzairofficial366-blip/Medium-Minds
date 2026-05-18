import { syncKnowledgeBase } from "../services/knowledgeSyncService.js";

export async function syncKnowledge(req, res) {
  const token = process.env.ADMIN_SYNC_TOKEN;
  const authHeader = req.get("authorization") || "";

  if (!token || token === "change_this_to_a_secure_random_token") {
    return res.status(503).json({
      status: "error",
      message: "Knowledge sync is not configured.",
    });
  }

  if (authHeader !== `Bearer ${token}`) {
    return res.status(401).json({
      status: "error",
      message: "Unauthorized.",
    });
  }

  try {
    const summary = await syncKnowledgeBase();
    return res.json({ status: "success", summary });
  } catch (error) {
    console.error("Knowledge sync failed:", error.message);
    return res.status(500).json({
      status: "error",
      message: "Knowledge sync failed. Please check backend logs.",
    });
  }
}
