// import express from "express";
// import cors from "cors";
// import helmet from "helmet";
// import morgan from "morgan";
// import rateLimit from "express-rate-limit";

// // Import your routes
// import authRoutes from "./routes/authRoutes.js";
// import courseRoutes from "./routes/courseRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import videoRoutes from "./routes/videoRoutes.js";

// const app = express();

// // --- Security and Middleware ---
// // CORS for cross-origin requests
// app.use(cors({
//   origin: "*",
//   credentials: true,
// }));

// // Helmet for security headers
// app.use(helmet());

// // Morgan for request logging
// app.use(morgan("dev"));

// // Body parser middleware
// app.use(express.json());

// // API rate limiter to prevent brute-force attacks
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // max 100 requests per 15 minutes
//   message: "Too many requests from this IP, please try again after 15 minutes."
// });
// app.use(limiter);

// // --- Routes ---
// app.use("/api/auth", authRoutes);
// app.use("/api/courses", courseRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/users", userRoutes);
// // app.use("/api/videos", videoRoutes);

// // --- Error Handling (optional but recommended) ---
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// export default app;




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

const app = express();

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:5173";

// --- Security and Middleware ---
app.use(
  cors({
    origin: CLIENT_ORIGIN,   // DO NOT use "*" when credentials needed
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

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

// Optional global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!" });
});

export default app;
