const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productType: { type: String, enum: ["Song", "Album"], required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "items.productType",
      },
    },
  ],
  totalPrice: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
