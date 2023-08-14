const userService = require("../services/user.service");

module.exports = {
  signup: async (req, res) => {

    let data={username:req.body.username, password:req.body.password, role:req.body.role};
    let user=await userService.create(data)
    res.status(200).send("Account created successfully");
  },
  login: async (req, res) => {},
  verifyAccount: async (req, res) => {},
};
