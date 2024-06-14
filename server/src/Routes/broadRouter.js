import { Router } from "express";
import {
  addBroad,
  addExperiment,
  addLab,
  editBroad,
  getAllBroad,
  uploadExperiment,
} from "../controllers/broadController.js";
import multer from "multer";

const router = Router();
const upload = multer({
  dest: "/deployed",
});

// Borad route
router.route("/addBroad").post(addBroad);
router.route("/editBroad").put(editBroad);
router.route("/getAllBroad").get(getAllBroad);

// Lab route

router.route("/addLab").post(addLab);

// Experiement route

router.route("/addExperiment").post(addExperiment);

// upload experiment

router
  .route("/uploadExperiment")
  .post(upload.single("folder"), uploadExperiment);

export default router;
