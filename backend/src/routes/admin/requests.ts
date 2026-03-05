import { Router } from "express";
import { listRequests, getRequest, patchStatus, getActivities } from "../../controllers/adminRequestsController.js";

const router = Router();

router.get("/", listRequests);
router.get("/:id", getRequest);
router.patch("/:id/status", patchStatus);
router.get("/:id/activities", getActivities);

export default router;
