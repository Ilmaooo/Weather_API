const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  //log to console
  console.log(err);

  //mongoose duplicate key
  if (err.code === 11000) {
<<<<<<< HEAD
    const message = "Email address is already in use ";
=======
    const message = "Duplicate field entered";
>>>>>>> origin/authentication
    error = new ErrorResponse(message, 400);
  }

  //Mongoose validation error
  if (err.name === "ValidateError") {
    const message = Object.values(err.errors).map((val) => val.message);
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
