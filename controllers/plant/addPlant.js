const services = require('../../services/services')
const { findByPlantName, findAllPlantsbyPlant_id } = require('../../services/plant.service');

const mongoose = require('mongoose');
const { findUserbyId } = require('../../services/user.service');
const { addPowerData } = require('../../services/powerData.service');
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
        // check if idUser exist in database
        const userExist = await findUserbyId(req.body.idUser)
        if (!userExist) return res.status(404).json({ error: `User with idUser: ${data.idUser} not found` })
        // cek duplikat plant_id
        const plant_idDuplicate = await findAllPlantsbyPlant_id(req.body.plant_id)
        if (plant_idDuplicate.length > 0 ) return res.status(404).json({ error: `plant_id is already taken` })
        //cek duplikat nama plant
        const findDuplicate = await findByPlantName(data.nama)
        if (findDuplicate.length > 0) return res.status(400).json({ error: "Plant name is already taken" })
        //tambah plant
        const newPlant = await services.plant.createNewPlant(data)
        //tambah plant power data
        await addPowerData(data.plant_id)
        res.status(200).json({ message: "Plant created succesfully", newPlant })
    } catch (error) {
        res.status(500).json({ error })
    }
}


module.exports = addPlant