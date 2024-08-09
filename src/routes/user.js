const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const auth = require("../middlewares/auth");

// Đăng ký người dùng mới
router.post("/register", userController.register);

// Đăng nhập người dùng
router.post("/login", userController.login);

// Lấy toàn bộ người dùng (chỉ dành cho admin)
router.get("/", auth, userController.getUsers);

// Lấy thông tin người dùng theo ID (chỉ người dùng đó hoặc admin)
router.get("/:id", auth, userController.getUser);

// Cập nhật thông tin người dùng theo ID (chỉ người dùng đó hoặc admin)
router.patch("/:id", auth, userController.updateUser);

// Xóa người dùng theo ID (chỉ dành cho admin)
router.delete("/:id", auth, userController.deleteUser);

module.exports = router;
