const express = require('express');
const Plants = require('./plants');
const Users = require('./users');

const Link = express()

Link.use('/user', Users)
Link.use('/plant', Plants)

module.exports = Link