import { Router } from "express";
import rateLimit from "express-rate-limit";
import { syncKnowledge } from "../controllers/knowledgeController.js";

const router = Router();

const syncLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: "error",
    message: "Too many sync requests. Please try again later.",
  },
});

router.post("/sync", syncLimiter, syncKnowledge);

export default router;
