const { findByPlantId } = require('../../services/plant.service')
const { aggregateSensorMonth, aggregateSensorWeek, aggregateSensorYear } = require('../../services/sensor.service')
const services = require('../../services/services')

const aggregate = async (req, res) => {
    const data = req.query
    const time = req.query.time
    const idUser = req.query.idUser

    try {
        //validasi query
        const { error } = services.validation.aggregateSensor.validate(data)
        if (error) { return res.status(400).json({ message: error.details[0].message }) }
        //cekidUser kosong
        if (!idUser) return res.status(400).json({ error: "idUser cannot be empty" })
        //cek idUser sudah ada
        const cekplant_id = await findByPlantId(idUser)
        if (cekplant_id < 1) return res.status(404).json({ error: "idUser not found" })
        //cek time
        let aggregated
        if (time === "day") aggregated = await aggregateSensorWeek(idUser)
        if (time === "month") aggregated = await aggregateSensorMonth(idUser)
        if (time === "year") aggregated = await aggregateSensorYear(idUser)
        return res.status(200).json({ aggregated})
    } catch (error) {
        res.status(500).json({ error })
    }
}


module.exports = aggregate