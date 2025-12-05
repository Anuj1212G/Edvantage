import Subscriber from "../models/Subscriber.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS
  }
});

export const subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes("@"))
      return res.status(400).json({ success: false, message: "Invalid email" });

    // Save to DB (ignore duplicates)
    const exists = await Subscriber.findOne({ email });
    if (!exists) await Subscriber.create({ email });

    // Send email to you
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Newsletter Subscriber",
      html: `<h3>New subscriber:</h3><p>${email}</p>`
    });

    return res.json({ success: true, message: "Subscribed successfully!" });

  } catch (error) {
    console.log("Subscribe Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
