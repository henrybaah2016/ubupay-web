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
      className={`bg-primary xl:px-4 lg:px-4 md:px-4 px-0 text-white h-screen ${
        isExpanded ? "w-60" : "w-16"
      } flex flex-col items-center transition-all duration-300`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 mb-6 p-2 bg-white rounded-full shadow-md"
      >
        <img
          src={isExpanded ? "/assets/icons/close.png" : "/assets/icons/menu.png"}
          alt="Toggle Sidebar"
          className="w-6 h-6"
        />
      </button>

      <div className={`mb-8 justify-left px-4 ${!isExpanded && "hidden"}`}>
        <img
          src="/assets/images/logo-white.png"
          alt="UbuPay"
          onClick={() => router.push("/")}
          className="w-auto h-[60px] cursor-pointer"
        />
      </div>

      <div className="w-full flex flex-col items-center">
        {navItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleNavClick(index, item.path)}
            className={`flex items-center space-x-3 py-5 my-2 rounded-full cursor-pointer w-full px-4 ${
              activeIndex === index
                ? "bg-white text-primary"
                : "hover:bg-[#2F5FB9]"
            }`}
          >
            <img
              src={activeIndex === index ? item.activeIcon : item.icon}
              alt={item.label}
              style={{ width: `${item.width}px`, height: `${item.height}px` }}
              className="flex-shrink-0"
            />
            {isExpanded && (
              <span
                className={`text-md ${
                  activeIndex === index
                    ? "text-[#91B4F5] font-semibold"
                    : "text-white font-semibold"
                }`}
              >
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <div
        className={`mt-auto flex items-center space-x-3 py-5 my-2 rounded-full hover:bg-[#2F5FB9] cursor-pointer w-full px-4 bg-transparent ${
          !isExpanded && "justify-center"
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
