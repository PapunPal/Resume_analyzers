import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import resumeRoutes from "./routes/resume.routes.js";

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL || "http://localhost:5173",
  "https://resume-analyzers-frontend-192d.onrender.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (e.g., Postman, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("CORS policy: Origin not allowed"), false);
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});



app.use("/api/auth",authRoutes);

app.use("/api/resumes",resumeRoutes);


export default app;