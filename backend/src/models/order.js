import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  paymentId: String, // from Razorpay/Stripe
  status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
