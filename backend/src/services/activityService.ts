import prisma from "../db/index.js";

export async function createActivity(requestId: string, data: { action: string; note?: string; oldStatus?: string | null; newStatus?: string | null; }) {
  return prisma.activity.create({
    data: {
      request: { connect: { id: requestId } },
      action: data.action as any,
      note: data.note,
      oldStatus: data.oldStatus as any,
      newStatus: data.newStatus as any,
    },
  });
}

export async function listActivitiesForRequest(requestId: string) {
  return prisma.activity.findMany({
    where: { requestId },
    orderBy: { createdAt: "asc" },
  });
}
