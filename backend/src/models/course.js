import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: Number,
  thumbnail: String,
  videos: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Video" }
  ],
  studentsEnrolled: { type: Number, default: 0 } // 🔹 new field
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
