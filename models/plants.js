const mongoose = require("mongoose");
const Plants = mongoose.Schema({
    nama: {
        type: String,
    },
    alamat: {
        type: String,
    },
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
    pv_capacity: {
        type: Number,
    }, 
    tanggal_instalasi: {
        type: Date,
    },
    // suhu_plant: {
    //     type: Number,
    // },
    // today_kwh_load: {
    //     type: Number,
    // },
    // month_kwh_load: {
    //     type: Number,
    // }, 
    // total_kwh_load: {
    //     type: Number,
    // },
    // fund_revenue: {
    //     type: Number,
    // },
})
const Plant = mongoose.model("plant", Plants);
module.exports = Plant