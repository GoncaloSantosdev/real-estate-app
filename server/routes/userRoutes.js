import express from "express";
const router = express.Router();
// Controllers
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userControllers.js";
// Middleware
import { protect } from "../middlewares/authMiddleware.js";

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(protect, logoutUser);

export default router;
