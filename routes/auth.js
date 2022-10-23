const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

/* Creating a route for the register function. */
router.post("/register", register);
/* Creating a route for the login function. */
router.post("/login", login);

module.exports = router;
