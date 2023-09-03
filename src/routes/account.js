const accountController = require("../controllers/account.controller");

const accountRoute = require("express").Router();
accountRoute.post("/", accountController.signup);
accountRoute.post("/token", accountController.login);
accountRoute.get("/verify/:token", accountController.verifyAccount);

module.exports = accountRoute;
