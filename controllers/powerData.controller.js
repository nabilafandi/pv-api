const services = require('../services/services')
const { findPowerData, updateDaya } = require("../services/powerData.service");

const getPowerData = async (req, res) => {
  const plant_id = req.query.id;
  //   const time = req.query.time;
  try {
    //cari plant
    const plant = await findPowerData(plant_id);
    if (!plant) return res.status(404).json({ error: "Plant not Found" });
    res.status(200).json({ message: "success", plant });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const updatePowerData = async (req, res) => {
  const plant_id = req.query.id;
  const data = req.body;
  try {
    //validasi
    const { error } = services.validation.updatePowerData.validate(data)
    if (error) return res.status(400).json({ error: error.details[0].message });
    //cari plant
    const plant = await findPowerData(plant_id);
    if (!plant) return res.status(404).json({ error: "Plant not Found" });
    //update power data
    const updatedPowerData = await updateDaya(plant_id, data)
    res.status(200).json({ message: "Plant updated successfully.", updatedPowerData })
} catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getPowerData,
  updatePowerData,
};
