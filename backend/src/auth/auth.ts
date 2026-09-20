import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/index.js";
import * as schema from "../db/schema/index.js";
import { env } from "../env.js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  secret: env.BETTER_AUTH_SECRET,
  baseURL: env.BETTER_AUTH_URL,
  trustedOrigins: [env.CORS_ORIGIN],
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    // Better Auth cookies are httpOnly + sameSite=lax by default.
    // Force `secure` in production (requires HTTPS); allow plain HTTP in dev.
    useSecureCookies: env.isProduction,
  },
});

export type Auth = typeof auth;
