import express from "express";
import { login, register, editProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/editProfile/:id").post(editProfile);

export default router;
