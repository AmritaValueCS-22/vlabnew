import { Router } from "express";
import { login, logout, register } from "../controllers/auth.js";
import { LoginValidate, RegisterValidate } from "../middlewear/authValidate.js";

const router = Router();

router.route("/register").post(RegisterValidate, register);
router.route("/login").post(LoginValidate, login);
router.route("/logout/:userId/:token").get(logout);

export default router;
