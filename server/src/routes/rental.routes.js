const express = require('express');
const router = express.Router();
const Rental = require('../models/Rental');
const Car = require('../models/Car');
const Customer = require('../models/Customer');

// Create a new rental (Car Checkout)
router.post('/', async (req, res) => {
    try {
        const { carId, customerId, rentStartDate, rentEndDate } = req.body;

        // Check if car exists and is available
        const car = await Car.findById(carId);
        if (!car) return res.status(404).json({ error: 'Car not found' });
        if (car.status === 'rented') return res.status(400).json({ error: 'Car is already rented' });

        // Check if customer exists
        const customer = await Customer.findById(customerId);
        if (!customer) return res.status(404).json({ error: 'Customer not found' });

        // Create Rental
        const rental = await Rental.create({
            car: carId,
            customer: customerId,
            rentStartDate,
            rentEndDate,
            status: 'ongoing'
        });

        // Update Car status
        car.status = 'rented';
        await car.save();

        res.status(201).json({ message: 'Car rented successfully', rental });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Return a car (Car Check-in)
router.put('/:id/return', async (req, res) => {
    try {
        const rental = await Rental.findById(req.params.id);
        if (!rental) return res.status(404).json({ error: 'Rental not found' });
        if (rental.status === 'returned') return res.status(400).json({ error: 'Car already returned' });

        rental.status = 'returned';
        rental.actualReturnDate = new Date();
        await rental.save();

        // Update Car status
        const car = await Car.findById(rental.car);
        if (car) {
            car.status = 'available';
            await car.save();
        }

        res.json({ message: 'Car returned successfully', rental });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all rentals
router.get('/', async (req, res) => {
    try {
        const rentals = await Rental.find().populate('car').populate('customer');
        res.json(rentals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific rental
router.get('/:id', async (req, res) => {
    try {
        const rental = await Rental.findById(req.params.id).populate('car').populate('customer');
        if (!rental) return res.status(404).json({ error: 'Rental not found' });
        res.json(rental);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all rentals of a customer
router.get('/customer/:customerId', async (req, res) => {
    try {
        const rentals = await Rental.find({ customer: req.params.customerId }).populate('car');
        res.json(rentals);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;