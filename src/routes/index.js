var express = require("express");
const husmoController = require("../controllers/husmo.controller");
const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/data", husmoController.data);
indexRouter.get("/airtime", husmoController.airtime);

module.exports = indexRouter;
