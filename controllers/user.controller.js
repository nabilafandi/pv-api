const addUser = require('./user/addUser')
const login = require('./user/login')
const refresh = require('./user/refresh')
const getAllUsers = require('./user/getAllUsers')
const getUser = require('./user/getUser')
const updateUser = require('./user/updateUser')
const deleteUser = require('./user/deleteUser')
const changePassword = require('./user/changePassword')
const logout = require('./user/logout')

module.exports = {
    addUser,
    login,
    refresh,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    changePassword,
    logout
}