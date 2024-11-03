import express from "express";
import { addPattern, getPattern } from "../controllers/patterns.js";
import multer from "multer";
import { storage } from "../utils/storage.js";

const upload = multer({ storage: storage });

const router = express.Router();

router.put("/add", upload.single("patternImage"), addPattern);
router.get("/get", getPattern);

export default router;
