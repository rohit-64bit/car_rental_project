import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import carData from '../data/CarData'; // You can create a separate file for car listings

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = carData.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Navbar />

      <section className="pt-32 px-24">
        <h1 className="text-4xl font-bold text-[#D7B65D] mb-6">Available Cars</h1>

        {/* Search Bar */}
        <div className="mb-10">
          <input
            type="text"
            placeholder="Search by car name, type, or feature"
            className="w-full p-4 bg-black text-white border border-[#D7B65D] rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Car Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCars.map((car, index) => (
            <div key={index} className="bg-black border border-[#D7B65D] rounded-xl overflow-hidden shadow-lg">
              <img
                src={car.image}
                alt={car.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-[#D7B65D]">{car.name}</h2>
                <p className="text-gray-400 text-sm mb-2">{car.description}</p>
                <p className="text-[#D7B65D] font-bold text-lg">${car.price}/day</p>
                <Link to={`/booking/${car.id}`}>
                  <button className="mt-4 bg-[#D7B65D] text-black px-4 py-2 rounded hover:bg-white">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Cars;