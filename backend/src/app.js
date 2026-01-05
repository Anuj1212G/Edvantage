// src/app.js
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";

// Import transport + routes
import { transporter } from "./utils/email.js";

import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import requestInfoRoutes from "./routes/requestInfoRoutes.js";
import subscribeRoutes from "./routes/subscribeRoutes.js";

const app = express();

// --- Security and Middleware ---
const allowedOrigins = [
  "http://localhost:5173",
  "https://edvantage-psi.vercel.app",
  "https://www.edvantage.org.in",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow non-browser tools like Postman
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// VERY IMPORTANT for preflight
app.options("*", cors());



app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// Rate limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes.",
});
app.use(limiter);

/* ===========================================================
   ROOT ROUTE — FIXES Render 404 and Health Checks
=========================================================== */
app.get("/", (req, res) => {
  res.send("Edvantage API is running...");
});

/* ===========================================================
   TEST EMAIL ROUTE — TO CONFIRM NODEMAILER WORKS
=========================================================== */
app.get("/api/test-email", async (req, res) => {
  try {
    await transporter.sendMail({
      from: `"Edvantage" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, 
      subject: "Test Email from Render Backend",
      text: "Your Nodemailer setup is working perfectly!",
    });

    res.json({ success: true, message: "Test email sent successfully!" });
  } catch (err) {
    console.error("❌ Test Email Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to send test email",
      error: err.message,
    });
  }
});

/* ===========================================================
   ROUTES
=========================================================== */
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/request-info", requestInfoRoutes);
app.use("/api/subscribe", subscribeRoutes);

/* ===========================================================
   GLOBAL ERROR HANDLER
=========================================================== */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

export default app;
