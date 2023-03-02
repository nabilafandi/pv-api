const services = require('../../services/services')

const getAllPlants =  async (req, res) => {
  const query = req.query
  if (!query.idUser) return res.status(400).json({error:"idUser not found"})

    try {
      const plants = await services.plant.findAllPlants(query.idUser)
      res.json(plants)
    } catch (error) {
      res.status(500).json({ error: "Internal error."})
    }
  }



module.exports = getAllPlants