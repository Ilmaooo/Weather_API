const swaggerJsDocs = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Weather API",
      description:
        "This API provides weather information for different locations. It allows users to fetch the current weather, weather forecast for the following 5 days and historical weather data. The API offers endpoints for retrieving weather data based on city names and provides caching functionality to improve performance. Only authorized users can access the API, authentication requires only email and password.",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/weather.js", "./routes/auth.js"],
};

// Retrieve the token from the environment variable or other source
const token = process.env.TOKEN;

const swaggerDocs = swaggerJsDocs(swaggerOptions);

const setupSwaggerMiddleware = (app) => {
  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = setupSwaggerMiddleware;
