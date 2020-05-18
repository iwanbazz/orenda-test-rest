const http = require("http");
const config = require("./config/");
const app = require("./app");
const dbService = require("./api/services/db.service");
const server = http.Server(app);
const environment = process.env.NODE_ENV;
const DB = dbService(environment, config.migrate).start();

server.listen(config.port, () => {
  if (environment !== "production" && environment !== "development") {
    console.error(
      `NODE_ENV is set to ${environment}, but only production and development are valid.`
    );
    process.exit(1);
  }
  return DB;
});
