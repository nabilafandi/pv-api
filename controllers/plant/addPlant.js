const services = require('../../services/services')

const addPlant = async (req, res) => {
    const data = req.body
    try {
        //validasi
        const { error } = services.validation.addPlant.validate(data)
        if (error) { return res.status(400).json({ message: error.details[0].message }) }
        const newPlant = await services.plant.createNewPlant(data)
        res.status(200).json({ message: "Plant created succesfully", newPlant })
    } catch (error) {
        res.status(400).json({ message: "Error creating plant.", error: error })
    }
}


module.exports = addPlant