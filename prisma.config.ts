import { defineConfig, env } from "prisma/config";
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import "dotenv/config"

export default defineConfig({
  schema: "prisma/schema.prisma", // Path to your schema file
  migrations: {
    path: "prisma/migrations", // Where migrations are stored
    // seed: "tsx prisma/seed.ts", // Optional: for seed scripts
  },
  datasource: {
    url: env("DATABASE_URL"), // Database URL from environment variables
  },
});
