const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    contact: { type: String, required: true },
    rating: { type: Number, default: 0 },
});

module.exports = mongoose.model('Driver', driverSchema);