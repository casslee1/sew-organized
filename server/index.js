import express from "express";
import cors from "cors";
import sampleRoutes from "./routes/sampleRoutes.js";
import fabricRoutes from "./routes/fabricRoutes.js";
import patternRoutes from "./routes/patternRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/sample", sampleRoutes);
app.use("/fabric", fabricRoutes);
app.use("/patterns", patternRoutes);
app.use("/projects", projectRoutes);

app.listen(8080, () => {
  console.log("Port 8080");
});
