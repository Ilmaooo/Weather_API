const express = require("express");
const {
  getCurrentWeather,
  getForecastWeather,
  getHistoryWeather,
} = require("../controllers/weather");

const router = express.Router();

const { protect } = require("../middleware/auth");

/**
 * @swagger
 * /weather/current:
 *   get:
 *     summary: Get the current weather conditions for a specific location
 *     description: Returns the current weather conditions for a specific location.
 *     tags: [Weather]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: city
 *         required: true
 *         description: The city name for which to retrieve the weather.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *       401:
 *         description: Unauthorized - Invalid or missing authentication token.
 *       500:
 *         description: Internal Server Error - Error occurred while fetching weather data.
 */
router.route("/current").get(protect, getCurrentWeather);

/**
 * @swagger
 * /weather/forecast:
 *   get:
 *     summary: Get weather forecast
 *     description: Retrieves the weather forecast for a specific location.
 *     tags: [Weather]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: city
 *         description: The city name for which to retrieve the weather forecast.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 forecast:
 *                   type: string
 *                   description: The weather forecast for the specified city.
 *       401:
 *         description: Unauthorized - Access token is missing or invalid.
 *       500:
 *         description: Internal Server Error - Error occurred while retrieving the weather forecast.
 */
router.route("/forecast").get(protect, getForecastWeather);

/**
 * @swagger
 * /weather/history:
 *   get:
 *     summary: Get historical weather data
 *     description: Retrieves historical weather data for a specific location.
 *     tags: [Weather]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   description: The historical weather data.
 *       401:
 *         description: Unauthorized - Access token is missing or invalid.
 *       500:
 *         description: Internal Server Error - Error occurred while retrieving historical weather data.
 */
router.route("/history").get(protect, getHistoryWeather);

module.exports = router;
