import express from "express";
import { addPattern, getPattern } from "../controllers/patterns.js";

const router = express.Router();

router.put("/add", addPattern);
router.get("/get", getPattern);

export default router;
