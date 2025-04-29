const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    rental: { type: mongoose.Schema.Types.ObjectId, ref: 'Rental', required: true },
    paymentDate: { type: Date, default: Date.now },
    amount: { type: Number, required: true },
    paymentMode: { type: String, enum: ['Cash', 'Razorpay'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);