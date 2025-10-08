import Course from "../models/course.js";
import Video from "../models/video.js";
import mongoose from "mongoose";

// Fetch all courses
export const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find().populate("videos");
    res.json(courses);
  } catch (err) {
    next(err);
  }
};

// Fetch single course details
export const getCourse = async (req, res, next) => {
  try {
    const courseId = new mongoose.Types.ObjectId(req.params.id);
    const course = await Course.findById(courseId).populate("videos");
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course);
  } catch (err) {
    next(err);
  }
};

// Admin: Create a course
export const createCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    next(err);
  }
};
