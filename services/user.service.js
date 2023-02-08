const Token = require('../models/tokens');
const User = require('../models/users');


async function createNewUser(data) {
    const createUser = new User(data);
    await createUser.save();
    const createToken = new Token({
        user: createUser._id
    })
    await createToken.save()
    return createUser;
}

async function findUsername(username) {
    const foundUsername = await User.find({ username: username })
    return foundUsername[0]
}

async function findAllusers() {
    const users = await User.find({})
    return users
}
async function findUserbyId(id) {
    const user = await User.findById(id)
    return user
}

async function updateUser(id, data) {
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true })
    return updatedUser
}

async function deletebyId(id) {
    const deletedUser = await User.findByIdAndDelete(id)
    return deletedUser
}

async function updatePassword(id, data) {
    const updatedPassword = await User.findByIdAndUpdate(id, data, { new: true })
    return updatedPassword
}
//token
async function updateToken(userid, refreshToken) {
    await Token.findOneAndUpdate({ user: userid }, { token: refreshToken })
}
async function findbyToken(refreshToken) {
    const foundToken = await Token.findOne({ token: refreshToken });
    const foundUser = await User.findById(foundToken.user)
    return foundUser
}
module.exports = {
    createNewUser,
    findUsername,
    updateToken,
    findbyToken,
    findAllusers,
    findUserbyId,
    updateUser,
    deletebyId,
    updatePassword
}