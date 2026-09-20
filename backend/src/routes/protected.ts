import type { FastifyPluginAsync } from "fastify";
import { requireAuth } from "../plugins/auth-hook.js";

/**
 * Example protected route. Add further authenticated routes the same way:
 * register `requireAuth` as a preHandler and read request.user/request.session.
 */
export const protectedRoutes: FastifyPluginAsync = async (app) => {
  app.get("/api/me", { preHandler: requireAuth }, async (request) => {
    return { user: request.user, session: request.session };
  });
};
