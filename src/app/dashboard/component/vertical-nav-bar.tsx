import { useRouter } from "next/navigation";
import React, { useState } from "react";

const VerticalNavbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();

    const navItems = [
        {
            icon: "/assets/icons/home-white.png",
            activeIcon: "/assets/icons/home-blue.png",
            label: "Dashboard",
            width: 18,
            height: 18,
            path: "/dashboard",
        },
        {
            icon: "/assets/icons/transaction-white.png",
            activeIcon: "/assets/icons/transaction-blue.png",
            label: "Transaction",
            width: 24,
            height: 18,
            path: "/dashboard/screens/transaction",
        },
        {
            icon: "/assets/icons/card-white.png",
            activeIcon: "/assets/icons/card-blue.png",
            label: "Payment & Card",
            width: 22,
            height: 18,
            path: "/dashboard/screens/payment-card",
        },
    ];

    const handleNavClick = (index: number, path: string) => {
        setActiveIndex(index);
        router.push(path);
    };

    return (
        <div
            className={`bg-primary xl:px-0 lg:px-0 md:px-0 px-4 text-white h-full ${isExpanded ? "w-60" : "w-[82px]"
                } flex flex-col items-center transition-all duration-300`}
        >
            <div
                className={`flex items-center justify-between w-full px-0 xl:px-4 lg:px-4 md:px-4 mt-4 ${!isExpanded ? "justify-center" : ""
                    }`}
            >
                {isExpanded && (
                    <img
                        src="/assets/images/logo-white.png"
                        alt="UbuPay"
                        onClick={() => router.push("/")}
                        className="w-auto h-[50px] cursor-pointer"
                    />
                )}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`p-2 ${!isExpanded ? "mx-auto" : ""}`}
                >
                    <img
                        src={
                            isExpanded
                                ? "/assets/icons/close-white.svg"
                                : "/assets/icons/menu-white.svg"
                        }
                        alt=""
                        className="w-auto h-4"
                    />
                </button>
            </div>

            <div className="w-full flex flex-col px-0 xl:px-4 lg:px-4 md:px-4 items-center mt-6">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleNavClick(index, item.path)}
                        className={`flex items-center  py-4  my-2 cursor-pointer w-full transition-all duration-300
            ${activeIndex === index
                                ? "bg-white text-primary  rounded-full "
                                : "hover:bg-primary  rounded-full text-white"
                            }
            ${isExpanded ? "px-4" : "justify-center"}`}
                    >
                        <div
                            className={`flex items-center justify-center
                ${activeIndex === index ? "rounded-full" : "w-[40px] h-[40px] rounded-full"}
            `}
                        >
                            <img
                                src={activeIndex === index ? item.activeIcon : item.icon}
                                alt={item.label}
                                style={{ width: `${item.width}px`, height: `${item.height}px` }}
                                className="flex-shrink-0"
                            />
                        </div>
                        {isExpanded && (
                            <span
                                className={`ml-3 text-md font-semibold ${activeIndex === index
                                    ? "text-[#91B4F5]"
                                    : "text-white"
                                    }`}
                            >
                                {item.label}
                            </span>
                        )}
                    </div>
                ))}

            </div>


            <div
                className={`mt-auto flex items-center space-x-3 py-5 my-2 rounded-full hover:bg-[#2F5FB9] cursor-pointer w-full px-0 md:px-0 lg:px-0 xl:px-0 bg-transparent ${!isExpanded && "justify-center"
                    }`}
                onClick={() => router.push("/")}
            >
                <img
                    src="/assets/icons/logout.png"
                    alt="Logout"
                    className="flex-shrink-0 w-auto h-[16px]"
                />
                {isExpanded && (
                    <span className="text-md text-white font-semibold">Logout</span>
                )}
            </div>
        </div>
    );
};

export default VerticalNavbar;
