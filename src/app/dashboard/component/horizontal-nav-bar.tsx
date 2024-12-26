import React from "react";

const HorizontalNavbar = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-between p-4 shadow-md">
            {/* Search Bar */}
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="text-gray-600">
                    <i className="fas fa-search"></i>
                </button>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6">
                {/* Notification Icon */}
                <div className="relative">
                    <img src="/assets/images/notification-icon.png" alt="Notification" className="w-6 h-6" />
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                        3
                    </span>
                </div>

                {/* Dropdown */}
                <div className="flex items-center space-x-2">
                    <span className="text-gray-800">Menu</span>
                    <i className="fas fa-chevron-down"></i>
                </div>

                {/* Profile Section */}
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
