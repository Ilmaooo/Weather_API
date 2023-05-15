const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const request = require("request");
const moment = require("moment");
const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 300 });

// @desc   Get the current weather conditions for a specific location
// @route  GET /weather/current
// @access Private

exports.getCurrentWeather = asyncHandler(async (req, res, next) => {
  const city = req.query.city;
  const apiKey = "e785a9a89dcee7e9c012f49c97dc29c7";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  //checking if data is available in the cache
  const cachedData = cache.get(apiUrl);
  if (cachedData) {
    return res.send(cachedData); //return it if available
  }

  request(apiUrl, function (error, response, body) {
    if (error) {
      return next(
        new ErrorResponse("Error occurred while fetching weather data.", 500)
      );
    }

    if (response.statusCode === 200) {
      const data = JSON.parse(body);
      const weather = data.weather[0];
      const temperature = (data.main.temp - 273.15).toFixed(1);
      const location = data.name;
      const dateTime = new Date(data.dt * 1000).toLocaleString();
      const pressure = data.main.pressure;
      const windSpeed = data.wind.speed;
      const humidity = data.main.humidity;

      const weatherString = `Current weather in ${location}: ${weather.description}.
      Temperature: ${temperature}°C.
      Date and Time: ${dateTime}
      Pressure: ${pressure} hPa
      Wind speed: ${windSpeed} m/s
      Humidity: ${humidity} %`;

      cache.set(apiUrl, weatherString);

      res.send(weatherString);
    } else {
      res.status(response.statusCode).send("Unable to fetch weather data.");
    }
  });
});

// @desc   Get the weather forecast for a specific location
// @route  GET /weather/forecast
// @access Private

exports.getForecastWeather = asyncHandler(async (req, res, next) => {
  const city = req.query.city;
  const apiKey = "e785a9a89dcee7e9c012f49c97dc29c7";
  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  //checking if data is available in the cache
  const cachedData = cache.get(apiUrl);
  if (cachedData) {
    return res.send(cachedData); //return it if available
  }

  request(apiUrl, function (error, response, body) {
    if (error) {
      return next(
        new ErrorResponse("Error occurred while fetching weather data.", 500)
      );
    }
    if (response.statusCode === 200) {
      const data = JSON.parse(body);
      let forecastString = `Forecast weather for ${city} for the next 5 days is the following:\n\n`;

      // Get forecast for the next 5 days
      for (let i = 0; i < 5; i++) {
        const forecastData = data.list[i * 8]; // Get data for each day at the same time (e.g., 12:00 PM)
        const temperature = (forecastData.main.temp - 273.15).toFixed(1);
        const weatherDescription = forecastData.weather[0].description;

        // Calculate the date for each forecast entry
        const date = moment().add(i, "days").format("M/D/YYYY");

        forecastString += `Date: ${date}\nTemperature: ${temperature}°C\nWeather: ${weatherDescription}\n\n`;

        cache.set(apiUrl, forecastString);
      }

      res.status(200).send(forecastString);
    } else {
      res.status(response.statusCode).send("Unable to fetch weather data.");
    }
  });
});

// @desc   Get the historical weather data for a specific location within a date range
// @route  GET /weather/history
// @access Private

exports.getHistoryWeather = asyncHandler(async (req, res, next) => {});
