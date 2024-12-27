import React, { useState } from "react";

const VerticalNavbar = () => {
    const [activeIndex, setActiveIndex] = useState(0); 
    const navItems = [
        {
            icon: "/assets/icons/home-white.png",
            activeIcon: "/assets/icons/home-blue.png", 
            label: "Dashboard",
            width: 18,
            height: 18,
        },
        {
            icon: "/assets/icons/transaction-white.png",
            activeIcon: "/assets/icons/transaction-blue.png", 
            label: "Transaction",
            width: 24,
            height: 18,
        },
        {
            icon: "/assets/icons/card-white.png",
            activeIcon: "/assets/icons/card-blue.png", 
            label: "Card",
            width: 22,
            height: 18,
        },
    ];

    return (
        <div className="bg-primary text-white h-screen w-60 px-4 flex flex-col items-start py-0">
            <div className="mb-8 px-4">
                <img
                    src="/assets/images/logo-white.png"
                    alt="UbuPay"
                    className="w-auto h-[60px]"
                />
            </div>

            {navItems.map((item, index) => (
                <div
                    key={index}
                    onClick={() => setActiveIndex(index)} 
                    className={`flex items-center space-x-3 py-5 my-2 rounded-full cursor-pointer w-full px-4 ${activeIndex === index ? "bg-white text-primary" : "hover:bg-transparent"}`}
                >
                    <img
                        src={activeIndex === index ? item.activeIcon : item.icon}
                        alt={item.label}
                        style={{ width: `${item.width}px`, height: `${item.height}px` }}
                        className="flex-shrink-0"
                    />
                    <span
                        className={`text-md ${
                            activeIndex === index ? "text-primary font-semibold text-[#91B4F5]" : "text-white font-semibold"
                        }`}
                    >
                        {item.label}
                    </span>
                </div>
            ))}

            <div className="mt-auto flex items-center space-x-3 py-5 my-2 rounded-full hover:bg-[#2F5FB9] cursor-pointer w-full px-4 bg-transparent">
                <img
                    src="/assets/icons/logout.png" 
                    alt="Logout"
                    style={{ width: '18px', height: '18px' }}
                    className="flex-shrink-0"
                />
                <span className="text-md text-white font-semibold">Logout</span>
            </div>
        </div>
    );
};

export default VerticalNavbar;
