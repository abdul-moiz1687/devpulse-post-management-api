require("dotenv").config();

const express = require("express");
const connectDB = require("./config/config");
const postRoutes = require("./routes/postRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

// Middleware: JSON request body ko read karne ke liye
app.use(express.json());

// API welcome route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to DevPulse API",
  });
});

// Post API routes
app.use("/api/posts", postRoutes);

// Agar koi API route exist nahi karta
app.use((req, res, next) => {
  const error = new Error(
    `Route not found: ${req.method} ${req.originalUrl}`
  );

  error.statusCode = 404;
  next(error);
});

// Error handling middleware — hamesha routes ke baad
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

// Database connect hone ke baad server start karna
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
