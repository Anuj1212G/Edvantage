import User from "../models/user.js";

import Course from "../models/course.js";

// ✅ Check if a user has access to a specific course
export const checkCourseAccess = async (req, res, next) => {
  try {
    const { userId, courseId } = req.params;

    // 1️⃣ Validate user existence
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // 2️⃣ Validate course existence
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    // 3️⃣ Check if the course is in user's enrolledCourses array
    const hasAccess = user.enrolledCourses.some(
      (id) => id.toString() === courseId
    );

    // 4️⃣ Respond accordingly
    res.status(200).json({ hasAccess });
  } catch (err) {
    next(err);
  }
};




export const getProfile = async (req, res) => {
  try {
    // `protect` middleware sets req.user = logged-in user ID
    const user = await User.findById(req.user.id).select("-password").populate("enrolledCourses");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getMyCourses = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate("enrolledCourses");
    res.json(user.enrolledCourses);
  } catch (err) {
    next(err);
  }
};
