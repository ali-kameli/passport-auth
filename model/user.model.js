const { default: mongoose } = require("mongoose");

const User = new mongoose.model({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamp: true });

exports.userModel = mongoose.model('User', User);