"use client"
import { useState } from "react";

const Header= ()=>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return(
        <nav className="bg-white rounded-[100px] p-4 mx-[30px] xl:mx-[70px] md:mx-[30px] lg:mx-[30px]  mt-[20px]  xl:mt-[40px] md:mt-[40px] lg:mt-[40px] flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="assets/images/logo.png"
            alt="Logo"
            className="xl:h-16 lg:h-16 md:h-16 h-10  w-auto xl:ml-[10px] lg:ml-[10px] md:ml-[10px] ml-[10px]"
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
                src="assets/icons/dropdown.svg"
                alt=""
                className="w-[14px] h-auto ml-2 xl:contain"
              />
            </button>
  
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <a
                  href="#resource1"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                FAQs
                </a>
                
              </div>
            )}
          </div>
        </div>
  
        <div>
          <button className="bg-[#3E76DE] text-white font-medium px-6 py-2 border-[0px] rounded-full xl:w-[160px] xl:h-[60px] hover:bg-blue-700 transition">
            Sign up
          </button>
        </div>
      </nav>
    )
}

export default Header;