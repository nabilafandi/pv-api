const mongoose = require('mongoose')


const tokens = new mongoose.Schema({
    token: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
}, { timestamps: true }
);

const Token = mongoose.model('token', tokens)

module.exports = Token