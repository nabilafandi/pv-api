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
        idUser: id,
        createdAt: { $gt: when, $lte: today }
    }, { __v: 0 })
        .sort({ createdAt: -1 })
    let newData = [];
    for (let i = 0; i < result.length; i++) {
        newData.push({
            yAxis1: result[i].AC1.E,
            yAxis2: result[i].AC2.E,
            yAxis3: result[i].DC.E,
            xAxis: Math.floor(new Date(result[i].createdAt) / 1)
        })
    }
    const filterbyDay = await Sensor.aggregate([
        {
            $match: {
                idUser: id,
                createdAt: { $gt: when, $lte: today }
            }
        },
        {
            $group: {
                _id: {
                    year: { $year: "$createdAt" },
                    month: { $month: "$createdAt" },
                    day: { $dayOfMonth: "$createdAt" }
                },
                count: { $sum: 1 }
            }
        }
    ]);
    return { newData, filterbyDay }
}
async function aggregateSensorMonth(id) {
    const today = new Date()
    const otherDay = new Date()
    const when = new Date(otherDay.setDate(otherDay.getDate() - 30))
    const result = await Sensor.find({
        idUser: id,
        createdAt: { $gt: when, $lte: today }
    }, { __v: 0 })
        .sort({ createdAt: -1 })
    let newData = [];
    for (let i = 0; i < result.length; i++) {
        newData.push({
            yAxis1: result[i].AC1.E,
            yAxis2: result[i].AC2.E,
            yAxis3: result[i].DC.E,
            xAxis: Math.floor(new Date(result[i].createdAt) / 1)
        })
    }
    const filterbyDay = await Sensor.aggregate([
        {
            $match: {
                idUser: id,
                createdAt: { $gt: when, $lte: today }
            }
        },
        {
            $group: {
                _id: {
                    year: { $year: "$createdAt" },
                    month: { $month: "$createdAt" },
                    day: { $dayOfMonth: "$createdAt" }
                },
                count: { $sum: 1 }
            }
        }
    ]);
    return { newData, filterbyDay }
}
async function aggregateSensorYear(id) {
    const today = new Date()
    const otherDay = new Date()
    const when = new Date(otherDay.setDate(otherDay.getDate() - 365))
    const result = await Sensor.find({
        idUser: id,
        createdAt: { $gt: when, $lte: today }
    }, { __v: 0 })
        .sort({ createdAt: -1 })
    let newData = [];
    for (let i = 0; i < result.length; i++) {
        newData.push({
            yAxis1: result[i].AC1.E,
            yAxis2: result[i].AC2.E,
            yAxis3: result[i].DC.E,
            xAxis: Math.floor(new Date(result[i].createdAt) / 1)
        })
    }
    const filterbyDay = await Sensor.aggregate([
        {
            $match: {
                idUser: id,
                createdAt: { $gt: when, $lte: today }
            }
        },
        {
            $group: {
                _id: {
                    year: { $year: "$createdAt" },
                    month: { $month: "$createdAt" },
                    day: { $dayOfMonth: "$createdAt" }
                },
                count: { $sum: 1 }
            }
        }
    ]);
    return { newData, filterbyDay }
}


async function deleteSensor(id) {
    try {
        sensordeleted = await Sensor.deleteMany({ idUser: id })
        return sensordeleted
    } catch (error) {
        return error
    }
}

async function getlatest(id) {
    try {
        const latest = await Sensor.findOne({ idUser: id }).sort({ createdAt: -1 })
        return latest
    } catch (error) {
        return error
    }
}

let db = Sensor
async function findByTime(type, id) {
    try {
        const dateMain = new Date;
        let dateFirst = new Date(dateMain);
        if (type === "day") {
            const result = await db.aggregate([
                {
                    $match: {
                        idUser: id,
                        createdAt: { $gte: new Date(dateFirst.setDate(dateFirst.getDate() - 1)), $lte: new Date(dateMain)},
                        "AC1.E": { $ne: null },
                        "AC2.E": { $ne: null },
                        "DC.E": { $ne: null },
                    }
                },
                {
                    $project: {
                        date: { $dateToString: { format: "%Y/%m/%d", date: { $subtract: [ "$createdAt", -25200000 ] } } },
                        hour: { $dateToString: { format: "%H", date:  { $subtract: [ "$createdAt", -25200000 ] } } },
                        minute: {
                            $subtract: [
                                { $minute: { $subtract: ["$createdAt", -25200000] } },
                                { $mod: [{ $minute: { $subtract: ["$createdAt", -25200000] } }, 5] }
                            ]
                        },
                        AC1: "$AC1.E",
                        AC2: "$AC2.E",
                        DC: "$DC.E"
                    }
                },
                {
                    $group: {
                        _id: {
                            date: "$date",
                            time: "$hour",
                            minute: "$minute"
                        },
                        AC1: { $max: "$AC1" },
                        AC2: { $max: "$AC2" },
                        DC: { $max: "$DC" }
                    }
                },
                {
                    $sort: {
                        "_id.date": 1,
                        "_id.time": 1,
                        "_id.minute": 1
                    }
                }
            ])
            return result
        }
        if (type === "month") {
            const result = await db.aggregate([
                {
                    $match: {
                        idUser: id,

                        createdAt: { $gte: new Date(dateFirst.setMonth(dateFirst.getMonth() - 1)), $lte: new Date(dateMain) },
                        "AC1.E": { $ne: null },
                        "AC2.E": { $ne: null },
                        "DC.E": { $ne: null },
                    }
                },
                {
                    $project: {
                        date: {
                            // $month: "$createdAt"
                            $dateToString: { format: "%Y-%m-%d", date:  { $subtract: [ "$createdAt", -25200000 ] } }
                        },
                        AC1: "$AC1.E",
                        AC2: "$AC2.E",
                        DC: "$DC.E"
                    }
                },
                {
                    $group: {
                        _id: {
                            time: "$date"
                        },
                        AC1: { $max: "$AC1" },
                        AC2: { $max: "$AC2" },
                        DC: { $max: "$DC" }
                    }
                },
                {
                    $sort: {
                        "_id.time": 1
                    }
                }
            ])
            return result
        }
        if (type === "year") {
            const result = await db.aggregate([
                {
                    $match: {
                        idUser: id,
                        createdAt: { $gte: new Date(dateFirst.setFullYear(dateFirst.getFullYear() - 1)), $lte: new Date(dateMain) },
                        "AC1.E": { $ne: null },
                        "AC2.E": { $ne: null },
                        "DC.E": { $ne: null },
                    }
                },
                {
                    $project: {
                        date: {
                            // $month: "$createdAt"
                            $dateToString: { format: "%Y-%m", date:  { $subtract: [ "$createdAt", -25200000 ] } }
                        },
                        AC1: "$AC1.E",
                        AC2: "$AC2.E",
                        DC: "$DC.E"
                    }
                },
                {
                    $group: {
                        _id: {
                            time: "$date"
                        },
                        AC1: { $max: "$AC1" },
                        AC2: { $max: "$AC2" },
                        DC: { $max: "$DC" }
                    }
                },
                {
                    $sort: {
                        "_id.time": 1
                    }
                }
            ])
            return result
        }
        if (type === "total") {
            const result = await db.aggregate([
                {
                    $match: {
                        idUser: id,

                        createdAt: { $gte: new Date(dateFirst.setFullYear(dateFirst.getFullYear() - 1)), $lte: new Date(dateMain) },
                        "AC1.E": { $ne: null },
                        "AC2.E": { $ne: null },
                        "DC.E": { $ne: null },
                    }
                },
                {
                    $project: {
                        date: {
                            // $month: "$createdAt"
                            $dateToString: { format: "%Y", date:  { $subtract: [ "$createdAt", -25200000 ] } }
                        },
                        AC1: "$AC1.E",
                        AC2: "$AC2.E",
                        DC: "$DC.E"
                    }
                },
                {
                    $group: {
                        _id: {
                            time: "$date"
                        },
                        AC1: { $max: "$AC1" },
                        AC2: { $max: "$AC2" },
                        DC: { $max: "$DC" }
                    }
                },
                {
                    $sort: {
                        "_id.time": 1
                    }
                }
            ])
            return result
        }
    } catch (error) {
        return error
    }
}

// console.log(aggregateSensor(1))
module.exports = {
    createNewSensor,
    aggregateSensorWeek,
    aggregateSensorMonth,
    aggregateSensorYear,
    deleteSensor,
    getlatest,
    findByTime
}