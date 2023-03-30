const { findByPlantId } = require('../../services/plant.service');
const { getAllSensorById } = require('../../services/sensor.service');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require("fs");
const getCsvSensor = async (req, res) => {
    const id = req.params.id;
    try{
        const idCek = await findByPlantId(id);
        if(idCek.length === 0) return res.status(404).json({error: "Id not found!"});
        //
        const result = await getAllSensorById(id);
        const csvData = result.map((item) => {
            return {
                idUser: item.idUser,
                AC1_E: item.AC1.E,
                AC1_Vrms: item.AC1.Vrms,
                AC1_Irms: item.AC1.Irms,
                AC1_P: item.AC1.P,
                AC1_Q: item.AC1.Q,
                AC1_S: item.AC1.S,
                AC1_PF: item.AC1.PF,
                AC2_E: item.AC2.E,
                AC2_Vrms: item.AC2.Vrms,
                AC2_Irms: item.AC2.Irms,
                AC2_P: item.AC2.P,
                AC2_Q: item.AC2.Q,
                AC2_S: item.AC2.S,
                AC2_PF: item.AC2.PF,
                DC_E: item.DC.E,
                DC_V: item.DC.V,
                DC_I: item.DC.I,
                DC_P: item.DC.P,
                createdAt: item.createdAt,
                updatedAt: item.updatedAt
            };
        });

        const header = [
            {id: 'idUser', title: 'User ID'},
            {id: 'AC1_E', title: 'AC1 E'},
            {id: 'AC1_Vrms', title: 'AC1 Vrms'},
            {id: 'AC1_Irms', title: 'AC1 Irms'},
            {id: 'AC1_P', title: 'AC1 P'},
            {id: 'AC1_Q', title: 'AC1 Q'},
            {id: 'AC1_S', title: 'AC1 S'},
            {id: 'AC1_PF', title: 'AC1 PF'},
            {id: 'AC2_E', title: 'AC2 E'},
            {id: 'AC2_Vrms', title: 'AC2 Vrms'},
            {id: 'AC2_Irms', title: 'AC2 Irms'},
            {id: 'AC2_P', title: 'AC2 P'},
            {id: 'AC2_Q', title: 'AC2 Q'},
            {id: 'AC2_S', title: 'AC2 S'},
            {id: 'AC2_PF', title: 'AC2 PF'},
            {id: 'DC_E', title: 'DC E'},
            {id: 'DC_V', title: 'DC V'},
            {id: 'DC_I', title: 'DC I'},
            {id: 'DC_P', title: 'DC P'},
            {id: 'createdAt', title: 'Created At'},
            {id: 'updatedAt', title: 'Updated At'}
        ]

        const csvWrite = createCsvWriter({
            path: `${idCek[0].plant_id}.csv`,
            header: header
        });

        csvWrite.writeRecords(csvData)
            .then(() => {
                res.download(`${idCek[0].plant_id}.csv`);
                setTimeout(() => {
                    fs.rmSync(`${idCek[0].plant_id}.csv`);
                }, 100);

            })
            .catch(error => {
                res.status(500).json({error: "Internal Error"});
            });
    }catch (error) {
        res.status(500).json({error: "Internal Error"});
    }
}

module.exports = getCsvSensor;