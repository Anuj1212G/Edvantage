import express from "express";
import WebinarRegistration from "../models/WebinarRegistration.js";

const router = express.Router();

/**
 * POST /api/webinars/register/:webinarId
 * Body: { name, email }
 */
router.post("/register/:webinarId", async (req, res, next) => {
  try {
    const { webinarId } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
      });
    }

    const registration = await WebinarRegistration.create({
      webinarId,
      name,
      email,
    });

    res.status(201).json({
      success: true,
      message: "Registered successfully",
      data: registration,
    });
  } catch (err) {
    // Duplicate registration
    if (err.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already registered for this webinar",
      });
    }

    next(err);
  }
});

export default router;
