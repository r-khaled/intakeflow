import { Router } from "express";
import requestsRouter from "./requests.js";
import analyticsRouter from "./analytics.js";

const router = Router();

router.use("/requests", requestsRouter);
router.use("/analytics", analyticsRouter);

export default router;
