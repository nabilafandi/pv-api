const services = require('../../services/services')

//get all users
const getAllusers = async (req, res) => {
    try {
        const users = await services.user.findAllusers()
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: "Error fetching users.", error: error })
    }
}

module.exports = getAllusers