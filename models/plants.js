const mongoose = require("mongoose");
const Plants = mongoose.Schema({
    plant_name: {
        type: String,
    },
    alamat_lokasi_plant: {
        type: String,
    },
    latitude_plant: {
        type: Number,
    },
    longitude_plant: {
        type: Number,
    },
    pv_capacity: {
        type: Number,
    }, 
    tanggal_instalasi: {
        type: Date,
    },
    suhu_plant: {
        type: Number,
    },
    today_kwh_load: {
        type: Number,
    },
    month_kwh_load: {
        type: Number,
    }, 
    total_kwh_load: {
        type: Number,
    },
    fund_revenue: {
        type: Number,
    },
})
const Plant = mongoose.model("plant", Plants);
module.exports = Plant