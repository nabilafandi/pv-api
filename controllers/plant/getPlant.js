const services = require('../../services/services')

const getPlant = async (req, res) => {
    try {
      const plant = await services.plant.findPlantbyId(req.params.id)
      if (!plant) { res.status(404).json({ error: "Plant not Found" }) }
      else { res.json(plant) }
    } catch (error) {
      res.status(500).json({ error: "Internal error."});
    }
  }

module.exports = getPlant