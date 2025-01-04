"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const BasicInformation = () => {
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
        router.push("/account/kyc/identity");
    };
    return (
        <div className="flex h-screen bg-[#FFFFFF] px-0 md:px-0 xl:px-0 lg:px-0 xl:flex-row lg:flex-row md:flex-col flex-col">
            <div className="w-full xl:w-[40%] lg:w-[40%] md:w-full bg-account-bg-3 xl:rounded-[20px] lg:rounded-[20px] md:rounded-[0px] rounded-[0px] xl:mx-10 lg:mx-10 md:mx-0 mx-0  xl:my-4 xl:py-0 lg:py-0 py-8 md:py-8 bg-cover flex flex-col justify-between p-4">
                <div
                    onClick={() => router.push("/")}
                    className="flex items-center cursor-pointer mt-[20px] ml-[20px] space-x-2">
                    <img
                        src="/assets/icons/arrow-back.png"
                        alt="Icon"
                        className="w-auto h-3"
                    />
                    <span className="text-white text-sm font-semibold">
                        Back to Website
                    </span>
                </div>
            </div>


            <div className="w-full xl:w-[60%] lg:w-[60%] md:w-full flex flex-col justify-center px-4 xl:px-0 lg:px-0 md:px-[60px] pt-[200px] xl:pt-[0px] lg:pt-[0px] md:pt-[200px] xl:pr-[150px] xl:pl-[50px] overflow-y-auto h-full">
                <h1 className="text-[25px] font-bold text-[#34342A] mt-[120px]">Personal Information</h1>
                <p className="text-[#6C6C6C] font-semibold text-[14px] mb-8 mt-[20px]">
                    Please the personal information should be entered as it appears on your legal document and government issued ID.
                </p>

                <form >
                    <div className="mb-4 flex space-x-4">
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
                        <input
                            type="text"
                            placeholder="Date of Birth"
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
                        Continue
                    </button>
                </form>


            </div>
        </div>
    );
};

export default BasicInformation;
