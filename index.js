const express = require("express");
const logger = require("morgan");
require("dotenv").config();
const port = process.env.PORT || 5000;
const connect = require("./utils/db");

const app = express();
app.use(logger("dev"));
app.use(express.json());

app.listen(port, () => {
  connect();
  console.log(`Server is listening on port ${port}`);
});
