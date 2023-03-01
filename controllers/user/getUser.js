const services = require('../../services/services')
const { excludePassword } = require('../../services/user.service')

const getUser = async (req, res) => {
  try {
    const user = await services.user.findUserbyId(req.params.id)
    if (!user) return res.status(404).json({ error: "User not Found" })
    else {
      showUser = await excludePassword(user._id)
      res.json(showUser)
    }
  } catch (error) {
    res.status(500).json({ error: "Internal error." });
  }
}

module.exports = getUser