const { findByPlantId } = require('../../services/plant.service')
const services = require('../../services/services')

const aggregate = async (req, res) => {
    const days = req.body.time
    const userId = req.body.userId

    try {
        //cekuserid kosong
        if (!userId) return res.status(400).json(error)
        const cekplant_id = await findByPlantId(userId)
        console.log(cekplant_id)
        const aggregated = await services.sensor.aggregateSensor(days, userId)
        res.status(200).json({ aggregated })
    } catch (error) {
        res.status(400).json({ error })
    }
}


module.exports = aggregate