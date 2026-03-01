import { Router } from "express";
import { handleCreateRequest } from "../controllers/requestsController.js";

const router = Router();

router.post("/", handleCreateRequest);

export default router;
