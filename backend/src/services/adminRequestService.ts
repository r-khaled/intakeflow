import prisma from "../db/index.js";
import { createActivity } from "./activityService.js";

export async function listRequests(filter?: { status?: string }) {
  const where: any = {};
  if (filter?.status) where.status = filter.status;
  return prisma.request.findMany({ where, include: { service: true } });
}

export async function getRequestById(id: string) {
  return prisma.request.findUnique({ where: { id }, include: { service: true, activities: true } });
}

export async function updateRequestStatus(id: string, newStatus: string) {
  const existing = await prisma.request.findUnique({ where: { id } });
  if (!existing) return null;

  const updated = await prisma.request.update({ where: { id }, data: { status: newStatus as any } });

  await createActivity(id, { action: "STATUS_CHANGE", oldStatus: existing.status, newStatus });

  return updated;
}
