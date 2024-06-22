const express = require("express");
const router = express.Router();

const { getAllusers, loginuser, signup,logout,showLoginPage,showSignPage } = require("../controllers/usercontrollers");

router.get("/users", getAllusers);
router.post("/login", loginuser);
router.post("/signup", signup);
router.get("/login",showLoginPage);
router.get("/signup",showSignPage);
router.get("/logout/:id", logout);
module.exports = router;
