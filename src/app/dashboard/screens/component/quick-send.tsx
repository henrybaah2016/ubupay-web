import React from "react";

const QuickSend = () => {
    const senders = [
        {
            image: "/assets/images/face-1.png",
            name: "John Cole",
            color: "bg-[#F0F0F0]",
        },
        {
            image: "/assets/images/face-2.png",
            name: "Sarah Brown",
            color: "bg-[#F0F0F0]",
        },
        {
            image: "/assets/images/face-3.png",
            name: "Mike Davis",
            color: "bg-[#F0F0F0]",
        },
    ];

    return (
        <div className="flex flex-col mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12">
            <div className="flex justify-between items-center">
                <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#34342A] font-semibold">
                    Quick Send
                </h4>
                <h6 className="text-xs sm:text-sm md:text-base lg:text-lg text-[#A5A5A5] font-semibold cursor-pointer">
                    View All
                </h6>
            </div>

            
            <div className="flex flex-wrap justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-4 sm:mt-6 md:mt-8">
                {senders.map((sender, index) => (
                    <div
                        key={index}
                        className={`flex items-center w-full sm:w-[200px] md:w-[220px] lg:w-[250px] px-4 py-4 sm:py-6 rounded-lg text-white ${sender.color}`}
                    >
                        <img
                            src={sender.image}
                            alt={sender.name}
                            className="w-8 sm:w-10 md:w-12 lg:w-14 h-8 sm:h-10 md:h-12 lg:h-14 rounded-full"
                        />
                        <span className="ml-4 text-sm sm:text-base md:text-lg text-[#6C6C6C] font-semibold">
                            {sender.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuickSend;
