import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);

const port = process.env.PORT || 3000;

server.listen(port, "0.0.0.0", () => {
  console.log(`JSON Server running on port ${port}`);
});
