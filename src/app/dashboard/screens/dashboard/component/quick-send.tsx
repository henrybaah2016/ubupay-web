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
        <div className="flex flex-col mx-[30px] my-[30px]">
              <div className="flex justify-between">
                    <h4 className="text-lg text-[#34342A] font-semibold">Quick Send</h4>
                    <h6 className="text-sm text-[#A5A5A5] font-semibold">View All</h6>
                </div>
            <div className="flex justify-left space-x-10 mx-[0px] my-[20px]">

              
                {senders.map((sender, index) => (
                    <div
                        key={index}
                        className={`flex items-center w-[250px] space-x-4 px-4 py-6 rounded-[16px] text-white ${sender.color}`}
                    >
                        <img
                            src={sender.image}
                            alt={sender.name}
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="text-lg text-[#6C6C6C] font-semibold">{sender.name}</span>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default QuickSend;
