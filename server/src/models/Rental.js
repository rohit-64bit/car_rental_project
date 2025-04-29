const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  checkoutDate: { type: Date, required: true },
  checkinDate: { type: Date },
  paymentMode: { type: String, enum: ['Cash', 'Card', 'UPI'], required: true },
  status: { type: String, enum: ['Ongoing', 'Completed'], default: 'Ongoing' }
}, { timestamps: true });

module.exports = mongoose.model('Rental', rentalSchema);