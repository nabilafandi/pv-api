const Plant = require('../models/plants');



async function createNewPlant(data) {
    const createPlant = new Plant(data);
    createPlant.plant_id = Math.random().toString(36).substring(2, 10);
    await createPlant.save();
    return createPlant;
}

async function findAllPlants() {
    const plants = await Plant.find({})
    return plants
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


module.exports = {
    createNewPlant,
    findAllPlants,
    findPlantbyId,
    updatePlant,
    deletebyId
}