const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { auth } = require("./auth");

// GET - Get all users
router.get("/", userController.getUser);
// POST - Get if the user is authenticated
router.post("/authenticated", auth.optional, userController.isAuthenticated);
// GET - Get a user by id
router.get("/:email", userController.getUserByEmail);
// POST - Login
router.post("/login", userController.tryLoginByEmailAndPw);
// POST - logout
router.post("/logout", auth.required, userController.logout);
// POST - Register
router.post("/register", userController.addUser);
// POST - Email verification via link
router.post("/verify", auth.optional, userController.verifyEmail);
// GET - Email verification via link
router.get(
  "/verify/:email/:uuid",
  auth.optional,
  userController.verifyEmailGet
);

module.exports = router;
