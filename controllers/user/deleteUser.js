const services = require('../../services/services')
const { excludePassword } = require('../../services/user.service')


const deleteUser = async (req, res) => {
  try {
    const deletedUser = await services.user.deletebyId(req.params.id)
    if (!deletedUser) return res.status(400).json({ message: "User not Found" })
    await services.token.deleteTokenByUserId(req.params.id)
    res.json({ message: "User deleted succesfully.", deletedUser: deletedUser.username })
  } catch (error) {
    res.status(500).json({ message: "Error deleting user.", error: error })
  }
}
module.exports = deleteUser