const mongoose = require('mongoose')
const Sensors = mongoose.Schema({
    idUser: {
        type: String,
    },
    AC1: {
        type: Object({
            E: {
                type: Number
            },
            Vrms: {
                type: Number
            },
            Irms: {
                type: Number
            },
            P: {
                type: Number
            },
            Q: {
                type: Number
            },
            S: {
                type: Number
            },
            PF: {
                type: Number
            },
        }),
    },
    AC2: {
        type: Object({
            E: {
                type: Number
            },
            Vrms: {
                type: Number
            },
            Irms: {
                type: Number
            },
            P: {
                type: Number
            },
            Q: {
                type: Number
            },
            S: {
                type: Number
            },
            PF: {
                type: Number
            },
        }),
    },
    DC: {
        type: Object({
            E: {
                type: Number
            },
            V: {
                type: Number
            },
            I: {
                type: Number
            },
            P: {
                type: Number
            },
        }),
    }
}, { timestamps: true })
const Sensor = mongoose.model('sensor', Sensors)



module.exports = Sensor