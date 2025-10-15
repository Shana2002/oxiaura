import { PrismaClient } from "@prisma/client";

export function getPrismaClient() {
  // Use a singleton in dev to avoid multiple clients
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  return global.prisma;
}
