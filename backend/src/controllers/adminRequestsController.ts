import type { Request, Response } from "express";
import * as adminService from "../services/adminRequestService.js";

export async function listRequests(req: Request, res: Response) {
  const status = req.query.status as string | undefined;
  const data = await adminService.listRequests(status ? { status } : undefined);
  res.json(data);
}

export async function getRequest(req: Request, res: Response) {
  const id = req.params.id as string;
  const data = await adminService.getRequestById(id);
  if (!data) return res.status(404).json({ error: "Not found" });
  res.json(data);
}

export async function patchStatus(req: Request, res: Response) {
  const id = req.params.id as string;
  const { status } = req.body as { status?: string };
  if (!status) return res.status(400).json({ error: "Missing status" });

  const updated = await adminService.updateRequestStatus(id, status);
  if (!updated) return res.status(404).json({ error: "Not found" });
  res.json(updated);
}

export async function getActivities(req: Request, res: Response) {
  const id = req.params.id as string;
  try {
    // lazy import to avoid circular issues
    const { listActivitiesForRequest } = await import("../services/activityService.js");
    const items = await listActivitiesForRequest(id);
    res.json(items);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ error: "Could not fetch activities" });
  }
}
