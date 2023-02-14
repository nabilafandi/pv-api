const services = require('../../services/services')

//add new user
const addUser = async (req, res) => {
    const data = req.body
    try {
        //validasi
        const { error } = services.validation.addUser.validate(data)
        if (error) { return res.status(400).json({ message: error.details[0].message }) }
        //cek username
        const foundUsername = await services.user.findUsername(data.username)
        if (foundUsername) return res.status(400).json({ message: "Username already exists" })
        //hash
        const hashedPwd = await services.hash.hashPwd(data.password)
        data.password = hashedPwd
        //membuat user
        const newUser = await services.user.createNewUser(data)
        res.status(200).json({ message: "User created succesfully", newUser })
    } catch (error) {
        res.status(500).json({ message: "Error creating user.", error: error })
    }
}


module.exports = addUser