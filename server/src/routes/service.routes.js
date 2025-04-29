const express = require('express');
const router = express.Router();
const Servicing = require('../models/Servicing');
const Car = require('../models/Car');

// Create a new servicing record
router.post('/', async (req, res) => {
  try {
    const { carId, serviceDate, description, serviceCost, serviceCenter } = req.body;

    // Check if car exists
    const car = await Car.findById(carId);
    if (!car) return res.status(404).json({ error: 'Car not found' });

    const servicing = await Servicing.create({
      car: carId,
      serviceDate,
      description,
      serviceCost,
      serviceCenter,
      status: 'pending'
    });

    res.status(201).json({ message: 'Servicing record created', servicing });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update servicing record when completed
router.put('/:id/complete', async (req, res) => {
  try {
    const servicing = await Servicing.findById(req.params.id);
    if (!servicing) return res.status(404).json({ error: 'Servicing record not found' });

    servicing.status = 'completed';
    servicing.completedDate = new Date();
    await servicing.save();

    res.json({ message: 'Servicing marked as completed', servicing });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all servicing records
router.get('/', async (req, res) => {
  try {
    const servicings = await Servicing.find().populate('car');
    res.json(servicings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get servicing records for a specific car
router.get('/car/:carId', async (req, res) => {
  try {
    const servicings = await Servicing.find({ car: req.params.carId });
    res.json(servicings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;