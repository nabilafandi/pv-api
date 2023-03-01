const services = require('../../services/services')

const updatePlant =  async (req, res) => {
  data = req.body
  try {
    //validasi
    const { error } = services.validation.updatePlant.validate(data)
    if (error) return res.status(400).json({ error: error.details[0].message })


    const updatedPlant = await services.plant.updatePlant(req.params.id, data)
    if (!updatedPlant) { res.status(404).json({ error: "Plant not Found" }) }
    else {
      res.json({ message: "Plant updated succesfully.", updatedPlant })
    }
  } catch (error) {
    res.status(500).json({ error: "Internal error." })
  }
}


module.exports = updatePlant