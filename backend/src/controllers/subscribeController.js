import { transporter } from "../utils/email.js";

export const subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    // Send email using Nodemailer
    await transporter.sendMail({
      from: `"Edvantage" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,  // your inbox
      subject: "New Newsletter Subscriber",
      html: `
        <h3>New Subscriber</h3>
        <p><strong>Email:</strong> ${email}</p>
      `
    });

    res.json({ success: true, message: "Subscribed successfully!" });

  } catch (error) {
    console.error("Subscribe error:", error);
    res.status(500).json({ success: false, message: "Subscription failed" });
  }
};
