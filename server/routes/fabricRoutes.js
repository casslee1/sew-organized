import express from "express";
import { addFabric, getFabric } from "../controllers/fabric.js";
import multer from "multer";
import { storage } from "../utils/storage.js";

const upload = multer({ storage: storage });

const router = express.Router();

router.put("/add", upload.single("fabricImage"), addFabric);
router.get("/get", getFabric);

export default router;
