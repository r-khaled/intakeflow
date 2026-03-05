import type { Request, Response } from "express";
import * as analytics from "../services/analyticsService.js";

export async function getSummary(_req: Request, res: Response) {
  const data = await analytics.summaryMetrics();
  res.json(data);
}
