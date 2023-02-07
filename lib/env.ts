import { z } from "zod";

const envSchema = z.object({
  GITHUB_PAT: z.string(),
  NODE_ENV: z.enum(["development", "test", "production"]),
});

export const env = envSchema.parse(process.env)