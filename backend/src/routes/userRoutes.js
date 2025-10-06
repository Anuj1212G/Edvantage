import express from "express";
import { getProfile, getMyCourses } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, getProfile);
router.get("/my-courses", protect, getMyCourses);

export default router;
