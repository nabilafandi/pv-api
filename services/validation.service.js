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
  idUser: joi.string()
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



module.exports = {
  addUser,
  login,
  updateUser,
  addPlant,
  updatePlant,
  changePassword,
  aggregateSensor
}