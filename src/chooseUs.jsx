import React from 'react';
import img from './assets/image 26.png';
import img1 from './assets/image 27.png';
import img2 from './assets/image 28.png';

const ChooseUs = () => {
  return (
    <div className="flex flex-col items-center bg-[#FC621C] px-6">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white">Why Choose Us</h2>
        <p className="text-white">Discover the reasons to choose our services.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Section */}
        <div className="flex flex-col items-center">
          <img src={img} alt="Left" className="w-[100%] md:w-[485.78px] h-[341.13px] border mb-2" />
          <h3 className="text-lg font-bold text-white">Full Auto Servicing Facility</h3>
          <p className="text-white text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>

        {/* Center Section */}
        <div className="flex flex-col items-center">
          <img src={img1} alt="Center" className="w-[100%] md:w-[485.78px] h-[341.13px] border mb-2" />
          <h3 className="text-lg font-bold text-white">Professional Technician Services</h3>
          <p className="text-white text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center">
          <img src={img2} alt="Right" className="w-[100%] md:w-[513px] h-[342px] border mb-2 object-cover" />
          <h3 className="text-lg font-bold text-white">Online Vehicle Rental Booking</h3>
          <p className="text-white text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
