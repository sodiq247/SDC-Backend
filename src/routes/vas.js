const vasController = require("../controllers/vas.controller");

const vasRoute = require("express").Router();
vasRoute.post("/data", vasController.data);
vasRoute.get("/data", vasController.allDataTransactions);
vasRoute.post("/cablesub", vasController.cablesub);
vasRoute.post("/electric", vasController.electric);
vasRoute.post("/validateMeter", vasController.validateMeter);
vasRoute.post("/validateIUC", vasController.validateIUC);
vasRoute.post("/airtime", vasController.airtime);
module.exports = vasRoute;
