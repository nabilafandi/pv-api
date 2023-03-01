const mongoose = require('mongoose')
const Sensors = mongoose.Schema({
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
        }),
    },
    DC: {
        type: Object({
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
})
const Sensor = mongoose.model('sensor', Sensors)



module.exports = Sensor
