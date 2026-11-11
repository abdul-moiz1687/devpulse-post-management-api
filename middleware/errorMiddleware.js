
const errorMiddleware = (err, req, res, next) => {
  console.error("API Error:", err);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Mongoose validation error
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors)
      .map((error) => error.message)
      .join(", ");
  }

  return res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorMiddleware;
