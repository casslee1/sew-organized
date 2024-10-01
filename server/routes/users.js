const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
const userController = require("../controllers/user.js");

router.get("/user/:userID", userController.fetchUser);
