const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API!'
    });
});

app.use('/api/customers', require('./src/routes/customer.routes'));
app.use('/api/cars', require('./src/routes/car.routes'));
app.use('/api/rentals', require('./src/routes/rental.routes'));
app.use('/api/payments', require('./src/routes/payment.routes'));
app.use('/api/services', require('./src/routes/service.routes'));

module.exports = app;