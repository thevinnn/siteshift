import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "../env.js";
import * as schema from "./schema/index.js";

// This pool/connection is for the MAIN application database only
// (users, sessions, accounts, verification). The future AI subsystem
// must use its own separate database/credentials and must never be
// given this connection string or pool.
export const pool = new Pool({ connectionString: env.DATABASE_URL });

export const db = drizzle(pool, { schema });
