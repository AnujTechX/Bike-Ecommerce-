import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();

const dbPath = path.join(__dirname, "data", "db.json");

const router = jsonServer.router(dbPath);
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(router);

const port = process.env.PORT || 3000;

server.listen(port, "0.0.0.0", () => {
  console.log(`JSON Server running on port ${port}`);
});





// import jsonServer from "json-server";

// const server = jsonServer.create();
// const router = jsonServer.router("./data/db.json");
// const middleware = jsonServer.defaults();

// server.use(middleware);
// server.use(router);

// const port = process.env.PORT || 3000;

// server.listen(port, "0.0.0.0", () => {
//   console.log(`JSON Server running on port ${port}`);
// });
