"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();
  



  return (
    <nav className="bg-white rounded-[100px] p-4 mx-[30px] xl:mx-[70px] md:mx-[30px] lg:mx-[30px]  mt-[20px]  xl:mt-[40px] md:mt-[40px] lg:mt-[40px] flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="assets/images/logo.png"
          alt="Logo"
          className="xl:h-16 lg:h-16 md:h-16 h-10  w-auto xl:ml-[16px] lg:ml-[10px] md:ml-[10px] ml-[10px]"
        />
      </div>

      <div className="hidden md:flex space-x-10 items-center">
        <a
          href="#home"
          className="text-[#34342A] font-semibold hover:text-[#3E76DE] transition"
        >
          Home
        </a>
        <a
          href="#why-ubupay"
          className="text-[#34342A] font-semibold hover:text-[#3E76DE] transition"
        >
          Why UbuPay?
        </a>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center text-[#34342A] font-semibold hover:text-[#3E76DE] transition"
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
                className="block px-4 py-2 text-[#34342A] font-semibold hover:text-[#3E76DE] transition"
              >
                FAQs
              </a>

            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-8 xl:mr-[16px]">
        <a
          href="#login"
          className="text-[#34342A] font-semibold hover:text-[#3E76DE] transition"
        >
          Login
        </a>
        <button
          className="flex flex-row btn btn-normal xl:btn-normal md:btn-normal font-semibold lg:btn-normal items-center  transition ease-out duration-500"
          onClick={() => router.push("/account/signup")}

        >
          Sign up
        </button>
      </div>
    </nav>
  )
}

export default Header;