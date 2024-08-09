const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  // Lấy token từ header Authorization
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res
      .status(401)
      .send({ message: "Access denied. No token provided." });
  }

  try {
    // Xác thực token và trích xuất thông tin người dùng
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Lưu thông tin người dùng vào req.user
    next(); // Chuyển sang middleware hoặc route handler tiếp theo
  } catch (error) {
    res.status(400).send({ message: "Invalid token." });
  }
};

module.exports = auth;
