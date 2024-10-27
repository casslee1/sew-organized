import express from "express";
import { addSample, getSample } from "../controllers/sample.js";

const router = express.Router();

router.put("/add", addSample);
router.get("/get", getSample);

export default router;
