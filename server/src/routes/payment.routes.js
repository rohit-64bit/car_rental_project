const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const Rental = require('../models/Rental');
const Customer = require('../models/Customer');

// Create a payment
router.post('/', async (req, res) => {
    try {
        const { rentalId, customerId, amount, paymentDate, paymentMode } = req.body;

        // Check if rental exists
        const rental = await Rental.findById(rentalId);
        if (!rental) return res.status(404).json({ error: 'Rental not found' });

        // Check if customer exists
        const customer = await Customer.findById(customerId);
        if (!customer) return res.status(404).json({ error: 'Customer not found' });

        const payment = await Payment.create({
            rental: rentalId,
            customer: customerId,
            amount,
            paymentDate,
            paymentMode
        });

        res.status(201).json({ message: 'Payment recorded successfully', payment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all payments
router.get('/', async (req, res) => {
    try {
        const payments = await Payment.find().populate('rental').populate('customer');
        res.json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get payment by rental ID
router.get('/rental/:rentalId', async (req, res) => {
    try {
        const payments = await Payment.find({ rental: req.params.rentalId }).populate('customer');
        res.json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all payments by a customer
router.get('/customer/:customerId', async (req, res) => {
    try {
        const payments = await Payment.find({ customer: req.params.customerId }).populate('rental');
        res.json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;