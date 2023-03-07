const services = require('../../services/services')
const mongoose = require('mongoose');
const { deleteSensor } = require('../../services/sensor.service');
const validation = (id) => {
  const idObject = mongoose.Types.ObjectId;
  if (idObject.isValid(id)) {
    return (String)(new Object(id)) === id;
  }
  return false;

}


const deletePlant = async (req, res) => {
  try {
    //validasi id
    if (!validation(req.params.id)) return res.status(400).json({ error: "plant object id is not valid" })
    //check if plant exist
    const plantExist = await services.plant.findPlantbyId(req.params.id)
    if (!plantExist) return res.status(404).json({ error: "Plant not Found" })
    //delete plant related sensors
    const relatedSensor = await deleteSensor(plantExist.plant_id)
    console.log(relatedSensor)
    //delete plant
    await services.plant.deletebyId(req.params.id)
    res.json({ message: "Plant deleted succesfully." })

  } catch (error) {
    res.status(500).json({ error })
  }
}
module.exports = deletePlant