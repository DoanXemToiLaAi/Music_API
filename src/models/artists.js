const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Song" }],
  bio: String,
  website: String,
  profileImage: { type: String }, // URL của hình ảnh hồ sơ
});

module.exports = mongoose.model("Artists", artistSchema);
