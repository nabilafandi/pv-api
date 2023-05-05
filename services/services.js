const user = require("./user.service");
const plant = require("./plant.service");
const token = require("./token.service");
const hash = require("./hash.service");
const validation = require("./validation.service");
const sensor = require("./sensor.service");
const powerData = require("./powerData.service");

module.exports = {
  user,
  plant,
  token,
  hash,
  validation,
  sensor,
  powerData
};
