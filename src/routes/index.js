const verityToken = require("../helpers/verify-token");
const accountRoute = require("./account");
const securedRoute = require("./secure");

const indexRoute = require("express").Router();

/* GET home page. */
indexRoute.use("/api/v1", verityToken, securedRoute);
indexRoute.use("/account", accountRoute);
indexRoute.get("/", function (req, res, next) {
  res.send("welcome to sodiq app");
  return;
});

module.exports = indexRoute;
