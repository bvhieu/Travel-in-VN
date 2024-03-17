const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("📒 [mongo]: Connected to mongoDB."));
};

module.exports = connectDB;
