const express = require('express');
const User = require('../controllers/user.controller');
const cekToken = require('../middleware/verifyJWT')

const Users = express.Router()
//auth
Users.post('/register', User.addUser)
Users.post('/login', User.login)
Users.get('/refresh', User.refresh)
Users.delete('/logout', User.logout)
//User
Users.route('/')
    .get(cekToken.verifyJWT, User.getAllUsers)
Users.route('/:id')
    .get(cekToken.verifyJWT, User.getUser)
    .put(cekToken.verifyJWT, User.updateUser)
    .delete(cekToken.verifyJWT, User.deleteUser)
Users.put('/:id/change-password', cekToken.verifyJWT, User.changePassword)



module.exports = Users