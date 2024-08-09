const express = require("express");
const router = express.Router();
const albumController = require("../controllers/album");
const auth = require("../middlewares/auth");
const adminAuth = require("../middlewares/adminAuthen");

// Tạo album (chỉ admin)
router.post("/create", auth, adminAuth, albumController.createAlbum);

// Lấy tất cả album
router.get("/", auth, albumController.getAllAlbums);

// Lấy album theo ID
router.get("/:id", auth, albumController.getAlbum);

// Update album theo ID (chỉ admin)
router.patch("/:id", auth, adminAuth, albumController.updateAlbumById);

// Xóa album theo ID (chỉ admin)
router.delete("/:id", auth, adminAuth, albumController.deleteAlbumById);

module.exports = router;
