import express from "express";
import { addProject, getProject } from "../controllers/projects.js";
import multer from "multer";
import { storage } from "../utils/storage.js";

const upload = multer({ storage: storage });

const router = express.Router();

router.put("/add", upload.single("projectImage"), addProject);
router.get("/get", getProject);

export default router;
