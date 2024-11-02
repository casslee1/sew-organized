import express from "express";
import { addFabric, getFabric } from "../controllers/fabric.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix);
  },
});
const upload = multer({ storage: storage });

const router = express.Router();

router.put("/add", upload.single("fabricImage"), addFabric);
router.get("/get", getFabric);

export default router;
