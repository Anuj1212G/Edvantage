import express from "express";
import { register, login } from "../controllers/authController.js";
import { checkCourseAccess } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/:userId/courses/:courseId/access",protect ,checkCourseAccess);

export default router;
