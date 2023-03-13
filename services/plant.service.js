const Plant = require('../models/plants');



async function createNewPlant(data) {
    const createPlant = new Plant(data);
    // createPlant.plant_id = Math.random().toString(36).substring(2, 10);
    await createPlant.save();
    return createPlant;
}

async function findAllPlants(id, offset, limit) {
    const count = await Plant.find({ idUser: id }).count();
    const plants = await Plant.find({ idUser: id }).skip(offset).limit(limit)
    return {count, plants}
}
async function findAllPlantsbyPlant_id(id) {
    const count  = await Plant.find({plant_id: id}).count();
    const plants = await Plant.find({ plant_id: id })
    return {count, plants}
}
async function findPlantbyId(id) {
    const plant = await Plant.findById(id)
    return plant
}
async function updatePlant(id, data) {
    const updatedPlant = await Plant.findByIdAndUpdate(id, data, { new: true })
    return updatedPlant
}
async function deletebyId(id) {
    const deletedPlant = await Plant.findByIdAndDelete(id)
    return deletedPlant
}
async function findByPlantId(id) {
    const plants = await Plant.find({ plant_id: id })
    return plants
}
async function findByPlantName(name) {
    const plants = await Plant.find({nama: name})
    return plants
}

module.exports = {
    createNewPlant,
    findAllPlants,
    findPlantbyId,
    updatePlant,
    deletebyId,
    findByPlantId,
    findByPlantName,
    findAllPlantsbyPlant_id
}