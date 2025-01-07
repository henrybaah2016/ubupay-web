"use client";
import React, { useState } from "react";

const AddBank = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleChecked = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="mx-[0px] xl:mx-[120px] lg:mx-[120px] md:mx-[120px]">
            <span className="text-[16px] font-semibold text-dark">Add Bank Account</span>
            <div className="p-6 rounded-[16px] px-[10px] xl:px-[80px] lg:px-[80px] md:px-[80px] mt-2 xl:mt-6 lg:mt-6 md:mt-6 py-[40px] bg-[#F9F9F9]">
                <span className="text-sm font-semibold text-dark">Provide your bank information</span>

                <div className="flex items-center space-x-4 mt-2 xl:mt-4 lg:mt-4 md:mt-4 justify-between rounded-[16px]">
                    <div className="space-y-8 w-full mt-[30px]">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Bank Name"
                                className="w-full px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                            />
                        </div>
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
                                placeholder="Account Number"
                                className="w-full px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                            />
                        </div>

                        <div className="flex items-center space-x-3 ml-2">
                            <div
                                className={`w-4 h-4 xl:w-5 xl:h-5 lg:w-5 lg:h-5 md:w-5 md:h-5 rounded-full flex items-center justify-center cursor-pointer ${isChecked ? "bg-yellow" : " border-[2px] border-yellow "
                                    }`}
                                onClick={toggleChecked}
                            >
                                {isChecked && (
                                    <img
                                        src="/assets/icons/checked.png"
                                        alt="Checked"
                                        className="w-4 h-4 xl:h-5 xl:w-5 lg:w-5 lg:h-5 md:w-5 md:h-5"
                                    />
                                )}
                            </div>
                            <span className="text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] font-semibold text-[#6c6c6c]">
                                Set as default source account
                            </span>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary h-[55px] text-white py-3 mt-[100px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddBank;
