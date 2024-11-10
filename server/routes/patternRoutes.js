import express from "express";
import {
  addPattern,
  getPattern,
  getPatternByID,
} from "../controllers/patterns.js";
import multer from "multer";
import { storage } from "../utils/storage.js";

const upload = multer({ storage: storage });

const router = express.Router();

router.put("/add", upload.single("patternImage"), addPattern);
router.get("/get", getPattern);
router.get("/:id", getPatternByID);

export default router;
