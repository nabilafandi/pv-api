const joi = require('joi')

//auth
const login = joi.object({
  username: joi.string().required(),
  password: joi.string().min(6).required()
})

//user
const addUser = joi.object({
  username: joi.string().required(),
  password: joi.string().min(6).required(),
  alamat: joi.string(),
  no_hp: joi.string(),
  saldo: joi.number(),
})

const updateUser = joi.object({
  username: joi.string().min(1),
  alamat: joi.string(),
  no_hp: joi.string(),
  saldo: joi.number(),
})

const changePassword = joi.object({
  username: joi.string().required(),
  currentPassword: joi.string().min(6).required(),
  newPassword: joi.string().min(6).required(),
})
//plant
const addPlant = joi.object({
  nama: joi.string().required(),
  alamat: joi.string(),
  latitude: joi.number(),
  longitude: joi.number(),
  pv_capacity: joi.number(),
  tanggal_instalasi: joi.date(),
  pv_unit: joi.string(),
  idUser: joi.string(),
  plant_id: joi.string().required(),
})

const updatePlant = joi.object({
  nama: joi.string().min(1),
  alamat: joi.string(),
  latitude: joi.number(),
  longitude: joi.number(),
  pv_capacity: joi.number(),
  tanggal_instalasi: joi.date(),
  pv_unit: joi.string(),
})

const aggregateSensor = joi.object({
  time: joi.string().required(),
  idUser: joi.string().required(),
})
const addSensor = joi.object({
  idUser: joi.string().required(),
  AC1: joi.object({
    E: joi.number().required(),
    Vrms: joi.number().required(),
    Irms: joi.number().required(),
    P: joi.number().required(),
    Q: joi.number().required(),
    S: joi.number().required()
  }).required(),
  AC2: joi.object({
    E: joi.number().required(),
    Vrms: joi.number().required(),
    Irms: joi.number().required(),
    P: joi.number().required(),
    Q: joi.number().required(),
    S: joi.number().required()
  }).required(),
  DC: joi.object({
    E: joi.number().required(),
    V: joi.number().required(),
    I: joi.number().required(),
    P: joi.number().required()
  }).required()
});

module.exports = {
  addUser,
  login,
  updateUser,
  addPlant,
  updatePlant,
  changePassword,
  aggregateSensor,
  addSensor
}