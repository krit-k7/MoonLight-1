import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
      "https://hoppscotch.io",
      "https://hoppscotch.com",

      // Production frontend
      "http://20.255.60.10:5174",
    ],
    credentials: true,
  })
);

// Health Check Route
app.get("/", (req, res) => {
  res.json({
    status: "Server is running 🚀",
  });
});

// API Route
app.get("/api/message", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello from Deep Saha",
    timestamp: new Date().toISOString(),
  });
});

// Server
const PORT = process.env.PORT || 4000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
