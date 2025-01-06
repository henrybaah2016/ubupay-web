import React from "react";
import { useRouter } from "next/navigation";

const HorizontalNavbar = () => {
    const router = useRouter();

    const handleCreateTransactionClick = () => {
        router.push("/dashboard/screens/create-transaction");
    };
    const handleProfileSettings = () => {
        router.push("/dashboard/screens/profile");
    };

    return (
        <div className="flex flex-row items-center md:flex-row xl:justify-between lg:justify-between md:justify-between justify-between w-full p-4 xl:px-[50px] md:space-y-0">
            <button
                    onClick={handleCreateTransactionClick}
                    className="flex items-center btn btn-normal-sm font-medium xl:font-semibold md:font-semibold lg:font-semibold text-[12px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-white transition duration-300"
                >
                    Send
                </button>
            <div className="flex items-center justify-center md:justify-end space-x-4 w-full md:w-auto">
                

                <div className="relative">
                    <img
                        src="/assets/icons/notification.png"
                        alt="Notification"
                        className="w-auto h-4 xl:w-auto xl:h-5 lg:w-auto lg:h-5 md:w-auto md:h-5"
                    />
                    <span className="absolute text-white font-semibold bottom-2 left-2 bg-yellow text-xs rounded-full px-[3px] xl:px-[5px] lg:px-[5px] md:px-[5px]">
                        3
                    </span>
                </div>

                <div className="flex items-center space-x-1 xl:space-x-2 lg:space-x-2 md:space-x-2">
                    <span className="text-[#6C6C6C] font-semibold text-[12px]">ENG</span>
                    <img
                        src="/assets/icons/arrow-down-dash.svg"
                        alt="Arrow"
                        className="w-auto h-[6px] xl:w-auto xl:h-2 lg:w-auto lg:h-2 md:w-auto md:h-2" 
                    />
                </div>
                <div
                    onClick={handleProfileSettings}
                    className="flex items-center space-x-3 cursor-pointer"
                >
                    <img
                        src="/assets/images/profile.svg"
                        alt="Profile"
                        className="w-7 h-7 xl:w-10 xl:h-10 lg:w-10 lg:h-10 md:w-10 md:h-10 rounded-full"
                    />
                    <div className="hidden md:flex flex-col">
                        <span className="text-[14px] text-[#6C6C6C] font-semibold">
                            Adel Williams
                        </span>
                        <span className="text-[12px] font-semibold text-[#A5A5A5]">
                            Good morning!
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalNavbar;
