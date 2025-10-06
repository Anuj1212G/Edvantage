// import express from "express";
// import { addVideoToCourse } from "../controllers/videoController.js";
// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.post("/create", protect, addVideoToCourse);

// export default router;


import express from "express";
import upload from "../middleware/upload.js";
import { addVideoToCourse } from "../controllers/videoController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /api/courses/:courseId/videos
router.post(
  "/courses/:courseId/videos",
  protect,
//   isAdmin,
  upload.single("video"),
  addVideoToCourse
);

export default router;
