const express = require('express');
const Payment = require('../controllers/payment.controller');
const cekToken = require('../middleware/verifyJWT')

const Payments = express.Router()


Payments.route('/')
    .post(Payment.createTransaction)
Payments.route('/:id')
    .get(Payment.transactionStatus)

module.exports = Payments