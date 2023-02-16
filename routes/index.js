const express = require('express');
const Plants = require('./plants');
const Users = require('./users');
const Payments = require('./payments')
const Auths = require('./auth')

const Link = express()

Link.use('/user', Users)
Link.use('/plant', Plants)
Link.use('/auth', Auths)
Link.use('/payment', Payments)

module.exports = Link