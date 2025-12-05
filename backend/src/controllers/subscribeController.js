import { resend } from "../utils/email.js";

export const subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }

    await resend.emails.send({
      from: "Edvantage <no-reply@edvantage.org.in>",
      to: process.env.EMAIL_USER,
      subject: "New Newsletter Subscriber",
      html: `
        <h3>New Subscriber</h3>
        <p>Email: ${email}</p>
      `
    });

    res.json({ success: true, message: "Subscribed successfully!" });

  } catch (error) {
    console.error("Subscribe error:", error);
    res.status(500).json({ success: false, message: "Subscription failed" });
  }
};
