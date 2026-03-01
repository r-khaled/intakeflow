let prisma: any;

try {
	// Try to import the generated client
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const pkg = require("@prisma/client");
	const PrismaClient = pkg.PrismaClient ?? pkg.default ?? pkg;
	prisma = new PrismaClient();
} catch (e) {
	// If Prisma client is not generated, provide a helpful proxy that throws on use
	// This keeps the server running and produces clear error if DB operations are attempted.
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handler: ProxyHandler<any> = {
		get() {
			throw new Error(
				"Prisma client is not available. Run `npx prisma generate` and set DATABASE_URL before using DB features."
			);
		},
	};

    prisma = new Proxy({}, handler);
}

export default prisma;
