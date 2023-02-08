const express = require('express');
const Plant = require('../controllers/plant.controller');
const cekToken = require('../middleware/verifyJWT')

const Plants = express.Router()

//Plant
Plants.route('/')
    .get(cekToken.verifyJWT, Plant.getAllPlants)
    .post(cekToken.verifyJWT, Plant.addPlant)

Plants.route('/:id')
    .get(cekToken.verifyJWT, Plant.getPlant)
    .put(cekToken.verifyJWT, Plant.updatePlant)
    .delete(cekToken.verifyJWT, Plant.deletePlant)

module.exports = Plants