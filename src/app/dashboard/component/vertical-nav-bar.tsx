import React from "react";

const VerticalNavbar = () => {
    const navItems = [
        {
            icon: "/assets/icons/home-white.png",
            label: "Dashboard",
            width: 24,
            height: 24,
        },
        {
            icon: "/assets/icons/transaction-white.png",
            label: "Transaction",
            width: 28,
            height: 28,
        },
        {
            icon: "/assets/icons/card-white.png",
            label: "Card",
            width: 32,
            height: 32,
        },
    ];

    return (
        <div className="bg-primary text-white h-screen w-60 flex flex-col items-center py-4">
            {/* Logo at the top */}
            <div className="mb-8">
                <img
                    src="/assets/icons/logo.png"
                    alt="Logo"
                    className="w-16 h-16"
                />
            </div>

            {/* Navigation Items */}
            {navItems.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center w-full space-x-3 px-4 py-3 my-2 rounded-lg hover:bg-gray-700 cursor-pointer"
                >
                    <img
                        src={item.icon}
                        alt={item.label}
                        style={{ width: `${item.width}px`, height: `${item.height}px` }}
                        className="flex-shrink-0"
                    />
                    <span className="text-sm text-white">{item.label}</span>
                </div>
            ))}
        </div>
    );
};

export default VerticalNavbar;
