import Order from "../models/order.js";
import User from "../models/user.js";

// Create new order after successful payment
export const createOrder = async (req, res, next) => {
  try {
    const { courseId, paymentId } = req.body;

    // 1. Create order record
    const order = await Order.create({
      user: req.user._id,
      course: courseId,
      paymentId,
      status: "completed",
    });

    // 2. Add course to user's enrolled courses
    await User.findByIdAndUpdate(req.user._id, {
      $addToSet: { enrolledCourses: courseId }, // avoids duplicates
    });

    res.status(201).json({
      success: true,
      message: "Order created & course enrolled successfully",
      order,
    });
  } catch (err) {
    next(err);
  }
};

// Get all orders of logged-in user
export const getMyOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("course")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (err) {
    next(err);
  }
};

// Get enrolled courses (helper endpoint)
// export const getMyCourses = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.user._id).populate("enrolledCourses");

//     res.json({
//       success: true,
//       courses: user.enrolledCourses,
//     });
//   } catch (err) {
//     next(err);
//   }
// };
