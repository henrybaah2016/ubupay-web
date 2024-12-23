"use client"
import { useState } from "react";

const Header= ()=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return(
        <nav className="bg-white rounded-[100px] shadow-md p-6 mx-[30px] xl:mx-[30px] md:mx-[30px] lg:mx-[30px]  mt-[20px]  xl:mt-[40px] md:mt-[40px] lg:mt-[40px] flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>
  
        <div className="hidden md:flex space-x-8 items-center">
          <a
            href="#home"
            className="text-gray-800 font-medium hover:text-blue-600 transition"
          >
            Home
          </a>
          <a
            href="#why-ubupay"
            className="text-gray-800 font-medium hover:text-blue-600 transition"
          >
            Why UbuPay?
          </a>
  
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-800 font-medium hover:text-blue-600 transition"
            >
              
              Resources
              <img
                src="/dropdown-icon.png" // Replace with your dropdown icon path
                alt="Dropdown Icon"
                className="h-4 w-4 mr-2"
              />
            </button>
  
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <a
                  href="#resource1"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Resource 1
                </a>
                <a
                  href="#resource2"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Resource 2
                </a>
                <a
                  href="#resource3"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Resource 3
                </a>
              </div>
            )}
          </div>
        </div>
  
        <div>
          <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </nav>
    )
}

export default Header;