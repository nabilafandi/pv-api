const mongoose = require('mongoose')
const Users = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    alamat: {
        type: String,
    },
    no_hp: {
        type: String,
    },
    saldo: {
        type: Number,
        require: true,
        default: 0
    },
})
const User = mongoose.model('user', Users)



module.exports = User
