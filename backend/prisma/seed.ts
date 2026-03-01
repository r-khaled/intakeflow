import prisma from "../src/db/index.js";

async function main() {
  const svc = await prisma.service.upsert({
    where: { id: 1 },
    update: {},
    create: { id: 1, name: "Default Service" },
  });

  const req = await prisma.request.create({
    data: {
      name: "Test User",
      email: "test@example.com",
      contactMethod: "EMAIL",
      message: "Seed request",
      service: { connect: { id: svc.id } },
    },
  });

  // eslint-disable-next-line no-console
  console.log({ svc, req });
}

main()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
