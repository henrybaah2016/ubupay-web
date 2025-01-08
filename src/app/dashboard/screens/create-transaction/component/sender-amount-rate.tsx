import React, { useState } from "react";


const SenderAmountRate = () => {
    
        const [dropdownVisible, setDropdownVisible] = useState(false);
        const [selectedCountry, setSelectedCountry] = useState({
            name: "CA",
            flag: "/assets/images/ca.png",
        });
    
        const countries = [    
            {  name: "CA", flag: "/assets/images/ca.png" },
            {  name: "USA", flag: "/assets/images/usa.png" },
            {  name: "EU", flag: "/assets/images/euro.png" },
            {  name: "UK", flag: "/assets/images/uk.png" },
        ];
    
        
        const toggleDropdown = () => {
            setDropdownVisible(!dropdownVisible);
        };
    
        const selectCountry = (country: React.SetStateAction<{ name:string; flag: string; }>) => {
            setSelectedCountry(country);
            setDropdownVisible(false);
        };
    

    return (
        <div className="flex items-center space-x-4  p-6  mt-4 justify-between rounded-[16px] px-[20px] bg-[#ffffff]">

                    <div className="">

                        <div className="flex flex-col px-2 ">
                            <span className="text-[16px] text-[#6C6C6C] font-semibold">You Transfer</span>
                            <input
                                type="tel"
                                placeholder="0.00"
                                className="w-full py-2  text-[#6c6c6c] bg-[#ffffff]  border-0 focus:outline-none placeholder-[#6c6c6c] font-semibold placeholder-[30px] text-[30px]"
                            />
                        </div>
                    </div>

                    <div className="mb-4 relative ">
                        <div className="flex items-right   bg-[#ffffff] rounded-lg overflow-hidden">
                            <div
                                className="flex items-center px-4 py-3 h-[55px]     focus:outline-none cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <img
                                    src={selectedCountry.flag}
                                    className="w-auto h-3 mr-2"
                                />
                                <span className=" text-[#6c6c6c]  font-semibold  text-[14px]">{selectedCountry.name}</span>
                                <img
                                    src="/assets/icons/arrow-down.svg"
                                    alt=""
                                    className="w-auto h-2 ml-2"
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
                                        <span className="text-[#6c6c6c]  font-semibold  text-[14px]">{country.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

    );
};

export default SenderAmountRate;
