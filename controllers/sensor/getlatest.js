const services = require('../../services/services')

const latestData = async (req, res) => {
    try {
        const latestData  = await services.sensor.getlatest()
        res.status(200).json({latestData })
    } catch (error) {
        res.status(500).json({ error })
    }
}


module.exports = latestData