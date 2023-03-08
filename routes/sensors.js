const express = require('express');
const Sensor = require('../controllers/sensor.controller');

const Sensors = express.Router()

//Sensor
Sensors.route('/')
    .post(Sensor.addSensor)
    .get(Sensor.aggregate)
Sensors.route('/latest')
    .get(Sensor.latestData)

module.exports = Sensors