const services = require('../../services/services')

const getAllPlants =  async (req, res) => {
    try {
      const plants = await services.plant.findAllPlants()
      res.json(plants)
    } catch (error) {
      res.status(500).json({ error: "Internal error."})
    }
  }



module.exports = getAllPlants