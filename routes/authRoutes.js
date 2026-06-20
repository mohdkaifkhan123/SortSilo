import express from "express";
import {
  register,
  login,
  getUser,
  updateUser,
  deleteUser,
} from "../controller/authController.js";
import { protect } from "../middleware/protect.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes
router.get("/user/:id", protect, getUser);
router.put("/user/:id", protect, updateUser);
router.delete("/user/:id", protect, deleteUser);

export default router;
