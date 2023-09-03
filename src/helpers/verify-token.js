const jsonwebtoken = require("jsonwebtoken");
const db = require("../models/index");
const responses = require("./responses");

function verityToken(req, res, next) {
  let result = null;
  try {
    // if (req.header.Authorization == null) {
    //   result = responses.badRequest("No token found in header");
    // }
    if (req.get("Authorization") == null) {
      result = responses.badRequest("No token found in header");
    }
    let token = req.get("Authorization").split(" ")[1];

    if (jsonwebtoken.verify(token, "secret123")) {
      let payload = jsonwebtoken.decode(token);
      if (payload.exp >= Date.now()) {
        result = responses.unauthorized("Token has expired");
      } else {
        res.locals.user = payload;
      }
    } else {
      result = responses.unauthorized("Not a valid token");
    }
  } catch (e) {
    result = responses.unauthorized(e);
  }
  if (result != null) {
    res.status(result.code).send(result);
  } else {
    return next();
  }
}
module.exports = verityToken;
