const userRoutes = require("../routes/userRoutes");

const config = {
  migrate: true,
  userRoutes,
  port: process.env.PORT || "2020",
};

module.exports = config;
