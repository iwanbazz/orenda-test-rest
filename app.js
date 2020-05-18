const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const mapRoutes = require("express-routes-mapper");
const cors = require("cors");

require("dotenv").config();

const config = require("./config/");

const validatePolicy = require("./api/middleware/validatePolicy");

const app = express();

const mappedUserRoutes = mapRoutes(
  config.userRoutes,
  "api/controllers/",
  validatePolicy().requiredHeaders
);

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

module.exports = app;
