const express = require('express');
const router = express.Router();
const Car = require('../models/Car');

// Add a new car
router.post('/', async (req, res) => {
    try {
        const car = await Car.create(req.body);
        res.status(201).json(car);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all cars
router.get('/', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get single car
router.get('/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).json({ error: 'Car not found' });
        res.json(car);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update car
router.put('/:id', async (req, res) => {
    try {
        const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!car) return res.status(404).json({ error: 'Car not found' });
        res.json(car);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete car
router.delete('/:id', async (req, res) => {
    try {
        const car = await Car.findByIdAndDelete(req.params.id);
        if (!car) return res.status(404).json({ error: 'Car not found' });
        res.json({ message: 'Car deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;