const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");
const auth = require("../middlewares/auth");
// Tạo đơn hàng
router.post("/create", auth, orderController.createOrder);

// Lấy tất cả đơn hàng (chỉ admin)
router.get("/", auth, orderController.getAllOrders);

// Lấy đơn hàng theo ID (chỉ người dùng đó hoặc admin)
router.get("/:id", auth, orderController.getOrder);

// Update đơn hàng (chỉ người dùng đó)
router.patch("/:id", auth, orderController.updateOrder);

// Xóa đơn hàng (chỉ người dùng đó)
router.delete("/:id", auth, orderController.deleteOrder);

module.exports = router;
