const vasController = require("../controllers/vas.controller");

const vasRoute = require("express").Router();
vasRoute.post("/data", vasController.data);
vasRoute.post("/airtime", vasController.airtime);

module.exports = vasRoute;
