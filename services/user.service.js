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
    const foundUsername = await User.findOne({username: username})
    return foundUsername
}

async function excludePassword(id) {
    const excludePassword = await User.findOne({_id: id},{__v:0, password:0})
    return excludePassword
}
async function findAllusers() {
    const users = await User.find({},{__v:0,password:0})
    return users
}
async function findUserbyId(id) {
    const user = await User.findById(id)
    return user
}

async function updateUser(id, data) {
    const updatedUser = await User.findByIdAndUpdate(id, data, {new: true})
    return updatedUser
}

async function deletebyId(id) {
    const deletedUser = await User.findByIdAndDelete(id)
    return deletedUser
}

async function updatePassword(id, data) {
    const updatedPassword = await User.findByIdAndUpdate(id, {password: data}, { new: true })
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
    excludePassword,
    findAllusers,
    findUserbyId,
    updateUser,
    deletebyId,
    updatePassword
}