const express = require("express");
const PowerData = require("../controllers/powerData.controller");
const cekToken = require("../middleware/verifyJWT");

const PowerDatas = express.Router();

//Plant
PowerDatas.route("/")
  .get(PowerData.getPowerData)
  .put(PowerData.updatePowerData)

module.exports = PowerDatas;
