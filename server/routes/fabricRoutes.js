import express from "express";
import {
  addFabric,
  getFabric,
  getFabricByID,
  getFabricName,
  updateFabric,
  getFabricOptions,
  deleteFabric,
} from "../controllers/fabric.js";
import multer from "multer";
import { storage } from "../utils/storage.js";

const upload = multer({ storage: storage });

const router = express.Router();

router.put("/add", upload.single("fabricImage"), addFabric);
router.get("/get", getFabric);
router.get("/getFabricName", getFabricName);
router.get("/:id", getFabricByID);
router.put("/edit/:id", upload.single("fabricImage"), updateFabric);
router.get("/options/:filter", getFabricOptions);
router.delete("/:id", deleteFabric);

export default router;
