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
    // pengeluaran: {
    //     type: Number,
    // },
    // total_pengeluaran_user: {
    //     type: Number,
    // },
    // estimasi_pengeluaran_harian: {
    //     type: Number,
    // },
    // estimasi_pengeluaran_bulanan: {
    //     type: Number,
    // },
    // estimasi_pengeluaran_tahunan: {
    //     type: Number,
    // },
    // total_penghematan_harian: {
    //     type: Number,
    // },
    // total_penghematan_bulanan: {
    //     type: Number,
    // },
    // total_penghematan_tahunan: {
    //     type: Number,
    // }
})
const User = mongoose.model('user', Users)



module.exports = User
