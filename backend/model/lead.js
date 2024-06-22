const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
    email :{
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
    }
});

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;