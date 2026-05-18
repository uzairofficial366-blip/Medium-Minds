import { getSql } from "../config/db.js";
import { projectContext } from "../data/projectContext.js";
import { generateChatReply } from "../services/groqService.js";
import { formatKnowledgeContext, getTopKnowledgeChunks } from "../services/knowledgeService.js";

async function getKnowledgeContext(message) {
  try {
    const chunks = await getTopKnowledgeChunks(message, 8);
    const context = formatKnowledgeContext(chunks);
    return context || projectContext;
  } catch (error) {
    console.warn("Knowledge search unavailable, using fallback context:", error.message);
    return projectContext;
  }
}

async function logChatMessage(userMessage, botReply, usedContext) {
  if (!process.env.DATABASE_URL) return;

  try {
    const sql = getSql();
    await sql`
      INSERT INTO chat_messages (user_message, bot_reply, used_context)
      VALUES (${userMessage}, ${botReply}, ${usedContext})
    `;
  } catch (error) {
    console.warn("Chat logging skipped:", error.message);
  }
}

export async function createChatReply(req, res) {
  try {
    const { message } = req.body;

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ status: "error", message: "Message is required." });
    }

    const trimmedMessage = message.trim();

    if (trimmedMessage.length > 1000) {
      return res.status(400).json({ status: "error", message: "Message must be 1000 characters or fewer." });
    }

    const usedContext = await getKnowledgeContext(trimmedMessage);
    const reply = await generateChatReply(trimmedMessage, usedContext);
    await logChatMessage(trimmedMessage, reply, usedContext);

    return res.json({ reply });
  } catch (error) {
    console.error("Chat request failed:", error.message);
    return res.status(500).json({
      status: "error",
      message: "The MediumMinds assistant is unavailable right now. Please try again later.",
    });
  }
}
