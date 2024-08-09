const Album = require("../models/album");
const Artist = require("../models/artists");

const createAlbum = async (req, res) => {
  try {
    const { name, releaseDate, coverImage } = req.body;
    const requestingUser = req.user;

    let artistId;
    if (requestingUser.privateid) {
      artistId = requestingUser.privateid;
    } else if (requestingUser.role === 1) {
      const artist = await Artist.findOne({ username: req.body.artistName });
      if (!artist) {
        return res.status(404).send({ message: "Artist not found" });
      }
      artistId = artist._id;
    } else {
      return res.status(403).send({ message: "Unauthorized" });
    }

    const album = new Album({
      name,
      artist: artistId,
      releaseDate,
      coverImage,
    });

    await album.save();
    res.status(201).send({ message: "Album created successfully", album });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find({});
    res.status(200).send(albums);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getAlbum = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    if (!album) {
      return res.status(404).send({ message: "Album not found" });
    }
    res.status(200).send(album);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateAlbumById = async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!album) {
      return res.status(404).send({ message: "Album not found" });
    }
    res.status(200).send(album);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteAlbumById = async (req, res) => {
  try {
    const { id } = req.params;
    const requestingUser = req.user;

    const album = await Album.findById(id);
    if (!album) {
      return res.status(404).send({ message: "Album not found" });
    }

    if (
      requestingUser.role !== 1 &&
      requestingUser.privateid !== album.artist.toString()
    ) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    await Album.findByIdAndDelete(id);
    res.status(200).send({ message: "Album deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createAlbum,
  getAllAlbums,
  getAlbum,
  updateAlbumById,
  deleteAlbumById,
};
