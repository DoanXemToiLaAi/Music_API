const express = require("express");
const router = express.Router();
const songController = require("../controllers/song");
const auth = require("../middlewares/auth");

// Lấy tất cả bài hát
router.get("/", auth, songController.getSongs);

// Tạo bài hát (nghệ sĩ hoặc admin)
router.post("/create", auth, songController.createSong);

// Lấy bài hát theo ID
router.get("/:id", auth, songController.getSongById);

// Route để lấy bài hát theo ID nghệ sĩ
router.get("/artist/:id", songController.getSongsByArtistId);

// Update bài hát theo ID (nghệ sĩ hoặc admin)
router.patch("/:id", auth, songController.updateSong);

// Xóa bài hát theo ID (nghệ sĩ hoặc admin)
router.delete("/:id", auth, songController.deleteSongById);

module.exports = router;
