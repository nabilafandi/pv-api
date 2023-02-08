const services = require('../../services/services')

const deletePlant = async (req, res) => {
    try {
      const deletedPlant = await services.plant.deletebyId(req.params.id)
      console.log(deletedPlant)
      if (!deletedPlant) { res.status(400).json({ message: "Plant not Found" }) }
      else {
        res.json({ message: "Plant deleted succesfully.", deletedPlant})
      }
    } catch (error) {
      res.status(500).json({ message: "Error deleting plant.", error: error })
    }
  }
module.exports = deletePlant