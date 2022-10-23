const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, dbConfig, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const dbConfig =
  process.env.ENV === "local"
    ? {}
    : {
        auth: {
          username: process.env.MONGO_ROOT_USERNAME,
          password: process.env.MONGO_ROOT_PASSWORD,
        },
        authSource: "admin",
      };

mongoose.connection.on("disconnected", () => {
  console.log("Database not Connected");
});
mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});
module.exports = connect;
