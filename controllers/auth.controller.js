const addUser = require('./auth/addUser')
const login = require('./auth/login')
const refresh = require('./auth/refresh')
const logout = require('./auth/logout')

module.exports = {
    addUser,
    login,
    refresh,
    logout,
}