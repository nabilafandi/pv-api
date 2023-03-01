const express = require('express');
const Sensor = require('../controllers/sensor.controller');

const Sensors = express.Router()

//Sensor
Sensors.route('/')
    .post(Sensor.addSensor)
    .get(Sensor.aggregate)

module.exports = Sensors