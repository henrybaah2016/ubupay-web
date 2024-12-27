import React from "react";

const OverallTransferCard = () => {
    return (
        <div
            className="relative bg-cover bg-center mx-[30px] w-80 h-[200px] rounded-lg px-[30px]  space-y-5 flex flex-col justify-center text-white"
            style={{
                backgroundImage: "url('/assets/images/overall-bg.png')", 
            }}
        >
            <div className="flex items-center space-x-2">
                <img
                    src="/assets/icons/total-wallet.png" 
                    alt="Icon"
                    className="w-auto h-5"
                />
                <span className="text-lg font-semibold">Overall Transfer</span>
            </div>

            <div className="text-[35px] font-bold">$40,000</div>
        </div>
    );
};

export default OverallTransferCard;
