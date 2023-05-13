const express = require("express");
const request = require("request");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");

//load env variables
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDB();

//Route files
const weather = require("./routes/weather");
const auth = require("./routes/auth");

const app = express();

//Body parser
app.use(express.json());

//cookie parser
app.use(cookieParser());

//Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Mount routers
app.use(express.json());
app.use("/weather", weather);
app.use("/", auth);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close server
  server.close(() => process.exit(1));
});
