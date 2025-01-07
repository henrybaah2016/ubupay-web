"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const UpdateProfile = () => {
 const router = useRouter();
     const [selectedDate, setSelectedDate] = useState<Date | null>(null);
 
     const [dropdownVisible, setDropdownVisible] = useState(false);
     const [selectedCountry, setSelectedCountry] = useState({
         name: "Canada",
         flag: "/assets/images/ca.png",
     });
 
     const countries = [
         { name: "Nigeria", flag: "/assets/images/ng.png" },
         { name: "Ghana", flag: "/assets/images/gh.png" },
         { name: "Burundi", flag: "/assets/images/bu.png" },
         { name: "Canada", flag: "/assets/images/ca.png" },
 
 
     ];
 
     const toggleDropdown = () => {
         setDropdownVisible(!dropdownVisible);
     };
 
     const selectCountry = (country: React.SetStateAction<{ name: string; flag: string; }>) => {
         setSelectedCountry(country);
         setDropdownVisible(false);
     };
 
     const handleSubmit = (e: React.FormEvent) => {
         e.preventDefault();
         router.push("/dashboard/screens/profile");
     };
 

    return (
        <div className="mx-[0px] xl:mx-[120px] lg:mx-[120px] md:mx-[120px]">
            <span className="text-[16px] font-semibold text-dark">Personal Information</span>
            <div className="p-6 rounded-[16px] px-[20px] xl:px-[80px] lg:px-[80px] md:px-[80px] mt-6 py-[40px] bg-[#F9F9F9]">
                <span className="text-sm font-semibold text-dark">Update personal information</span>

                  <form >
                                   <div className="mb-4 flex mt-[20px] space-x-4">
                                       <input
                                           type="text"
                                           placeholder="First Name"
                                           className="w-1/2 px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                                       />
                                       <input
                                           type="text"
                                           placeholder="Last Name "
                                           className="w-1/2 px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                                       />
                                   </div>
                                   <div className="mb-4">
                                       <input
                                           type="email"
                                           placeholder="Email Address"
                                           className="w-full px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                                       />
               
                                   </div>
               
                                   <div className="mb-4">
                                       <DatePicker
                                           selected={selectedDate}
                                           onChange={(date: Date | null) => setSelectedDate(date)}
                                           placeholderText="Date of Birth"
                                           popperClassName="custom-datepicker-popper"
                                           className="w-full px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                                       />
                                   </div>
                                   <div className="mb-4 relative">
                                       <div className="flex w-full items-center bg-[#ECECEC] rounded-lg overflow-hidden">
                                           <div
                                               className="flex w-full  justify-between items-center px-4 py-3 h-[55px] focus:outline-none cursor-pointer"
                                               onClick={toggleDropdown}
                                           >
                                               <div className="flex items-center">
                                               <img
                                                   src={selectedCountry.flag}
                                                   alt={selectedCountry.name}
                                                   className="w-auto h-4 mr-2"
                                               />
                                               <span className="text-[#6c6c6c] font-semibold text-[14px]">{selectedCountry.name}</span>
                                               
                                               </div>
                                               <img
                                                   src="/assets/icons/arrow-down.svg"
                                                   alt="arrow-down"
                                                   className="w-auto h-2 ml-2"
                                               />
                                           </div>
                                       </div>
               
                                       {dropdownVisible && (
                                           <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-10">
                                               {countries.map((country) => (
                                                   <div
                                                       key={country.name}
                                                       className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                       onClick={() => selectCountry(country)}
                                                   >
                                                       <img
                                                           src={country.flag}
                                                           alt={country.name}
                                                           className="w-auto h-4 mr-2"
                                                       />
                                                       <span className="text-[#6c6c6c] font-semibold text-[14px]">{country.name}</span>
                                                   </div>
                                               ))}
                                           </div>
                                       )}
                                   </div>
               
                                   <div className="mb-4">
                                       <textarea
                                           placeholder="Home Address"
                                       
                                           className="w-full px-4 py-3 text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                                       ></textarea>
               
                                   </div>
               
                                   <div className="mb-4">
                                       <input
                                           type="text"
                                           placeholder="City"
                                           className="w-full px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                                       />
               
                                   </div>
                                   <button
                                       type="submit"
                                       onClick={handleSubmit}
                                       className="w-full bg-primary  h-[55px] mb-8 text-white py-3 mt-[30px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
                                   >
                                       Update 
                                   </button>
                               </form>

               
            </div>
        </div>
    );
};

export default UpdateProfile;
