const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const {checkIsAdmin} = require("../middlewares/isAdmin");
const UserController = require("../controllers/userController");
const {checkToken} = require("../middlewares/tokenAuth");

//UserRegistration
router.post(
  "/register",
  check("name", "Name cannot be empty").notEmpty(),
  check("email", "Email cannot be empty").notEmpty(),
  check("password", "Password cannot be empty").notEmpty(),
  check("confirmPassword", "Confirm password cannot be empty").notEmpty(),
  check("role", "User roles cannot be empty").notEmpty(),
  UserController.UserRegistration
);

//UserLogin
router.post(
  "/userlogin",
  check("email", "Email cannot be empty").notEmpty(),
  check("password", "Password cannot be empty").notEmpty(),
  UserController.UserLogin
);

//AdminLogin
router.post(
  "/adminlogin",
  check("email", "Email cannot be empty").notEmpty(),
  check("password", "Password cannot be empty").notEmpty(),
  checkIsAdmin,
  checkToken,
  UserController.AdminLogin
);

//GetAllUser
router.get("/allUsers", UserController.GetAllUsers);

//GetUserById
router.get("/getUserById/:id", UserController.GetUserById);

// //GetUserById
// router.get("/getUserLoggedIn", GetUserLoggedIn);

//RemoveUserById
router.delete("/removeUserById/:id", UserController.RemoveUserById);

//UpdateUserById
router.put("/updateUserById/:id", UserController.UpdateUserById);

// //UpdateUserLoggedIn
// router.get("/updateUserLoggedIn", UpdateUserLoggedIn);

//SearchByName
router.get("/searchUser/:name", UserController.SearchUser);

//ApproveUser
router.put("/approveUser/:id", UserController.ApproveUser);
module.exports = router;

//UnApproveUser
router.put("/unApproveUser/:id", UserController.UnApproveUser);
module.exports = router;
