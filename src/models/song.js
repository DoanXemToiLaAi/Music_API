const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: String,
  artist: { type: mongoose.Schema.Types.ObjectId, ref: "Artists" },
  album: { type: mongoose.Schema.Types.ObjectId, ref: "Album" },
  genre: String,
  duration: Number,
  price: Number,
  coverImage: String,
  audioFile: String,
});

module.exports = mongoose.model("Song", songSchema);
