const getAllUsers = require('./user/getAllUsers')
const getUser = require('./user/getUser')
const updateUser = require('./user/updateUser')
const deleteUser = require('./user/deleteUser')
const changePassword = require('./user/changePassword')

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    changePassword,
}