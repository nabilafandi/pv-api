const mongoose = require("mongoose");
const Plants = mongoose.Schema({
    plant_id: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
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
    pv_unit: {
        type: String,
    }
})
const Plant = mongoose.model("plant", Plants);
module.exports = Plant