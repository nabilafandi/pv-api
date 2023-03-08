const services = require('../../services/services')

const latestData = async (req, res) => {
    const idUser = req.query.idUser
    try {
        //validasi query
        const { error } = services.validation.getlatestdata.validate(req.query)
        if (error) { return res.status(400).json({ message: error.details[0].message }) }
        //find the latest data
        const latestData = await services.sensor.getlatest(idUser)
        if (!latestData) return res.status(404).json({ error: "no sensor found" })

        res.status(200).json({ latestData })
    } catch (error) {
        res.status(500).json({ error })
    }
}


module.exports = latestData
