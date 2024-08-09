const express = require("express");
const router = express.Router();
const artistController = require("../controllers/artists");
const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuthen");

// Tạo nghệ sĩ (chỉ admin)
router.post("/create", auth, adminAuth, artistController.createArtist);

// Lấy tất cả nghệ sĩ
router.get("/", auth, artistController.getAllArtists);

// Lấy nghệ sĩ theo ID
router.get("/:id", auth, artistController.getArtistById);

// Update nghệ sĩ theo ID (chỉ admin)
router.patch("/:id", auth, adminAuth, artistController.updateArtistById);

// Xóa nghệ sĩ theo ID (chỉ admin)
router.delete("/:id", auth, adminAuth, artistController.deleteArtistById);

module.exports = router;
