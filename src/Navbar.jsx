import React, { useState } from 'react';
import { FaBell,FaTimes,FaBars } from 'react-icons/fa';
import sport from './assets/sports-car.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);


    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  return (
    <nav className="py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20">
        {/* Left Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <div>
            <NavLink to={"/landingpage"} className="font-semibold">Car Zone</NavLink>
          </div>
          <div className="ml-2 md:ml-4">
            <img src={sport} alt="" className="w-8 h-8" />
          </div>
        </div>

        {/* Center Section */}
        <div className={`flex-grow text-center ${isNavOpen? "max-sm:block":"max-sm:hidden"}  mb-4 md:mb-0`}>

                <ul className="space-x-4">
            <li className="inline-block">
              <NavLink to={"/"} className="hover:text-gray-200">Home</NavLink>
            </li>
            <li className="inline-block">
              <NavLink to={"/carhiring"} className="hover:text-gray-200">New</NavLink>
            </li>
            <li className="inline-block">
              <NavLink to={"/chooseus"} className="hover:text-gray-200">Used</NavLink>
            </li>
            <li className="inline-block">
              <NavLink to={"/booking"} className="hover:text-gray-200">Car Detail</NavLink>
            </li>
            <li className="inline-block">
              <NavLink to={"/review"} className="hover:text-gray-200">Pages</NavLink>
            </li>
          </ul>
            
          
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          <div className="mr-2 md:mr-4">
            <FaBell className="text-xl" />
          </div>
          <div>
            <span className="font-semibold">Login</span>
          </div>
          <div className="ml-4 sm:hidden">
            {isNavOpen ? (
              <FaTimes className="text-xl cursor-pointer" onClick={toggleNav} />
            ) : (
              <FaBars className="text-xl cursor-pointer" onClick={toggleNav} />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
