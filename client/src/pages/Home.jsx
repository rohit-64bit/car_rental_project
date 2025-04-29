import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import backgroundImage from '../assets/Background1.svg';
import { FaCarSide, FaClock, FaShippingFast, FaShieldAlt, FaTags, FaUserTie } from 'react-icons/fa';
import car1 from '../assets/car1.jpg';
import car2 from '../assets/car2.jpg';
import car3 from '../assets/car3.jpg';

const Home = () => {

    const carData = [
      {
        image: car1,
        name: 'Luxury Sedan 1',
        price: '$199/day',
      },
      {
        image: car2,
        name: 'Luxury Sedan 2',
        price: '$249/day',
      },
      {
        image: car3,
        name: 'Luxury SUV',
        price: '$299/day',
      },
    ];

  return (
    <div className="bg-[#0A0A0A] text-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="px-24 max-w-xl mt-24">
          <h1 className="text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-[#D7B65D] to-white bg-clip-text text-transparent">
              Drive the <span className="text-white">Extraordinary</span>
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Discover a world of <span className="text-[#D7B65D] font-medium">luxury</span>, <span className="text-[#D7B65D] font-medium">comfort</span>, and <span className="text-[#D7B65D] font-medium">performance</span> with our exclusive fleet of high-end vehicles.
          </p>
        </div>
      </section>

      
      {/* Search Bar */}
<section className="py-12 bg-[#111]">
  <div className="px-24 max-w-6xl mx-auto">
    <h2 className="text-2xl font-semibold text-[#D7B65D] mb-6">Find Your Ride</h2>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      
      <input
        type="text"
        placeholder="Search Location"
        className="p-3 bg-black text-white border border-[#D7B65D] placeholder:text-gray-400"
      />

      <input
        type="date"
        className="p-3 bg-black text-white border border-[#D7B65D]"
      />

      <input
        type="time"
        className="p-3 bg-black text-white border border-[#D7B65D]"
      />

      <input
        type="date"
        className="p-3 bg-black text-white border border-[#D7B65D]"
      />

      <input
        type="time"
        className="p-3 bg-black text-white border border-[#D7B65D]"
      />
    </div>

    <div className="mt-6 text-right">
      <button className="bg-[#D7B65D] text-black px-6 py-3 font-bold rounded hover:bg-white transition">
        Search
      </button>
    </div>
  </div>
</section>


      {/* Featured Cars */}
      <section className="py-24 bg-[#0A0A0A]">
      <div className="px-24">
        <h2 className="text-3xl font-bold text-center text-[#D7B65D] mb-10">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {carData.map((car, index) => (
            <div
              key={index}
              className="bg-black border border-[#D7B65D] rounded-xl p-4 shadow-lg hover:shadow-[#D7B65D]/20 transition-shadow"
            >
              <div className="h-48 bg-[#222] rounded-lg mb-4 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{car.name}</h3>
              <p className="text-[#D7B65D] font-medium">{car.price}</p>
              <button className="mt-4 bg-[#D7B65D] text-black px-4 py-2 rounded hover:bg-white hover:text-black font-semibold">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Benefits */}
      <section className="py-24 bg-[#111] h-screen">
        <div className="px-24">
          <h2 className="text-3xl font-bold text-center text-[#D7B65D] mb-4">Why Choose Us</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Here’s what sets us apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCarSide size={40} className="text-[#D7B65D]" />,
                title: "Luxury Limousine Selection",
                description: "Choose from an elite collection of limousines for every occasion — style and sophistication guaranteed."
              },
              {
                icon: <FaClock size={40} className="text-[#D7B65D]" />,
                title: "24/7 Availability",
                description: "Book anytime, day or night. Our team is always ready to assist you with seamless scheduling."
              },
              {
                icon: <FaShippingFast size={40} className="text-[#D7B65D]" />,
                title: "Fast Delivery Service",
                description: "Your vehicle arrives at your doorstep on time, every time — prompt, prepared, and polished."
              },
              {
                icon: <FaShieldAlt size={40} className="text-[#D7B65D]" />,
                title: "Safety & Security",
                description: "Ride with peace of mind. Our vehicles meet the highest standards of safety and inspection."
              },
              {
                icon: <FaTags size={40} className="text-[#D7B65D]" />,
                title: "Transparent Pricing",
                description: "No hidden fees. Our fixed rates come with a bonus system for frequent and corporate clients."
              },
              {
                icon: <FaUserTie size={40} className="text-[#D7B65D]" />,
                title: "Professional Drivers",
                description: "Driven by trained professionals who value punctuality, discretion, and customer care."
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-black border border-[#D7B65D] rounded-xl p-6 shadow-lg hover:shadow-[#D7B65D]/20 transition-shadow"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h4 className="text-xl font-semibold text-[#D7B65D] mb-2 text-center">{benefit.title}</h4>
                <p className="text-gray-300 text-sm text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-[#0A0A0A]">
        <div className="px-24">
          <h2 className="text-3xl font-bold mb-4 text-[#D7B65D]">Ready to Ride in Style?</h2>
          <p className="mb-6">Book your premium ride now and experience luxury on wheels.</p>
          <button className="bg-[#D7B65D] text-black px-8 py-4 rounded-lg font-semibold hover:bg-white">Reserve Now</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
