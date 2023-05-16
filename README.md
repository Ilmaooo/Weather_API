
# Weather API Project

This weather API utilizes the OpenWeatherMap service to gather weather data worldwide. To set up and run the API successfully, please follow the instructions below:


## How to use API

Firstly, you have to clone the project

```bash
  git clone https://github.com/Ilmaooo/Weather_API.git
```

Go to the project directory

```bash
  cd weather_app_api
```

Install all necessary dependencies

```bash
  npm install
```

After installing all the necessary dependencies, it is essential to have a properly configured .env file for the program to function accurately. Inside this .env file you will need an MONGO_URI, JWT_SECRET, JWT_EXPIRE, JWT_COOKIE_EXPIRE. Please note that the .env file containing the required environment variables has been provided to the professor through the Teams assignment.

```bash
NODE_ENV = [environment]
PORT = 5000

MONGO_URI = [connection string for your MongoDB database]

JWT_SECRET = [secret key used for signing and verifying JSON Web Tokens ]
JWT_EXPIRE = [expiration_for_jwtt]
JWT_COOKIE_EXPIRE = [duration of the JWT cookie stored on the client-side]
```

Once you have successfully configured the .env file, you can start the server.

```bash
  npm run dev
```
If you see the following message, the server has successfully started and the MongoDB is connected

```bash
Server running in development mode on port 5000
MongoDB Connected: [connection-string]
```



## Making API requests

There are six API endpoints, including authentication endpoints and obtaining weather data endpoints. {{URL}} is variable, set to https://localhost:5000

#### Register
```http
  POST {{URL}}/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**.  |
| `email` | `string` | **Required**.  |
| `password` | `string` | **Required**.  |


#### Login
The login request is a part of the Weather app API and is used to authenticate users. Upon successful authentication, the request returns a JSON Web Token (JWT) that can be used for subsequent authorized requests. This request allows users to log in to the application by providing their email and password. The request body should include the email and password in JSON format.

```http
  POST {{URL}}/login
```
Example request:

```bash
GET {{URL}}/login
Content-Type: application/json

{
    "email": "ilma@gmail.com",
    "password": "******"
}
```
#### Get current user 
The /me endpoint is a part of the Weather app API and is used to retrieve information about the currently authenticated user. This endpoint requires a valid JSON Web Token (JWT) to be included in the Authorization header as a bearer token.

```http
  POST {{URL}}/me
```
Example request:

```bash
GET {{URL}}/me
Authorization: Bearer {{TOKEN}}

```

### Weather endpoints
#### Current weather
The /weather/current endpoint is a part of the Weather app API and is used to retrieve the current weather conditions for a specific location. This endpoint provides real-time weather data, including temperature, humidity, wind speed, and atmospheric conditions.

Only authorized user can access.

The location is specified by providing the city as a query parameter.

```http
  GET {{URL}}/weather/current
```
Example request:

```bash
GET {{URL}}/weather/current?city=sarajevo
Authorization: Bearer {{TOKEN}}
```
#### Weather forecast
The /weather/forecast endpoint is a part of the Weather app API and allows users to retrieve the weather forecast for a specific location. This endpoint provides information about the predicted weather conditions for the upcoming period, including temperature changes, precipitation, and wind patterns.

Only authorized user can access.

The location is specified by providing the city as a query parameter.

```http
  GET {{URL}}/weather/forecast
```
Example request:

```bash
GET {{URL}}/weather/forecast?city=sarajevo
Authorization: Bearer {{TOKEN}}
```
#### Weather history
Important Note: Unfortunately, the /weather/history endpoint is currently disabled and does not retrieve actual historical weather data. We apologize for the inconvenience.


## Swagger documentation
To access the Swagger documentation, open a web browser while the server is running and navigate to:
```bash
https://localhost:5000
```

## Postman collection
The postman collection is located inside of the repository in a file named WeatherAPI.postman_collection.json

