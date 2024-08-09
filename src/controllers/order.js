const Order = require("../models/order");
const Song = require("../models/song");
const Album = require("../models/album");
const User = require("../models/user");

const createOrder = async (req, res) => {
  try {
    const { user, items } = req.body;
    let totalPrice = 0;

    // Calculate total price based on items
    for (const item of items) {
      if (item.productType === "Song") {
        const song = await Song.findById(item.product);
        if (!song) {
          return res.status(404).send({ message: "Song not found" });
        }
        totalPrice += song.price;
      } else if (item.productType === "Album") {
        const album = await Album.findById(item.product);
        if (!album) {
          return res.status(404).send({ message: "Album not found" });
        }
        totalPrice += album.price;
      }
    }

    const order = new Order({
      user,
      items,
      totalPrice,
    });

    await order.save();

    // Update user's orders
    await User.findByIdAndUpdate(user._id, { $push: { orders: order._id } });

    res.status(201).send({ message: "Order created successfully", order });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    if (req.user.role !== 1) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    const orders = await Order.find({});
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (
      !order ||
      (req.user.role !== 1 && order.user.toString() !== req.user.id)
    ) {
      return res
        .status(404)
        .send({ message: "Order not found or unauthorized" });
    }

    res.status(200).send(order);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order || order.user.toString() !== req.user.id) {
      return res.status(403).send({ message: "Unauthorized" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedOrder) {
      return res.status(404).send({ message: "Order not found" });
    }
    res
      .status(200)
      .send({ message: "Order updated successfully", updatedOrder });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).send({ message: "Order not found" });
    }
    res.status(200).send({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrder,
  updateOrder,
  deleteOrder,
};
