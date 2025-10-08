// import cloudinary from "../config/cloudinary.js";
import Course from "../models/course.js";
import Video from "../models/video.js";
import User from "../models/user.js";
import fs from "fs";
import mongoose from "mongoose";
import { v2 as cloudinary } from 'cloudinary'; // Re-import v2 directly as a safety measure
import dotenv from 'dotenv';
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET, // Make sure this is available
    secure: true
});
export const addVideoToCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { title, description } = req.body;
    console.log(title, description); // check if title and description are received
  console.log(req.file); // check if file is received
  console.log(req.params.courseId); // check if courseId is correct
 
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No video file uploaded" });
    }

    // Upload video to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "video",
      folder: "edvantage/videos",
      type: "authenticated", // Ensure the video is uploaded as authenticated

    });

//     const result = await cloudinary.uploader.upload(req.file.path, {
//   resource_type: "video",
//   folder: "edvantage/videos",
//   type: "authenticated",      // must be authenticated
//   overwrite: true,            // overwrite if file already exists
// });

    // Save new video in DB
    console.log("Cloudinary upload result:", result);

    const video = await Video.create({
      title,
      description,
      public_id: result.public_id,
      url: result.secure_url,
      course: courseId,
    });
console.log("Video created:", video);
    // Attach video to course
    await Course.findByIdAndUpdate(courseId, { $push: { videos: video._id } });

    // Remove temp file
  
    fs.unlinkSync(req.file.path);

    res.json({ success: true, video });
  } catch (error) {
    console.error("Error adding video:", error);
    res.status(500).json({ success: false, message: "Failed to add video" });
  }
};






export const getCourseLectures = async (req, res) => {
  const { courseId } = req.params;
  try {
    const course = await Course.findById(courseId).populate("videos");
    if (!course) return res.status(404).json({ message: "Course not found" });

    const lectures = course.videos.map(v => ({
      id: v._id,
      title: v.title,
      description: v.description,
      previewUrl: v.previewUrl || null,
    }));

    res.json({ success: true, lectures });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// 2. Get signed URL for full video
export const getLectureVideo = async (req, res) => {
  const { courseId, videoId } = req.params;
  console.log("Fetching video:", videoId, "for course:", courseId);
  const userId = req.user.id;
console.log("Request made by user:", userId);


  try {
  

    const objectUserId =new mongoose.Types.ObjectId(userId);
    const user = await User.findById(objectUserId);

console.log("User details:", user);
    if (!user) return res.status(404).json({ message: "User not found" });  
    // Check if user purchased course
    const objectCourseId =new mongoose.Types.ObjectId(courseId);
    
    if (!user.enrolledCourses.includes(objectCourseId)) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

const objectVideoId =new mongoose.Types.ObjectId(videoId);

    const video = await Video.findById(objectVideoId);
    if (!video) return res.status(404).json({ message: "Video not found" });


const expirationTime = Math.floor(Date.now() / 1000) + 30; // 30 seconds expiry
console.log("Current Unix Time (seconds):", Math.floor(Date.now() / 1000));
console.log("Signed URL Expires At (seconds):", expirationTime);


console.log("Video details:", video.public_id);
    const signedUrl = cloudinary.url("edvantage/videos/ewetmvak98lbf06gvc8w", {
      resource_type: "video",
      type: "authenticated",
      sign_url: true,
      secure: true,
    //streaming_profile: "hls", 
      expires_at: expirationTime,
      format: "m3u8"
    });

    console.log("Generated signed URL:", signedUrl);

    res.json({ success: true, url: signedUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};





// now using vimeo

