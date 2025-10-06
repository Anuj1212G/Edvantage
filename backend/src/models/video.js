import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  public_id: { type: String, required: true }, // Cloudinary public ID
  url: { type: String, required: true }, // stored on Cloudinary/S3
   previewUrl: { type: String },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }
}, { timestamps: true });

export default mongoose.model("Video", videoSchema);
