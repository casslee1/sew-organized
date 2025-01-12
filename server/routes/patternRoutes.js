import express from "express";
import {
  addPattern,
  getPattern,
  getPatternByID,
  getPatternName,
  deletePattern,
} from "../controllers/patterns.js";
import multer from "multer";
import { storage } from "../utils/storage.js";

const upload = multer({ storage: storage });

const router = express.Router();

router.put("/add", upload.single("patternImage"), addPattern);
router.get("/get", getPattern);
router.get("/getPatternName", getPatternName);
router.get("/:id", getPatternByID);
router.delete("/:id", deletePattern);
export default router;
