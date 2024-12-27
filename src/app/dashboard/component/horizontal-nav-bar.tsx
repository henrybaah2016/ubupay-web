import React from "react";

const HorizontalNavbar = () => {
    return (
        <div className="flex items-center justify-between p-4 mx-[30px]">
            <div className="flex items-center">
                <form className="relative">
                    <input
                        type="email"
                        placeholder="Search"
                        className="w-full pl-12 py-3 bg-[#F9F9F9] border-[1px]  text-[#000000] text-[14px] pr-4 font-semibold  rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <img
                        src="/assets/icons/search.png"
                        alt="Email"

                        className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-cursor w-auto h-3"
                    />
                </form>
            </div>


            <div className="flex items-center space-x-6">
                <button
                    className="flex flex-row btn btn-normal items-center xl:btn-normal md:btn-normal font-semibold lg:btn-normal items-center  transition ease-out duration-500">
                    Transfer
                </button>
                <div className="relative">
                    <img src="/assets/icons/notification.png" alt="Notification" className="w-auto h-5" />
                    <span className="absolute text-white font-semibold  bottom-2 left-2 bg-yellow text-white text-xs rounded-full px-[5px]">
                        3
                    </span>
                </div>

                <div className="flex items-center space-x-0">
                    <span className="text-[#6C6C6C] font-semibold text-[14px]">ENG</span>
                    <img src="/assets/icons/arrow-down-dash.svg" alt="arrow" className="w-auto h-2" />
                </div>

                <div className="flex items-center space-x-3">
                    <img
                        src="/assets/images/profile.svg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                        <span className="text-[14px] text-[6C6C6C] font-semibold">Adel Williams</span>
                        <span className="text-[12px] font-semibold text-[#A5A5A5]">Good morning!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalNavbar;
