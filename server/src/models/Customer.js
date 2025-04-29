const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  licenseNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  contact: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);
