const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  destinationName: {
    type: String,
    required: [true, "Destination name is required"],
  },
  description: {
    type: String,
    required: [false, "Description is not required"],
  },
  location: {
    type: String,
    required: [true, "Location is required"],
  },
  image: {
    type: String,
    required: [false, "Image is not required"],
  },
});

const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
