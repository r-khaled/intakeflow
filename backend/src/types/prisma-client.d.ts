declare module "@prisma/client" {
  export class PrismaClient {
    constructor(arg?: any);
    $disconnect(): Promise<void>;
  }
  export * from "@prisma/client";
}
