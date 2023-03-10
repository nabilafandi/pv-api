const services = require('../../services/services')
const { excludePassword } = require('../../services/user.service')


const updateUser = async (req, res) => {
    const data = req.body
    const selectedUser = await services.user.findUserbyId(req.params.id)
    try {
        //validation
        const { error } = services.validation.updateUser.validate(data)
        if (error) return res.status(400).json({ error: error.details[0].message }) 
        //cek username
        const foundUsername = await services.user.findUsername(data.username)
        if (foundUsername && data.username !== selectedUser.username) return res.status(400).json({ error: "Username already exists" })

        else {
            const newUser = data
            await services.user.updateUser(req.params.id, newUser)
            const updatedUser = await services.user.updateUser(req.params.id, newUser)
            res.json({ message: "User updated succesfully.", updatedUser })
        }
    } catch (error) {
        res.status(500).json({ error})
    }
}


module.exports = updateUser