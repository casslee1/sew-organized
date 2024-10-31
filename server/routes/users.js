import express from "express";
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
import userController from "./controllers/users.js";

router.get("/user/:userID", userController.fetchUser);
