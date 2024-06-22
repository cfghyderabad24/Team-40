const mongoose = require("mongoose");
const { type } = require("os");

const orderSchema = new mongoose.Schema({
    orderNo: {
        type: Number,
        unique: true,
        required: true,
    },
    index: {
        type: Number,
        required: true,
    },
    trackId: {
        type: Number,
        required: true,
    },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;