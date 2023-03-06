const services = require('../../services/services')

const mongoose = require('mongoose');
const validation = (id) => {
  const idObject = mongoose.Types.ObjectId;
  if (idObject.isValid(id)) {
    return (String)(new Object(id)) === id;
  }
  return false;

}

const getAllPlants = async (req, res) => {
  const query = req.query
  if (!query.idUser) return res.status(400).json({ error: "idUser can't be empty" })
  //validasi id
  if (!validation(query.idUser)) return res.status(400).json({ error: "idUser is not valid" })
  try {
    const plants = await services.plant.findAllPlants(query.idUser)
    res.json(plants)
  } catch (error) {
    res.status(500).json({ error })
  }
}



module.exports = getAllPlants