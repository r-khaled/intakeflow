import { Router } from "express";
import { getSummary } from "../../controllers/adminAnalyticsController.js";

const router = Router();

router.get("/summary", getSummary);

export default router;
