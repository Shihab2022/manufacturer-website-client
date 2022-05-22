import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import logo from '../assets/icon/logo.png'
const Navbar = () => {
    const [active,setActive]=useState(false)
    // console.log(active)
  return (
    <nav class="bg-[#002341] shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <a href="#" class="flex items-center py-4 px-2">
                <img src={logo} alt="Logo" class="h-8 w-28 mr-2" />
                
              </a>
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <a
                href=""
                class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
              >
                Home
              </a>
              <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Services
              </a>
              <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                About
              </a>
              <a
                href=""
                class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div class="hidden md:flex items-center space-x-3 ">
            <a
              href=""
              class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              Log In
            </a>
            <a
              href=""
              class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
            >
              Sign Up
            </a>
          </div>
          {/* <!-- Mobile menu button --> */}
          <div class="md:hidden flex items-center">
            <button onClick={()=>setActive(!active)} class="outline-none mobile-menu-button">
            {!active &&  <svg
                class=" w-6 h-6 text-gray-500 hover:text-green-500 "
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
     { active && <div class="md:hidden mobile-menu">
        <ul class="">
          <li class="active">
            <a
              href="index.html"
              class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#about"
              class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>}
      {/* <script>
				const btn = document.querySelector("button.mobile-menu-button");
				const menu = document.querySelector(".mobile-menu");

				btn.addEventListener("click", () => {
					menu.classList.toggle("hidden");
				});
			</script> */}
    </nav>
  );
};

export default Navbar;
