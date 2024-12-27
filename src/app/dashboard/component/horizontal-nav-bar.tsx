import React from "react";

const HorizontalNavbar = () => {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center ml-[100px]">
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
                <div className="relative">
                    <img src="/assets/images/notification-icon.png" alt="Notification" className="w-6 h-6" />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                        3
                    </span>
                </div>

                <div className="flex items-center space-x-2">
                    <span className="text-gray-800">Menu</span>
                    <i className="fas fa-chevron-down"></i>
                </div>

                <div className="flex items-center space-x-3">
                    <img
                        src="/assets/images/profile-picture.png"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-800 font-semibold">Hello, John</span>
                        <span className="text-xs text-gray-600">Welcome Back</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalNavbar;
