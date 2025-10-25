import { z } from 'zod';

const envSchema = z.object({
  PUBLIC_API_URL: z.string().url().optional(),
  PUBLIC_BASE_PATH: z.string().optional(),
  PUBLIC_COINGECKO_API_KEY: z.string().optional(),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export type Env = z.infer<typeof envSchema>;

// Validate environment variables
function validateEnv(): Env {
  const env = {
    PUBLIC_API_URL: process.env.PUBLIC_API_URL,
    PUBLIC_BASE_PATH: process.env.PUBLIC_BASE_PATH,
    PUBLIC_COINGECKO_API_KEY: process.env.PUBLIC_COINGECKO_API_KEY,
    NODE_ENV: process.env.NODE_ENV,
  };

  const result = envSchema.safeParse(env);

  if (!result.success) {
    console.error('❌ Invalid environment variables:', result.error.format());
    throw new Error('Invalid environment configuration');
  }

  return result.data;
}

export const env = validateEnv();