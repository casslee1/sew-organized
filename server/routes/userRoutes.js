import express from "express";
//import { fetchUser, addUser } from "./controllers/users.js";
import { addUser } from "../controllers/users.js";

const router = express.Router();

//router.get("/user/:userID", fetchUser);
router.put("/addUser", addUser);

export default router;
