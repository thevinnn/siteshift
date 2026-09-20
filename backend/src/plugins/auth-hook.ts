import fp from "fastify-plugin";
import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { auth } from "../auth/auth.js";

type SessionResult = Awaited<ReturnType<typeof auth.api.getSession>>;

declare module "fastify" {
  interface FastifyRequest {
    user: NonNullable<SessionResult>["user"] | null;
    session: NonNullable<SessionResult>["session"] | null;
  }
}

function toWebHeaders(headers: Record<string, string | string[] | undefined>): Headers {
  const webHeaders = new Headers();
  for (const [key, value] of Object.entries(headers)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) webHeaders.append(key, v);
    } else {
      webHeaders.append(key, value);
    }
  }
  return webHeaders;
}

/**
 * Populates request.user / request.session on every request by asking
 * Better Auth to validate the session cookie. Cheap no-op (null/null)
 * when there's no cookie, so it's safe to register globally.
 */
export const authPlugin: FastifyPluginAsync = fp(async (fastify) => {
  fastify.decorateRequest("user", null);
  fastify.decorateRequest("session", null);

  fastify.addHook("preHandler", async (request) => {
    const result = await auth.api.getSession({
      headers: toWebHeaders(request.headers),
    });
    request.user = result?.user ?? null;
    request.session = result?.session ?? null;
  });
});

export async function requireAuth(request: FastifyRequest, reply: FastifyReply) {
  if (!request.user) {
    reply.status(401).send({ error: "Unauthorized" });
  }
}
