"use strict";
const jwt = require("jsonwebtoken");

module.exports = {
  //Token will be issue with the given payload and expire time
  issue(payload, expiresIn) {
    return jwt.sign(payload, process.env.jwtSecret, {
      expiresIn: expiresIn ? expiresIn : "20d",
    });
  },
  verify(token) {
    try {
      return jwt.verify(token, process.env.jwtSecret); //
    } catch (err) {
      return false;
    }
  },
};
