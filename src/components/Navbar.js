import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import logo from '../assets/icon/logo.png'
const Navbar = () => {
    const [active,setActive]=useState(false)
    // console.log(active)
  return (
    <nav className="bg-[#002341] text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <NavLink to='/' href="#" className="flex items-center py-4 px-2">
                <img src={logo} alt="Logo" className="h-8 w-28 mr-2" />
                
              </NavLink>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <NavLink to='/'
                href=""
                className="py-4 px-2 text-white   font-semibold "
              >
                Home
              </NavLink>
              <NavLink to='/home'
                href=""
                className="py-4 px-2 text-white font-semibold hover:text-green-500 transition duration-300"
              >
                Services
              </NavLink>
              <NavLink to='/login'
                href=""
                className="py-4 px-2 text-white  font-semibold hover:text-green-500 transition duration-300"
              >
                About
              </NavLink>
              <NavLink to='/'
                href=""
                className="py-4 px-2 text-white  font-semibold hover:text-green-500 transition duration-300"
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 ">
            <NavLink to='/'
              className="py-2 px-2 font-medium text-green-700 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              Log In
            </NavLink>
            <NavLink to='/'
              className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
            >
              Sign Up
            </NavLink>
          </div>
          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
            <button onClick={()=>setActive(!active)} className="outline-none mobile-menu-button">
            {!active &&  <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>}
            { active && <span className="text-2xl text-red-500">
            <FaTimes/>
            </span>}
            </button>
          </div>
        </div>
      </div>
      {/* <!-- mobile menu --> */}
     { active && <div className="md:hidden mobile-menu">
        <ul className="">
          <li className="active">
            <NavLink to='/'
              className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/'
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to='/'
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/login'
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>}
  
    </nav>
  );
};

export default Navbar;
