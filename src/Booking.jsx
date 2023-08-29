import React from 'react';
import bookingImage from './assets/Rectangle 96.png';

const Booking = () => {
    return (
        <div className="w-full py-8 px-4 md:px-20 bg-gray-100">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                
                <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4">Book And Rent A Car</h2>
                    <p className="mb-6 text-justify">
                        Delectus, nesciunt imperdiet dolor litora orci? Tristique per natus.
                        Saepe convallis, nostra.Ducimus convallis necessitatibus alias, bibendum elit nemo.
                    </p>
                    <form className="flex flex-col">
                        <div className="flex flex-col mb-4 md:flex-row md:space-x-4">
                            <input type="text" placeholder="Your name" className="p-2 rounded-md mb-2 md:mb-0" />
                            <input type="email" placeholder="Your email" className="p-2 rounded-md" />
                        </div>
                        <div className="flex flex-col mb-4 md:flex-row md:space-x-4">
                            <input type="tel" placeholder="Your phone number" className="p-2 rounded-md mb-2 md:mb-0" />
                            <input type="text" placeholder="Car's option" className="p-2 rounded-md" />
                        </div>
                        <div className="flex flex-col mb-4 md:flex-row md:space-x-4">
                            <input type="date" placeholder="Pick up date" className="p-2 rounded-md mb-2 md:mb-0" />
                            <input type="date" placeholder="Drop off date" className="p-2 rounded-md" />
                        </div>
                        <button type="submit" className="bg-[#FC621C] hover:bg-[#FC621C] text-white py-2 px-6 rounded-md w-full md:w-[193px]">
                            Inquiry Now
                        </button>
                    </form>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="flex justify-center">
                        <img src={bookingImage} alt="Booking" className="w-[594px] h-[543px] rounded-[35px] md:ml-60 object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
