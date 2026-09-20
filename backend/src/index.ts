import Fastify from "fastify";
import cors from "@fastify/cors";
import { env } from "./env.js";
import { registerAuthRoutes } from "./auth/route.js";
import { authPlugin } from "./plugins/auth-hook.js";
import { protectedRoutes } from "./routes/protected.js";

async function main() {
  const app = Fastify({ logger: true });

  await app.register(cors, {
    origin: env.CORS_ORIGIN,
    credentials: true,
  });

  await app.register(authPlugin);
  await registerAuthRoutes(app);
  await app.register(protectedRoutes);

  app.get("/health", async () => ({ status: "ok" }));

  await app.listen({ port: env.PORT, host: "0.0.0.0" });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
