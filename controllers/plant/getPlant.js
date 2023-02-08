const services = require('../../services/services')

const getPlant = async (req, res) => {
    try {
      const plant = await services.plant.findPlantbyId(req.params.id)
      if (!plant) { res.status(400).json({ message: "Plant not Found" }) }
      else { res.json(plant) }
    } catch (error) {
      res.status(500).json({ message: "Error fetching plant.", error: error });
    }
  }

module.exports = getPlant