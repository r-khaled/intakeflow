import { Router } from "express";
import healthRouter from "./health.js";
import requestsRouter from "./requests.js";

const router = Router();

router.use("/health", healthRouter);
router.use("/requests", requestsRouter);

export default router;
