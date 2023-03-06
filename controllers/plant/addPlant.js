const services = require('../../services/services')
const { findByPlantName } = require('../../services/plant.service');

const mongoose = require('mongoose');
const validation = (id) => {
    const idObject = mongoose.Types.ObjectId;
    if (idObject.isValid(id)) {
        return (String)(new Object(id)) === id;
    }
    return false;

}

const addPlant = async (req, res) => {
    const data = req.body
    try {
        //validasi data
        const { error } = services.validation.addPlant.validate(data)
        if (error) { return res.status(400).json({ message: error.details[0].message }) }
        //validasi id
        if (!validation(data.idUser)) return res.status(400).json({ error: "idUser is not valid" })
        //cek duplikat nama plant
        const findDuplicate = await findByPlantName(data.nama)
        if (findDuplicate.length > 0) return res.status(400).json({ error: "Plant name is already taken" })

        const newPlant = await services.plant.createNewPlant(data)
        res.status(200).json({ message: "Plant created succesfully", newPlant })
    } catch (error) {
        res.status(500).json({ error })
    }
}


module.exports = addPlant