import React from 'react';
import carImage1 from './assets/image 23.png';
import carImage2 from './assets/Rectangle 87.png';

const Home = () => {
  return (
    <div className="p-8">
      {/* First Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="w-full md:w-1/2 md:mr-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Best In Auto</h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Rental & Service</h2>
        </div>
        <div className="w-full md:w-1/2">
          <img src={carImage1} alt="Car 1" className="w-full h-auto rounded-full object-contain" />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 md:mr-6 relative">
          <img src={carImage2} alt="Car 2" className="w-full h-auto rounded-full top-0 object-contain" />
        </div>
        <div className="w-full md:w-1/2 text-justify mt-4 md:mt-0">
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injected humour, or randomised words
            which don't look even slightly believable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
