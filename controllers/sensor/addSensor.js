const { createNewSensor } = require('../../services/sensor.service')
const services = require('../../services/services')

const addSensor = async (req, res) => {
    const data = req.body
    try {
        //sensor validation
        const { error } = services.validation.addSensor.validate(data)
        if (error) { return res.status(400).json({ message: error.details[0].message }) }
        //create sensor
        const newSensor = await createNewSensor(data)
        res.status(200).json({ message: "Sensor created succesfully", newSensor })
    } catch (error) {
        res.status(500).json({ error})
    }
}


module.exports = addSensor