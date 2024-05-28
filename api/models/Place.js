const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: [true, "Please provide a title."],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Please provide an address."],
    trim: true,
  },
  photos: {
    type: [String],
    required: [true, "Please provide photos."],
  },
  description: {
    type: String,
    required: [true, "Please provide a description."],
  },
  perks: {
    type: [String],
    required: [true, "Please provide perks."],
  },
  extraInfo: {
    type: String,
    required: [true, "Please provide extra information."],
  },
  checkIn: {
    type: Number,
    required: [true, "Please provide check-in time"],
  },
  checkOut: {
    type: Number,
    required: [true, "Please provide check-out time"],
  },
  maxGuests: {
    type: Number,
    required: [true, "Please provide maximum number of guests"],
  },
});

const PlaceModel = mongoose.model("Place", placeSchema);

module.exports = PlaceModel;
