const mongoose = require("mongoose");

const PowerDatas = mongoose.Schema({
    plant_id: {
        type: String,
        require: true
    },
    daya_sisa: {
        type: Number,
        require: true,
        default: 0,
        min: 0
    },
    daya_pemakaian: {
        type: Number,
        require: true,
        default: 0,
    },
    date_time: {
        type: Date,
        default: Date.now
    }
})
const PowerData = mongoose.model("powerData", PowerDatas);
module.exports = PowerData