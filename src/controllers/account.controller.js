const userService = require("../services/user.service");

module.exports = {
  signup: async (req, res) => {
    let data = {
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
    };
    let user = await userService.create(data);
    res.status(200).send("Account created successfully");
  },
  login: async (req, res) => {
    let data = {
      username: req.body.username,
      password: req.body.password,
    };
    let user = await userService.login(data);
    res.status(200).send(user);
  },
  verifyAccount: async (req, res) => {},
};
