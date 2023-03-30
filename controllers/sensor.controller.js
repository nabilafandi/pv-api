
const addSensor = require('./sensor/addSensor')
const aggregate = require('./sensor/aggregateSensor')
const latestData = require('./sensor/getlatest')
const getCsvSensor = require("./sensor/getCsvSersor");

module.exports = {
    addSensor,
    aggregate,
    latestData,
    getCsvSensor
}