import RequestInfo from "../models/RequestInfo.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

export const submitRequestInfo = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const entry = new RequestInfo({ name, email, phone, message });
    await entry.save();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Request Info – ${name}`,
      html: `
        <h3>New Request Info Submission</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `
    });

    res.json({ success: true, message: "Request received!" });
  } catch (err) {
    console.error("Request info error:", err);
    res.status(500).json({ success: false, message: "Error submitting form" });
  }
};
