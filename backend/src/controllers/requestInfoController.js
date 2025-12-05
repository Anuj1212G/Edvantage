import RequestInfo from "../models/RequestInfo.js";
import { resend } from "../utils/email.js";

export const submitRequestInfo = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // save to DB
    const entry = new RequestInfo({ name, email, phone, message });
    await entry.save();

    // send email using resend
    await resend.emails.send({
      from: "Edvantage <no-reply@edvantage.org.in>",
      to: process.env.EMAIL_USER,
      subject: `New Request Info – ${name}`,
      html: `
        <h3>New Request Info Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return res.json({ success: true, message: "Request received!" });

  } catch (err) {
    console.error("Request info error:", err);
    return res.status(500).json({ success: false, message: "Error submitting form" });
  }
};
