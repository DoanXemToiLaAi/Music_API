const User = require("../models/user");
const Artist = require("../models/artists");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;
//thành công tổng
const register = async (req, res) => {
  try {
    const { username, email, password, phone, privateid } = req.body;

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).send({ message: "Email đã được sử dụng" });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).send({ message: "Username đã được sử dụng" });
    }

    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res.status(400).send({ message: "Số điện thoại đã được sử dụng" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      email,
      phone,
      privateid: privateid || null,
    });
    await user.save();
    res.status(201).send({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, secretKey, {
      expiresIn: "12h",
    });

    let message;
    if (user.role === 1) {
      message = `Login successful, welcome back ${user.username}`;
    } else if (user.privateid) {
      const artist = await Artist.findById(user.privateid);
      message = `Login successful, ${artist.name} nice to see you again`;
    } else {
      message = "Login successful";
    }

    res.send({
      message,
      token,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const requestingUser = req.user;

    // Kiểm tra quyền truy cập: chỉ admin hoặc chính người dùng mới có thể cập nhật
    if (requestingUser.role !== 1 && requestingUser.id !== id) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    // Kiểm tra đầu vào
    if (!id || Object.keys(req.body).length === 0) {
      return res.status(400).send({ message: "Missing inputs" });
    }

    // Cập nhật người dùng
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    }).select("-password -role");

    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const requestingUser = req.user;

    if (requestingUser.role !== 1 && requestingUser.id !== id) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    await User.findByIdAndDelete(id);
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
