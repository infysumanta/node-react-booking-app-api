const express = require("express");
const logger = require("morgan");
require("dotenv").config();
const port = process.env.PORT || 5000;
const connect = require("./utils/db");

const hotelsRoute = require("./routes/hotels");

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use("/api/hotels", hotelsRoute);

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
