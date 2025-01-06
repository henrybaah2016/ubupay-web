import React from "react";

const OverallTransferCard = () => {
    return (
        <div
            className="relative bg-primary mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 w-full sm:w-72 md:w-80 lg:w-96 xl:w-[400px] h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 rounded-lg px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 space-y-4 flex flex-col justify-center text-white bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/images/overall-bg.png')",
            }}
        >
            <div className="flex items-center space-x-2">
                <img
                    src="/assets/icons/total-wallet.png"
                    alt="Icon"
                    className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 h-auto"
                />
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                    Overall Transfer
                </span>
            </div>

            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                $40,000
            </div>
        </div>
    );
};

export default OverallTransferCard;
