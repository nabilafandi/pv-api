const apiClient = require("../services/payment.service")

const createTransaction = async (req, res) => {
    const data = req.body
    try {
        await apiClient.createTransaction(data)
            .then((transaction) => {
                res.status(200).json({ message: "Transaction created succesfully", transaction })
            })
            .catch((error) => {
                const apiResponse = error.ApiResponse
                const statusCode = error.statusCode
                res.status(statusCode).json({ apiResponse })
            })
    } catch (error) {
        res.status(500).json({ message: "Error creating Transaction.", error: error })
    }
}

const transactionStatus = async (req, res) => {
    const data = req.body
    try {
        await apiClient.transaction.status(req.params.id)
            .then((response) => {
                res.status(response.status_code).json({message: response })
                // console.log(response.status_code)
            })
            .catch((error) => {
                const apiResponse = error.ApiResponse
                res.json({ apiResponse })
            })
    } catch (error) {
        res.status(500).json({ message: "Error getting transaction status.", error: error })

    }
}

module.exports = {
    createTransaction,
    transactionStatus
}