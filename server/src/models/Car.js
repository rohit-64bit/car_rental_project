const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    model: { type: String, required: true },
    mileage: { type: Number, required: true }, // kilometers per hour
    engineNo: { type: String, required: true, unique: true },
    insuranceExpiry: { type: Date, required: true },
    isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);