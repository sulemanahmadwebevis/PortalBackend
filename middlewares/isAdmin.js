"use strict";
const jwtHelper = require("./jwt");
let checkIsAdmin = (req, res, next) => {
  let token = req.header("x-auth-token"); // in header token will be send in "x-auth-token" variable
  if (token) {
    const isVerified = jwtHelper.verify(token);
    console.log("isVerified: ", isVerified);
    if (isVerified.role === "Admin" || isVerified.role === "admin") {
      next();
    } else {
      return res.json({
        success: 401,
        message: "Only Admin have an Access to it",
        status: 401,
      });
    }
  } else {
    return res.json({
      success: 404,
      message: "Token is not provided",
      missingParameters: ["login_token"],
    });
  }
};

module.exports = {
  checkIsAdmin: checkIsAdmin,
};
