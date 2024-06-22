const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
    trackNo: {
        type: Number,
        unique: true,
        required: true,
    },
    location: {
        type: [String],
        required: true,
    },
});

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;