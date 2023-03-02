const { createNewSensor } = require('../../services/sensor.service')
const services = require('../../services/services')

const addSensor = async (req, res) => {
    const data = req.body
    try {
        //create sensor
        const newSensor = await createNewSensor(data)
        res.status(200).json({ message: "Sensor created succesfully", newSensor })
    } catch (error) {
        res.status(500).json({ error})
    }
}


module.exports = addSensor