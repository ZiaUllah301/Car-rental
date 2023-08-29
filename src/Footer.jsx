import React from 'react';
import sport from './assets/sports-car.png';


const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t py-8">
            <div className="w-full flex justify-between items-center pl-40 pr-40 max-sm:flex-col">
                {/* Center Section */}
                <h2 className="text-xl text-start font-bold">Welcome to Car Zone</h2>
                <button className="bg-[#FC621C] hover:bg-[#FC621C] text-end text-white py-2 px-6 rounded-md mt-4">
                    View Cars
                </button>

            </div>

            <div className="container mx-auto flex flex-wrap justify-between mt-8">
                {/* Left Section */}
                <div className="flex items-center mb-4 md:mb-0">
                    <div>
                        <span className="font-semibold">Car Zone</span>
                    </div>
                    <div className="ml-2 md:ml-4">
                        <img src={sport} alt="" className="w-8 h-8" />
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-2/3 flex flex-col text-center md:flex-row justify-between">
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h4 className="font-semibold mb-2">About</h4>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Car</li>
                            <li>Team</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h4 className="font-semibold mb-2">Company</h4>
                        <ul>
                            <li>Core Values</li>
                            <li>Partner w/ Us</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-4 md:mb-0">
                        <h4 className="font-semibold mb-2">Support</h4>
                        <ul>
                            <li>Support Center</li>
                            <li>Feedback</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h4 className="font-semibold mb-2">Get in Touch</h4>
                        <p className="border rounded-full border-black text-center md:text-center mb-2 md:mb-2">
                            Email: info@carzone.com
                        </p>
                        <button className="bg-[#FC621C] hover:bg-[#FC621C] text-white py-2 px-4 md:w-full rounded-full text-center">
                            Contact Us
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
