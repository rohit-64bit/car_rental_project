import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Simulate authentication (replace with real auth logic)
  const isLoggedIn = false;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-24 py-4 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'bg-black/60 backdrop-blur-md shadow-lg' : 'bg-transparent'
      } text-[#D7B65D]`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">LuxRentals</div>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-base font-medium">
        <li><Link to="/" className="hover:text-white">Home</Link></li>
        <li><Link to="/cars" className="hover:text-white">Cars</Link></li>
        <li><Link to="/about" className="hover:text-white">About</Link></li>
        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
      </ul>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          className="flex items-center space-x-2 hover:text-white transition"
          onClick={toggleDropdown}
        >
          <FaUserCircle size={24} />
          <span className="hidden sm:inline">Profile</span>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-3 w-48 bg-black border border-[#D7B65D] rounded-lg shadow-lg py-2 z-50">
            {!isLoggedIn ? (
              <>
                <a href="/login" className="block px-4 py-2 hover:bg-[#D7B65D] hover:text-black transition">Login</a>
                <a href="/register" className="block px-4 py-2 hover:bg-[#D7B65D] hover:text-black transition">Register</a>
              </>
            ) : (
              <>
                <a href="/myrentals" className="block px-4 py-2 hover:bg-[#D7B65D] hover:text-black transition">My Rentals</a>
                <a href="/payments" className="block px-4 py-2 hover:bg-[#D7B65D] hover:text-black transition">Payments</a>
                <a href="/rentcar" className="block px-4 py-2 hover:bg-[#D7B65D] hover:text-black transition">Rent a Car</a>
                <a href="/logout" className="block px-4 py-2 hover:bg-[#D7B65D] hover:text-black transition">Logout</a>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
