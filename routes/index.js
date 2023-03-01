const express = require('express');
const Plants = require('./plants');
const Users = require('./users');
const Payments = require('./payments')
const Auths = require('./auth')
const Sensors = require('./sensors')

const Link = express()

Link.use('/user', Users)
Link.use('/plant', Plants)
Link.use('/auth', Auths)
Link.use('/payment', Payments)
Link.use('/sensor', Sensors)

module.exports = Link