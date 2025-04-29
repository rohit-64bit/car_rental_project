import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import carData from '../data/CarData';

const Booking = () => {
  const { carId } = useParams();
  const car = carData.find(c => c.id === parseInt(carId));

  if (!car) {
    return <div className="text-center text-white pt-32">Car not found</div>;
  }

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Navbar />

      <section className="pt-32 px-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Images */}
        <div className="space-y-4">
          <img src={car.image} alt={car.name} className="rounded-lg w-full h-64 object-cover border border-[#D7B65D]" />
          {car.images?.slice(1).map((img, idx) => (
            <img key={idx} src={img} alt={`${car.name} ${idx}`} className="rounded-lg w-full h-40 object-cover border border-[#D7B65D]" />
          ))}
        </div>

        {/* Car Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#D7B65D]">{car.name}</h1>
          <p className="text-gray-400">{car.description}</p>
          <p>Mileage: <span className="text-[#D7B65D]">{car.mileage} km/h</span></p>
          <p>Engine: <span className="text-[#D7B65D]">{car.engine}</span></p>
          <p>Parts: <span className="text-[#D7B65D]">{car.parts}</span></p>
          <p>Insurance: <span className="text-[#D7B65D]">{car.insurance}</span></p>
          <p className="text-[#D7B65D] text-xl font-semibold">${car.price} / day</p>

          {/* Booking Form (mock) */}
          <div className="space-y-3">
            <input type="date" className="w-full p-3 bg-black text-white border border-[#D7B65D] rounded" placeholder="Pick-up date" />
            <input type="date" className="w-full p-3 bg-black text-white border border-[#D7B65D] rounded" placeholder="Drop-off date" />
            <button className="w-full bg-[#D7B65D] text-black py-3 font-bold rounded hover:bg-white transition">Confirm Booking</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
