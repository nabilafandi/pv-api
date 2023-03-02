const services = require('../../services/services')

const aggregate = async (req, res) => {
    const days = req.body.days
    const ac = req.body.ac
    try {

        const aggregated = await services.sensor.aggregateSensor(days,ac)
        res.status(200).json({ aggregated })
    } catch (error) {
        res.status(400).json({ error})
    }
}


module.exports = aggregate