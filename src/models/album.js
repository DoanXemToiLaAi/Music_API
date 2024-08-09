const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
  },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
  releaseDate: Date,
  coverImage: { type: String }, // URL của hình ảnh bìa
  price: {
    type: Number,
    required: true,
    default: function () {
      return this.songs.reduce((total, song) => total + song.price, 0) * 0.7;
    },
  },
});

module.exports = mongoose.model("Album", albumSchema);
