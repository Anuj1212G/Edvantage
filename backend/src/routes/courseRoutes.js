import express from "express";
import { getCourses, getCourse, createCourse } from "../controllers/courseController.js";
import { addVideoToCourse, getCourseLectures, getLectureVideo } from "../controllers/videoController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getCourses);
router.get("/:id", getCourse);

// Admin only: create new course
router.post("/create", protect, isAdmin, createCourse);

// Admin only: add video to a course
router.post("/:courseId", protect, upload.single("video"), addVideoToCourse);

// **NEW ROUTES**
// Get lecture metadata (titles, descriptions, previews)
router.get("/:courseId/lectures", protect, getCourseLectures);

// Get signed URL for full video
router.get("/:courseId/lectures/:videoId", protect, getLectureVideo);

export default router;
