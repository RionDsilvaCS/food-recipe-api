const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    lname: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        min: 12,
        max: 255,
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 255,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("User", userSchema);