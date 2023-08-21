const verityToken = require("../helpers/verify-token");
const accountRoute = require("./account");
const securedRoute = require("./secure");

const indexRoute = require("express").Router();

/* GET home page. */
indexRoute.use("/api/v1/account", accountRoute);
indexRoute.use("/api/v1", verityToken, securedRoute);

indexRoute.get("/", function (req, res, next) {
  res.send("welcome to sodiq app");
  return;
});

module.exports = indexRoute;
