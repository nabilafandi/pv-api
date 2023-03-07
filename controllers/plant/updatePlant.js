const services = require('../../services/services')

const mongoose = require('mongoose');
const validation = (id) => {
  const idObject = mongoose.Types.ObjectId;
  if (idObject.isValid(id)) {
    return (String)(new Object(id)) === id;
  }
  return false;

}

const updatePlant = async (req, res) => {
  data = req.body
  try {
    //validasi
    const { error } = services.validation.updatePlant.validate(data)
    if (error) return res.status(400).json({ error: error.details[0].message })
    //validasi id
    if (!validation(req.params.id)) return res.status(400).json({ error: "plant object id is not valid" })
    const updatedPlant = await services.plant.updatePlant(req.params.id, data)
    if (!updatedPlant) { res.status(404).json({ error: "Plant not Found" }) }
    else {
      res.json({ message: "Plant updated successfully." })
    }
  } catch (error) {
    res.status(500).json({ error: "Internal error." })
  }
}


module.exports = updatePlant