const responses = require("../helpers/responses");
const userService = require("../services/user.service");

module.exports = {
  signup: async (req, res) => {
    let check = await userService.findByUsername(req.body.email);
    let result = responses.success("Account created successfully");
    if (check == null) {
      let user = await userService.create(req.body);
      console.log(user);
    } else {
      result = responses.badRequest("User already exist");
    }
    res.status(result.code).send(result);
  },
  login: async (req, res) => {
    let data = {
      username: req.body.username,
      password: req.body.password,
    };
    let result = responses.success("Account created successfully");
    let user = await userService.login(data);
    result = responses.success(user);
    res.status(result.code).send(result);
  },
  verifyAccount: async (req, res) => {},
};
