import User from "../models/user.js";

export const getProfile = async (req, res, next) => {
  try {
    res.json(req.user);
  } catch (err) {
    next(err);
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
