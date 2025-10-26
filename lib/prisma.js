/* This code snippet is importing the `PrismaClient` class from the `@prisma/client` package. It then
creates a `db` constant that either uses the existing `globalThis.prisma` object or creates a new
instance of `PrismaClient` if `globalThis.prisma` is not defined. */
import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV != "production") {
  globalThis.prisma = db;
}
