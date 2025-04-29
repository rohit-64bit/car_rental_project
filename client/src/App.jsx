import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; 

// User pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cars from './pages/Cars';
import RentCar from './pages/RentCar';
import MyRentals from './pages/MyRentals';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import About from './pages/About';
import Booking from './pages/Booking';

// Admin pages
import AdminLogin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminCars from './pages/admin/Cars';
import AdminRentals from './pages/admin/Rentals';
import AdminPayments from './pages/admin/Payments';
import AdminServices from './pages/admin/Services';
import Users from './pages/admin/Users';


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/rent/:carId" element={<RentCar />} />
        <Route path="/my-rentals" element={<MyRentals />} />
        <Route path="/payment/:rentalId" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking/:carId" element={<Booking />} />


        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/cars" element={<AdminCars />} />
        <Route path="/admin/rentals" element={<AdminRentals />} />
        <Route path="/admin/payments" element={<AdminPayments />} />
        <Route path="/admin/services" element={<AdminServices />} />
        <Route path="/admin/users" element={<Users />} />

      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
