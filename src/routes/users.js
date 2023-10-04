const db = require('../../models/index')
const { User, Profile, Role, UserRole, Wallet } = db;
const walletService = require('../services/wallet.service')


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/dashboard", async (req, res) => {
  let availableBal = await walletService.availableBalance(userid)
  let wallet = await walletService.userWallet(userid);

  res.render("user/Dashboard", { 
    title: "Dashboard",
    layout: "Dashboard",
    wallet,
    availableBal,
  })
})
module.exports = router;
