const services = require('../../services/services')

const getUser = async (req, res) => {
    try {
      const user = await services.user.findUserbyId(req.params.id)
      if (!user) { res.status(400).json({ message: "User not Found" }) }
      else { res.json(user) }
    } catch (error) {
      res.status(500).json({ message: "Error fetching user.", error: error });
    }
  }

module.exports = getUser