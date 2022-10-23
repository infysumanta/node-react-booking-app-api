const express = require("express");
const logger = require("morgan");
const cookie = require("cookie-parser");
require("dotenv").config();

const port = process.env.PORT || 5000;
const connect = require("./utils/db");

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const hotelsRoute = require("./routes/hotels");
const roomsRoute = require("./routes/rooms");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(cookie());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  connect();
  console.log(`Server is listening on port ${port}`);
});
