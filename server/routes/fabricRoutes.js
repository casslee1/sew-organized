import express from "express";
import { addFabric, getFabric } from "../controllers/fabric.js";

const router = express.Router();

router.put("/add", addFabric);
router.get("/get", getFabric);

export default router;
