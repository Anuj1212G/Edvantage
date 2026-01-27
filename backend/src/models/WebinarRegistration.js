import mongoose from "mongoose";

const webinarRegistrationSchema = new mongoose.Schema(
  {
    webinarId: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    registeredAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Prevent same email registering twice for same webinar
webinarRegistrationSchema.index(
  { webinarId: 1, email: 1 },
  { unique: true }
);

export default mongoose.model(
  "WebinarRegistration",
  webinarRegistrationSchema
);
