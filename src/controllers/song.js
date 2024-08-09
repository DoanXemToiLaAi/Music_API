const Song = require("../models/song");
const Artist = require("../models/artists");
const Album = require("../models/album");

//thành công
const getSongs = async (req, res) => {
  try {
    const songs = await Song.find({});
    res.status(200).send(songs);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//thành công
const createSong = async (req, res) => {
  try {
    const {
      title,
      artist,
      genre,
      duration,
      price,
      album,
      coverImage,
      audioFile,
    } = req.body;

    const song = new Song({
      title,
      artist,
      genre,
      duration,
      price,
      album,
      coverImage,
      audioFile,
    });

    await song.save();
    res.status(201).send({ message: "Song created successfully", song });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

//thành công
const getSongsByArtistId = async (req, res) => {
  const artistId = req.params.artistId;
  try {
    // Đảm bảo rằng bạn sử dụng đúng tên trường
    const songs = await Song.find({ artist: artistId });
    if (!songs) {
      return res
        .status(404)
        .json({ message: "No songs found for this artist." });
    }
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//thành công
const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).send({ message: "Song not found" });
    }
    res.status(200).send(song);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateSong = async (req, res) => {
  try {
    const { id } = req.params;

    const song = await Song.findById(id);
    if (!song) {
      return res.status(404).send({ message: "Song not found" });
    }

    const updatedSong = await Song.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send({ message: "Song updated successfully", updatedSong });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const requestingUser = req.user;

    const song = await Song.findById(id);
    if (!song) {
      return res.status(404).send({ message: "Song not found" });
    }

    if (
      requestingUser.role !== 1 &&
      requestingUser.privateid !== song.artist.toString()
    ) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    const confirmation = req.body.confirmation;
    if (!confirmation) {
      return res
        .status(400)
        .send({ message: `Are you sure to delete ${song.title}?` });
    }

    await Song.findByIdAndDelete(id);
    res.status(200).send({ message: "Song deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getSongs,
  createSong,
  getSongById,
  getSongsByArtistId,
  updateSong,
  deleteSongById,
};
