import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: env.DB_HOST,
    port: 3306,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
