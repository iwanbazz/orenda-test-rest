const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const http = require("http");
const mapRoutes = require("express-routes-mapper");
const cors = require("cors");

require("dotenv").config();

const config = require("./config/");
const dbService = require("./api/services/db.service");

const validatePolicy = require("./api/middleware/validatePolicy");

const environment = process.env.NODE_ENV;

const app = express();
const server = http.Server(app);

const mappedUserRoutes = mapRoutes(
  config.userRoutes,
  "api/controllers/",
  validatePolicy().requiredHeaders
);

const DB = dbService(environment, config.migrate).start();

app.use(cors());

app.use(
  helmet({
    dnsPrefetchControl: false,
    frameguard: false,
    ieNoOpen: false,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", mappedUserRoutes);

server.listen(config.port, () => {
  if (environment !== "production" && environment !== "development") {
    console.error(
      `NODE_ENV is set to ${environment}, but only production and development are valid.`
    );
    process.exit(1);
  }
  return DB;
});
