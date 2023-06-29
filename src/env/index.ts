import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  PORT: z.number().default(3000),
})

// export const env = envSchema.parse(process.env);

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables!')
}

export const env = _env.data
