import prisma from "../db/index.js";

export async function summaryMetrics() {
  const total = await prisma.request.count();

  const perStage = await prisma.request.groupBy({
    by: ["status"],
    _count: { _all: true },
  });

  const countsByStage: Record<string, number> = {};
  perStage.forEach((p: any) => (countsByStage[p.status] = p._count._all));

  // Conversions: count requests which have activities indicating the transitions
  const newToContacted = await prisma.activity.count({ where: { action: "STATUS_CHANGE", oldStatus: "NEW", newStatus: "CONTACTED" } });
  const contactedToQualified = await prisma.activity.count({ where: { action: "STATUS_CHANGE", oldStatus: "CONTACTED", newStatus: "QUALIFIED" } });
  const qualifiedToWon = await prisma.activity.count({ where: { action: "STATUS_CHANGE", oldStatus: "QUALIFIED", newStatus: "WON" } });

  const wonCount = countsByStage["WON"] ?? 0;

  const overallConversion = total > 0 ? wonCount / total : 0;

  const lostCount = countsByStage["LOST"] ?? 0;

  return {
    total,
    perStage: countsByStage,
    conversions: {
      newToContacted,
      contactedToQualified,
      qualifiedToWon,
      overallConversion,
      wonCount,
      lostCount,
    },
  };
}
