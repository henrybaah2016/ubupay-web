"use client"
import React, { useState } from "react";
import Momo from "./component/Momo";
import Bank from "./component/bank";

const CreateTransaction = () => {
    const [isSourceChecked, setIsSourceChecked] = useState(false);
    const [selectedReceiverMethod, setSelectedReceiverMethod] = useState("bank");

    const handleSourceCheck = () => {
        setIsSourceChecked(!isSourceChecked);
    };

    const handleReceiverMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedReceiverMethod(event.target.value);
    };

    const handleSubmit = () => {
        console.log("Transaction submitted!");
    };

    return (
        <div className=" mx-[120px]" >
            <span className="text-[16px] font-semibold  text-dark">Transfer to recipient</span>
            <div className="p-6 rounded-[16px] px-[80px] mt-6 py-[40px] bg-[#F9F9F9]">
                <span className="text-sm font-semibold  text-dark">SOURCE ACCOUNT</span>

                <div className="flex items-center space-x-4 mb-6 p-6  mt-4 justify-between rounded-[16px] px-[30px] bg-[#ffffff]">

                    <div className="flex space-x-4">
                        <div
                            className="w-12 h-12 flex items-center justify-center rounded-[6px] bg-[#ECECEC]">
                            <img src="/assets/images/visa.png" alt="Source Account" className="w-auto h-4 p-[2px]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[16px] text-[#6C6C6C] font-semibold">Cash Transfer</span>
                            <span className="text-[14px] font-semibold text-[#A5A5A5]">3043 **** **** 7859</span>
                        </div>
                    </div>

                    <div className="ml-auto">
                        <img src="/assets/icons/checked.png" alt="Checked" className="w-auto h-4" />
                    </div>
                </div>

                <div className="text-right mb-6">
                    <span className="text-sm text-primary font-semibold cursor-pointer">Change Method?</span>
                </div>

                <span className="text-sm font-semibold   text-dark">RECIEVER ACCOUNT</span>

                <div className="mb-6 mt-4">
                    <div className="flex space-x-36">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                value="bank"
                                checked={selectedReceiverMethod === "bank"}
                                onChange={handleReceiverMethodChange}
                                className="form-radio"
                            />
                            <span className="font-semibold text-[14px] text-[#A5A5A5]">Bank Account</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                value="mobileMoney"
                                checked={selectedReceiverMethod === "mobileMoney"}
                                onChange={handleReceiverMethodChange}
                                className="form-radio "
                            />
                            <span className="font-semibold text-[14px] text-[#A5A5A5]">Mobile Money</span>
                        </label>
                    </div>

                    {selectedReceiverMethod === "bank" && (
                        <Bank/>
                    )}

                    {selectedReceiverMethod === "mobileMoney" && (
                        <Momo />
                    )}
                </div>

                
          

            <button
                type="submit"
                className="w-full bg-primary  h-[55px] text-white py-3 mt-[30px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
            >
                Next
            </button>
            </div>
        </div>

    );
};

export default CreateTransaction;
