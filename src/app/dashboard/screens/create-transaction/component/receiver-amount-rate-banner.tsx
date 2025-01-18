import { Container } from "postcss";
import React, { useState } from "react";


const ReceiverAmountRateBanner = () => {
    
        const [dropdownVisible, setDropdownVisible] = useState(false);
        const [selectedCountry, setSelectedCountry] = useState({
            name: "GH",
            flag: "/assets/images/gh.png",
        });
    
        const countries = [
            {  name: "NG", flag: "/assets/images/ng.png" },
            {  name: "GH", flag: "/assets/images/gh.png" },
            {  name: "BU", flag: "/assets/images/bu.png" },
            {  name: "CA", flag: "/assets/images/ca.png" },
    
    
        ];
    
        const toggleDropdown = () => {
            setDropdownVisible(!dropdownVisible);
        };
    
        const selectCountry = (country: React.SetStateAction<{ name:string; flag: string; }>) => {
            setSelectedCountry(country);
            setDropdownVisible(false);
        };
    

    return (
        <div className="flex items-center space-x-4  p-6  mt-4 justify-between rounded-[16px] border-[1px] border-primary px-[20px] bg-[#0B1630]">

                    <div className="">

                        <div className="flex flex-col px-2 ">
                            <span className="text-[16px] text-[#ffffff] font-medium">Recipient Get</span>
                            <input
                                type="tel"
                                placeholder="0.00"
                                className="w-full py-2  text-[#ffffff] bg-[#0B1630]  border-0 focus:outline-none placeholder-[#ffffff] font-medium placeholder-[30px] text-[30px]"
                            />
                        </div>
                    </div>

                    <div className="mb-4 relative ">
                        <div className="flex items-right   bg-[#0B1630] rounded-lg overflow-hidden">
                            <div
                                className="flex items-center px-4 py-3 h-[55px]     focus:outline-none cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <img
                                    src={selectedCountry.flag}
                                    className="w-auto h-3 mr-2"
                                />
                                <span className=" text-[#ffffff]  font-medium  text-[14px]">{selectedCountry.name}</span>
                                <img
                                    src="/assets/icons/arrow-down-white-new.svg"
                                    alt=""
                                   
                                    className="w-auto h-2 ml-2 xl:mr-4 lg:mr-4 md:mr-4"
                                />
                            </div>

                        </div>

                        {dropdownVisible && (
                            <div className="absolute top-full w-[200px]  left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-10">
                                {countries.map((country) => (
                                    <div
                                        key={country.name}
                                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => selectCountry(country)}
                                    >
                                        <img
                                            src={country.flag}
                                            alt={country.name}
                                            className="w-auto h-3 mr-2"
                                        />
                                        <span className="text-[#000000]  font-medium text-[14px]">{country.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

    );
};

export default ReceiverAmountRateBanner;
