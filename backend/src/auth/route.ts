import type { FastifyInstance } from "fastify";
import { auth } from "./auth.js";

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
 * Registers Better Auth's own handler directly on /api/auth/*, per Better
 * Auth's official Fastify integration guide. No custom sign-in/sign-up/
 * sign-out/session wrapper endpoints are created - Better Auth's handler
 * covers all of those routes itself.
 */
export async function registerAuthRoutes(app: FastifyInstance) {
  app.route({
    method: ["GET", "POST"],
    url: "/api/auth/*",
    handler: async (request, reply) => {
      try {
        const url = new URL(request.url, `${request.protocol}://${request.headers.host}`);

        const webRequest = new Request(url, {
          method: request.method,
          headers: toWebHeaders(request.headers),
          body:
            request.method === "GET" || request.method === "HEAD"
              ? undefined
              : JSON.stringify(request.body),
        });

        const response = await auth.handler(webRequest);

        reply.status(response.status);

        // response.headers.getSetCookie() returns each Set-Cookie value
        // separately (they can't be comma-joined like other headers), so
        // they need to be forwarded as an array rather than overwritten
        // one at a time.
        const setCookies = response.headers.getSetCookie();
        if (setCookies.length > 0) {
          reply.header("set-cookie", setCookies);
        }
        response.headers.forEach((value, key) => {
          if (key.toLowerCase() !== "set-cookie") {
            reply.header(key, value);
          }
        });

        reply.send(response.body ? await response.text() : null);
      } catch (error) {
        app.log.error(error, "Better Auth handler error");
        reply.status(500).send({ error: "Internal authentication error", code: "AUTH_FAILURE" });
      }
    },
  });
}
