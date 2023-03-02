const { findByPlantId } = require('../../services/plant.service')
const { aggregateSensorMonth, aggregateSensorWeek, aggregateSensorYear } = require('../../services/sensor.service')
const services = require('../../services/services')

const aggregate = async (req, res) => {
    const days = req.body.time
    const idUser = req.body.idUser

    try {
        //cekidUser kosong
        if (!idUser) return res.status(400).json({error: "idUser cannot be empty"})
        //cek idUser sudah ada
        const cekplant_id = await findByPlantId(idUser)
        if (!cekplant_id) return res.status(404).json({ error: "idUser not found" })
        if (days === "day") {
            const aggregated = await aggregateSensorWeek(idUser)
            return res.status(200).json({ aggregated })
        }
        if (days === "month") {
            const aggregated = await aggregateSensorMonth(idUser)
            return res.status(200).json({ aggregated })
        }
        if (days === "year") {
            const aggregated = await aggregateSensorYear(idUser)
            return res.status(200).json({ aggregated })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}


module.exports = aggregate