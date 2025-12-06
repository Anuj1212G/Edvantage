import RequestInfo from "../models/RequestInfo.js";
import { transporter } from "../utils/email.js";

export const submitRequestInfo = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Save to DB
    const entry = new RequestInfo({ name, email, phone, message });
    await entry.save();

    // Send Email using Nodemailer
    await transporter.sendMail({
      from: `"Edvantage" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Request Info – ${name}`,
      html: `
        <h3>New Request Info Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.json({ success: true, message: "Request received!" });

  } catch (err) {
    console.error("Request info error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Error submitting form" });
  }
};
