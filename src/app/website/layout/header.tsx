"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const router = useRouter();

  return (
    <nav className=" py-10 mx-[10px] xl:mx-[70px] lg:mx-[30px] mt-[20px] xl:mt-[0px] lg:mt-[40px] flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="assets/images/logo-ubu.png"
          alt="Logo"
          onClick={() => router.push("/")}
          className="xl:h-10 lg:h-16 h-10 cursor-pointer w-auto xl:ml-[16px] lg:ml-[10px] ml-[10px]"
        />
      </div>

      <button
        className="lg:hidden flex items-center"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img
          src="assets/icons/menu.svg"
          alt="Menu"
          className="w-auto h-5 mr-[10px] cursor-pointer"
        />
      </button>

      <div className="hidden lg:flex flex-row justify-center items-center space-x-10">
        <a
          href="#home"
          className="text-[#ffffff] font-normal text-[16px] hover:text-[#3E76DE] transition"
        >
          Home
        </a>
        <a
          href="#why-ubupay"
          className="text-[#ffffff] font-normal text-[16px] hover:text-[#3E76DE] transition"
        >
          Why UbuPay?
        </a>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center text-[#ffffff] font-normal text-[16px] hover:text-[#3E76DE] transition"
          >
            Resources
            {/* <img
              src="assets/icons/dropdown.svg"
              alt=""
              className="w-[14px] h-auto ml-2"
            /> */}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <a
                href="#resource1"
                className="block px-4 py-2 text-[#34342A] font-normal text-[16px] hover:text-[#3E76DE] transition"
              >
                FAQs
              </a>
            </div>
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6">
          <div className="flex justify-end">
            <button
              className="text-[#34342A] font-semibold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col mt-6 space-y-4">
            <a
              href="#home"
              className="text-[#34342A] font-normal text-[16px] hover:text-[#3E76DE] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#why-ubupay"
              className="text-[#34342A] font-normal text-[16px] hover:text-[#3E76DE] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Why UbuPay?
            </a>
            
            <a
              href="#resources"
              className="text-[#34342A] font-normal text-[16px] hover:text-[#3E76DE] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>
            <a
              href="#1"
              onClick={() => {
                
                setIsMenuOpen(false);
              }}
              className="text-[#ffffff] font-normal text-[16px] hover:text-[#ffffff] transition"
            >
              Login
            </a>
            <button
              className="flex flex-row w-[150px] h-[60px] btn btn-normal xl:btn-normal mt-4 font-normal text-[16px] items-center transition ease-out duration-500"
              onClick={() => {
                
                setIsMenuOpen(false);
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      )}

      <div className="hidden lg:flex items-center space-x-8 xl:mr-[16px]">
        <a
          href="#1"
          className="text-[#ffffff] font-normal text-[16px] hover:text-[#ffffff] transition"
        >
          Login
        </a>
        <button
          className="flex flex-row btn btn-normal xl:btn-normal font-normal text-[16px] items-center transition ease-out duration-500"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Header;
