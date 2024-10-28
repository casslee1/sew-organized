import express from "express";
import { addProject, getProject } from "../controllers/projects.js";

const router = express.Router();

router.put("/add", addProject);
router.get("/get", getProject);

export default router;
