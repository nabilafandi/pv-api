const express = require('express');
const Auth = require('../controllers/auth.controller');
const cekToken = require('../middleware/verifyJWT')

const Auths = express.Router()
//auth
Auths.post('/register', Auth.addUser)
Auths.post('/login', Auth.login)
Auths.get('/refresh', Auth.refresh)
Auths.delete('/logout', Auth.logout)



module.exports = Auths