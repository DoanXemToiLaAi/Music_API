const Artist = require("../models/artists");

const createArtist = async (req, res) => {
  try {
    const artist = new Artist(req.body);
    await artist.save();
    res.status(201).send({ message: "Artist created successfully", artist });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find({});
    res.status(200).send(artists);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) {
      return res.status(404).send({ message: "Artist not found" });
    }
    res.status(200).send(artist);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateArtistById = async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!artist) {
      return res.status(404).send({ message: "Artist not found" });
    }
    res.status(200).send({ message: "Artist updated successfully", artist });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteArtistById = async (req, res) => {
  try {
    const artist = await Artist.findByIdAndDelete(req.params.id);
    if (!artist) {
      return res.status(404).send({ message: "Artist not found" });
    }
    res.status(200).send({ message: "Artist deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createArtist,
  getAllArtists,
  getArtistById,
  updateArtistById,
  deleteArtistById,
};
