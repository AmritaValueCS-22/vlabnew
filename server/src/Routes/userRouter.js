import { Router } from "express";
import {
  addBulkUser,
  deleteUser,
  editUser,
  getUserDetails,
} from "../controllers/userDetails.js";

const router = Router();

router.route("/getAllUsersList").get(getUserDetails);
router.route("/editUser").put(editUser);
router.route("/deleteUser").get(deleteUser);
router.route("/addBulk").post(addBulkUser);

export default router;
