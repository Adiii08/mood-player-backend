const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  mood: { type: String, required: true }, // happy | sad | calm | romantic | energetic
  url: { type: String, required: true },
  thumbnail: { type: String },
});

module.exports = mongoose.model("Song", songSchema);
