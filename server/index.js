import express from "express";
import cors from "cors";
import sampleRoutes from "./routes/sampleRoutes.js";
import fabricRoutes from "./routes/fabricRoutes.js";
import patternRoutes from "./routes/patternRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors());
app.use(express.json());

app.use("/sample", sampleRoutes);
app.use("/fabric", fabricRoutes);
app.use("/patterns", patternRoutes);
app.use("/projects", projectRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(8080, () => {
  console.log("Port 8080");
});
