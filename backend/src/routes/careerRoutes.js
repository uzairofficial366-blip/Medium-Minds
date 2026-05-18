import { Router } from "express";
import { createCareerApplication } from "../controllers/careerController.js";

const router = Router();

router.post("/", createCareerApplication);

export default router;
