import mongoose from "mongoose";

const RequestInfoSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    email: String,
    message: String,
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("RequestInfo", RequestInfoSchema);
