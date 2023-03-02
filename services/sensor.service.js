const { startSession } = require('../models/sensor');
const Sensor = require('../models/sensor');

async function createNewSensor(data) {
    const createSensor = new Sensor(data);
    await createSensor.save();
    return createSensor;
}

async function aggregateSensorWeek(id) {
    const today = new Date()
    const otherDay = new Date()
    const when = new Date(otherDay.setDate(otherDay.getDate() - 7))
    const result = await Sensor.find({
        userId: id,
        createdAt: { $gt: when, $lte: today }
    },{ __v: 0 })
        .sort({ createdAt: -1 })
let newData = [];
        for(let i=0; i< result.length; i++){
            newData.push({
                yAxis1: result[i].AC1.E,
                yAxis2: result[i].AC2.E,
                yAxis3: result[i].DC.E,
                xAxis: Math.floor(new Date(result[i].createdAt)/1)
            })
        }
    return newData
}
async function aggregateSensorMonth(id) {
    const today = new Date()
    const otherDay = new Date()
    const when = new Date(otherDay.setDate(otherDay.getDate() - 30))
    const result = await Sensor.find({
        userId: id,
        createdAt: { $gt: when, $lte: today }
    },{ __v: 0 })
        .sort({ createdAt: -1 })
let newData = [];
        for(let i=0; i< result.length; i++){
            newData.push({
                yAxis1: result[i].AC1.E,
                yAxis2: result[i].AC2.E,
                yAxis3: result[i].DC.E,
                xAxis: Math.floor(new Date(result[i].createdAt)/1)
            })
        }
    return newData
}
async function aggregateSensorYear(id) {
    const today = new Date()
    const otherDay = new Date()
    const when = new Date(otherDay.setDate(otherDay.getDate() - 365))
    const result = await Sensor.find({
        userId: id,
        createdAt: { $gt: when, $lte: today }
    },{ __v: 0 })
        .sort({ createdAt: -1 })
let newData = [];
        for(let i=0; i< result.length; i++){
            newData.push({
                yAxis1: result[i].AC1.E,
                yAxis2: result[i].AC2.E,
                yAxis3: result[i].DC.E,
                xAxis: Math.floor(new Date(result[i].createdAt)/1)
            })
        }
    return newData
}
// console.log(aggregateSensor(1))
module.exports = {
    aggregateSensorWeek,
    aggregateSensorMonth,
    aggregateSensorYear
}