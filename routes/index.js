const express = require('express');
const Plants = require('./plants');
const Users = require('./users');
const Payments = require('./payments')
const Auths = require('./auth')
const Sensors = require('./sensors')
const PowerDatas = require('./powerDatas')

const Link = express()

Link.use('/user', Users)
Link.use('/plant', Plants)
Link.use('/auth', Auths)
Link.use('/payment', Payments)
Link.use('/sensor', Sensors)
Link.use('/powerdata', PowerDatas)

module.exports = Link