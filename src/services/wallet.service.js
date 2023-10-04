const db = require("../models/index");
const { User, Profile, Role, UserRole, Wallet, TransactionLog } = db;
const bcrypt = require("bcrypt");
const uniqid = require("uniqid");
const jwt = require("jsonwebtoken");
const { now } = require("moment");
const mailService = require("./mail.service");
const { Op, QueryTypes } = require("sequelize");

module.exports = {
    userWallet: async (userid) => {
        let wallet = await Wallet.findOne({
            where: { user_id: userid}
        })
        wallet = JSON.parse(JSON.stringify(wallet));
        return wallet;
    },
    availableBalance: async(userid) => {
        let sql = `SELECT w.amount as amount FROM wallets w where w.user_id = '${userid}'`
        let result = await db.rest.query(sql, { type: QueryTypes.SELECT})
        result = JSON.parse(JSON.stringify(result));
        // console.log("hereee", result)
        let availableBal = result[0].amount
        return availableBal
    },
}