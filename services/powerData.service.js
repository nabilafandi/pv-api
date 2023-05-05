const PowerData = require("../models/powerData");

async function addPowerData(plant_id) {
  const addPowerData = new PowerData({ plant_id: plant_id });
  await addPowerData.save();
  return addPowerData;
}
async function findPowerData(plant_id) {
  const foundPowerData = await PowerData.findOne({ plant_id: plant_id });
  return foundPowerData;
}
async function updateDaya(plant_id, daya) {
  const updatedDayaSisa = await PowerData.findOneAndUpdate(
    { plant_id: plant_id },
    daya,
    { new: true }
  );
  return updatedDayaSisa;
}
async function increaseDayaSisa(plant_id, amount) {
  const getBalance = await PowerData.findOneAndUpdate(
    {
      plant_id: plant_id,
    },
    { $inc: { daya_sisa: amount } },
    { new: true }
  );
  return getBalance
}

async function deletePowerData(plant_id) {
  try {
    PowerDatadeleted = await Sensor.deleteMany({ plant_id: plant_id });
    return sensordeleted;
  } catch (error) {
    return error;
  }
}

module.exports = {
  addPowerData,
  findPowerData,
  updateDaya,
  deletePowerData,
  increaseDayaSisa
};
