const adminAuth = (req, res, next) => {
  if (req.user.role !== 1) {
    // Kiểm tra nếu vai trò của người dùng không phải là admin
    return res.status(403).send({ message: "Admins only." });
  }
  next(); // Chuyển sang middleware hoặc route handler tiếp theo
};

module.exports = adminAuth;
