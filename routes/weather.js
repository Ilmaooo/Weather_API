const express = require("express");
const {
  getCurrentWeather,
  getForecastWeather,
  getHistoryWeather,
} = require("../controllers/weather");

const router = express.Router();

const { protect } = require("../middleware/auth");

router.route("/current").get(protect, getCurrentWeather);
router.route("/forecast").get(protect, getForecastWeather);
router.route("/history").get(protect, getHistoryWeather);

module.exports = router;
