const mongoose = require("mongoose");
const validator = require("validator");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (v) {
        const phoneNumber = parsePhoneNumberFromString(v);
        return phoneNumber && phoneNumber.isValid();
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "{VALUE} is not a valid email!",
    },
  },
  role: { type: Number, enum: [1, 21], default: 21 },
  avatar: { type: String }, // URL của hình đại diện
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
  paymentAmount: { type: Number, default: 0 },
});

userSchema.methods.calculatePaymentAmount = async function () {
  const user = this;
  const orders = await mongoose.model("Order").find({ user: user._id });
  user.paymentAmount = orders.reduce(
    (total, order) => total + order.totalPrice,
    0
  );
  await user.save();
};

const User = mongoose.model("User", userSchema);

module.exports = User;
