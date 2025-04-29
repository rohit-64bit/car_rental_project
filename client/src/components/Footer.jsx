import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-[#D7B65D] py-8 px-8 mt-16">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} LuxRentals. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
