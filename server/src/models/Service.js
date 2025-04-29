const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  serviceDate: { type: Date, required: true },
  serviceDetails: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);