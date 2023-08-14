const { default: mongoose } = require("mongoose");

const User = new mongoose.Schema({
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
});

exports.userModel = mongoose.model('User', User);