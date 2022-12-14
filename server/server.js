import Fastify from "fastify";
import users from "./users.js";
import companies from "./companies.js";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", function(_request, reply) {
  reply.send({ hello: "world" });
});

fastify.get("/users", async function(_request, reply) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  reply.send(users);
});

fastify.get("/companies", async function(_request, reply) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  reply.send(companies);
});

fastify.listen({ port: 3001 }, function(err, _address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
