const services = require('../../services/services')
const mongoose = require('mongoose');
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
    const deletedPlant = await services.plant.deletebyId(req.params.id)
    if (!deletedPlant) { res.status(404).json({ error: "Plant not Found" }) }
    else {
      res.json({ message: "Plant deleted succesfully." })
    }
  } catch (error) {
    res.status(500).json({ error: "Internal error." })
  }
}
module.exports = deletePlant