import { Router } from "express";
import rateLimit from "express-rate-limit";
import { createChatReply } from "../controllers/chatController.js";

const router = Router();

const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: "error",
    message: "Too many chat requests. Please try again in a few minutes.",
  },
});

router.post("/", chatLimiter, createChatReply);

export default router;
