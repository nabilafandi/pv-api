const joi = require('joi')

//auth
const login = joi.object({
  username: joi.string().required(),
  password: joi.string().required()
})

//user
const addUser = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
  alamat_user: joi.string(),
  no_hp_user: joi.string(),
  saldo_user: joi.number(),
  pengeluaran_user: joi.number(),
  total_pengeluaran_user: joi.number(),
  estimasi_pengeluaran_harian: joi.number(),
  estimasi_pengeluaran_bulanan: joi.number(),
  estimasi_pengeluaran_tahunan: joi.number(),
  total_penghematan_harian: joi.number(),
  total_penghematan_bulanan: joi.number(),
  total_penghematan_tahunan: joi.number()
})

const updateUser = joi.object({
  username: joi.string().min(1),
  alamat_user: joi.string(),
  no_hp_user: joi.string(),
  saldo_user: joi.number(),
  pengeluaran_user: joi.number(),
  total_pengeluaran_user: joi.number(),
  estimasi_pengeluaran_harian: joi.number(),
  estimasi_pengeluaran_bulanan: joi.number(),
  estimasi_pengeluaran_tahunan: joi.number(),
  total_penghematan_harian: joi.number(),
  total_penghematan_bulanan: joi.number(),
  total_penghematan_tahunan: joi.number()
})

const changePassword = joi.object({
  username: joi.string().required(),
  currentPassword: joi.string().required(),
  newPassword: joi.string().required(),
})
//plant
const addPlant = joi.object({
  plant_name: joi.string().required(),
  alamat_lokasi_plant: joi.string(),
  latitude_plant: joi.number(),
  longitude_plant: joi.number(),
  pv_capacity: joi.number(),
  tanggal_instalasi: joi.date(),
  suhu_plant: joi.number(),
  today_kwh_load: joi.number(),
  month_kwh_load: joi.number(),
  total_kwh_load: joi.number(),
  fund_revenue: joi.number()
})

const updatePlant = joi.object({
  plant_name: joi.string().min(1),
  alamat_lokasi_plant: joi.string(),
  latitude_plant: joi.number(),
  longitude_plant: joi.number(),
  pv_capacity: joi.number(),
  tanggal_instalasi: joi.date(),
  suhu_plant: joi.number(),
  today_kwh_load: joi.number(),
  month_kwh_load: joi.number(),
  total_kwh_load: joi.number(),
  fund_revenue: joi.number()
})


module.exports = {
  addUser,
  login,
  updateUser,
  addPlant,
  updatePlant,
  changePassword
}