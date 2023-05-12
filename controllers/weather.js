const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

// @desc   Get the current weather conditions for a specific location
// @route  GET /weather/current
// @access Private

exports.getCurrentWeather = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: " returns the current weather conditions for a specific location",
  });
});

// @desc   Get the weather forecast for a specific location
// @route  GET /weather/forecast
// @access Private

exports.getForecastWeather = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: " returns the weather forecast for a specific location",
  });
});

// @desc   Get historical weather data for a specific location
// @route  GET /weather/history
// @access Private

exports.getHistoryWeather = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "returns historical weather data for a specific location",
  });
});
