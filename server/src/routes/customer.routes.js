const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Customer = require('../models/Customer');

// Add a new customer
router.post('/', async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all customers
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get single customer
router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).json({ error: 'Customer not found' });
        res.json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update customer
router.put('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!customer) return res.status(404).json({ error: 'Customer not found' });
        res.json(customer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete customer
router.delete('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) return res.status(404).json({ error: 'Customer not found' });
        res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Customer Registration
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        // Check if customer already exists
        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) {
            return res.status(400).json({ error: 'Customer already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new customer
        const customer = await Customer.create({
            name,
            email,
            password: hashedPassword,
            phone
        });

        res.status(201).json({ message: 'Customer registered successfully', customer });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Customer Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find customer
        const customer = await Customer.findOne({ email });
        if (!customer) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, customer.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Create JWT token
        const token = jwt.sign({ customerId: customer._id }, 'your_secret_key', { expiresIn: '7d' });

        res.json({ message: 'Login successful', token, customer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;