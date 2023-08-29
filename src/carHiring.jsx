import React from 'react';
import carImage1 from './assets/Rectangle 98.png';
import carImage2 from './assets/Rectangle 99.png';
import carImage3 from './assets/Rectangle 100.png';
import carImage4 from './assets/image 29.png';

const CarHiring = () => {
  return (
    <div className="flex flex-col items-center p-8">
      {/* Heading and Paragraph */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Comfortable Car For Hire !</h2>
        <p className="text-gray-700 text-justify">
          Delectus, nesciunt imperdiet dolor litora orci? Tristique per natus. Saepe convallis, nostra.
          Ducimus convallis necessitatibus alias, bibendum elit nemo.
        </p>
      </div>

      {/* Car Images and Paragraph */}
      <div className="w-full flex flex-col md:flex-row items-center px-4">
        {/* Left Car Image */}
        <div className="w-full md:w-1/3">
          <img src={carImage1} alt="Car 1" className="w-[369px] h-[475px] rounded-md object-cover" />
        </div>

        {/* Center Paragraph */}
        <div className="w-full md:w-1/3 text-center my-4 md:my-0">
          <p className="text-gray-700 text-justify mr-10">
            Delectus, nesciunt imperdiet dolor litora orci?
            Tristique per natus. Saepe convallis, nostra.
            Ducimus convallis necessitatibus alias, bibendum elit nemo.
          </p>
        </div>

        {/* Right Car Image */}
        <div className="w-full md:w-1/3">
          <div className='flex gap-2'>
            <div>
            <img src={carImage4} alt="Car 2" className="w-[254px] h-[450px] mb-4 rounded-full shadow-sm object-cover" />

            </div>
            <div>
            <img src={carImage3} alt="Car 2" className="w-[250px] h-[309px] rounded-md object-cover" />

            </div>
          </div>
          <div className='w-full'>
          <img src={carImage2} alt="Car 2" className="w-[547px] h-[169px] rounded-md object-cover" />

          </div>
        </div>
      </div>

    </div>
  );
};

export default CarHiring;
