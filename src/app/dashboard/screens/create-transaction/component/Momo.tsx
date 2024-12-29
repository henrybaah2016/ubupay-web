import React from "react";

const Momo = () => {
    return (
        <div className="w-ullflex flex-col  justify-center  overflow-y-auto h-full">
       
        <div className="space-y-6 mt-[30px]">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Account Name"
                    className="w-full px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Transfer Description"
                    className="w-full px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                />
            </div>

        </div>



       
    </div>
    );
};

export default Momo;
