import env from "dotenv";
import express from "express";
import dbConnection from "./src/db/connection.js";
import { PORT } from "./src/config/config.js";
import cookieSession from "cookie-session";
import cors from "cors";
import authRouter from "./src/Routes/authRouter.js";
import userRouter from "./src/Routes/userRouter.js";
import broadRouter from "./src/Routes/broadRouter.js";
import path from "path";
import BroadArea from "./src/models/experimentSchema.js";
import fs from "fs";

const __dirname = path.resolve();

env.config();
console.log(__dirname);
// express
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.json());

app.get("/getSimulation", async (req, res) => {
  const {
    broadId,
    labId,
    expId,
    isDocument = false,
    documentName = "",
  } = req.query;
  const broadDetails = await BroadArea.findOne({ broadAreaId: broadId });
  console.log(isDocument);
  if (!broadDetails) {
    throw new Error("Broad area not found.");
  }

  const lab = broadDetails.labs.find((lab) => lab.labId === labId);
  if (!lab) {
    throw new Error("Lab not found.");
  }

  const experiment = lab.experiments.find((exp) => exp.experimentId === expId);
  if (!experiment) {
    throw new Error("Experiment not found.");
  }
  const broadAreaName = broadDetails.broadAreaName || "broad";
  const labName = lab.labName || "lab";
  const experimentName = experiment.experimentName || "experiment";
  app.use(
    express.static(
      path.join(
        __dirname,
        `Deployed/${broadAreaName.split(" ").join("_").trim()}/${labName
          .split(" ")
          .join("_")
          .trim()}/${experimentName.split(" ").join("_").trim()}/Simulation`
      )
    )
  );
  app.use(
    express.static(
      path.join(
        __dirname,
        `Deployed/${broadAreaName.split(" ").join("_").trim()}/${labName
          .split(" ")
          .join("_")
          .trim()}/${experimentName.split(" ").join("_").trim()}/Documentation`
      )
    )
  );
  if (documentName === "pretest" || documentName === "posttest") {
    fs.readFile(
      path.join(
        __dirname,
        `Deployed/${broadAreaName.split(" ").join("_").trim()}/${labName
          .split(" ")
          .join("_")
          .trim()}/${experimentName
            .split(" ")
            .join("_")
            .trim()}/Documentation/${documentName}.json`
      ),
      "utf8",
      (err, data) => {
        if (err) {
          console.error("Error reading pretest.json:", err);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        try {
          const jsonData = JSON.parse(data);

          res.json(jsonData);
        } catch (error) {
          console.error("Error parsing pretest.json:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      }
    );
  } else {
    res.sendFile(
      path.join(
        __dirname,
        "Deployed",
        broadAreaName.split(" ").join("_").trim(),
        labName.split(" ").join("_").trim(),
        experimentName.split(" ").join("_").trim(),
        isDocument ? "Documentation" : "Simulation",
        isDocument ? `${documentName}.html` : "index.html"
      )
    );
  }
});

app.use(
  cookieSession({
    name: "bezkoder-session",
    keys: ["COOKIE_SECRET"],
    httpOnly: true,
    sameSite: "strict",
  })
);
app.use("/api", authRouter);
app.use("/api/user", userRouter);
app.use("/api/broadArea", broadRouter);
//connect to database
dbConnection();

app.use;

const port = PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${PORT}`));