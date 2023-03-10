const express = require('express');
const Sensor = require('../controllers/sensor.controller');
const cekToken = require('../middleware/verifyJWT')

const Sensors = express.Router()

//Sensor
Sensors.route('/')
    .post(cekToken.verifyJWT,Sensor.addSensor)
    .get(cekToken.verifyJWT,Sensor.aggregate)
Sensors.route('/latest')
    .get(cekToken.verifyJWT,Sensor.latestData)

module.exports = Sensors