const { config } = require('dotenv');
config();
const midtransClient = require('midtrans-client');

// Create Snap API instance
const apiClient = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY
});

module.exports = apiClient