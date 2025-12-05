



// src/app.js (updated)
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser"; // << add this

// Import your routes
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";
// import videoRoutes from "./routes/videoRoutes.js";
import requestInfoRoutes from "./routes/requestInfoRoutes.js";
import subscribeRoutes from "./routes/subscribeRoutes.js";

const app = express();

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

// --- Security and Middleware ---
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://edvantage-psi.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", "*");
  next();
});

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser()); // parse cookies

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 15 minutes.",
});
app.use(limiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/request-info", requestInfoRoutes);
app.use("/api/subscribe", subscribeRoutes);

// Optional global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

export default app;
