const jwt = require("jsonwebtoken");

const secret = "mysecretsshhhh";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    //   allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
  },
  signToken: function () {},
};
