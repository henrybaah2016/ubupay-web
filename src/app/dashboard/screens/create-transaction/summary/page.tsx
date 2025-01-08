"use client"
import React, { useState } from "react";
import SenderAmountRate from "../component/sender-amount-rate";
import ReceiverAmountRate from "../component/receiver-amount-rate";

const Summary = () => {


    return (
        <div className="mx-[0px] xl:mx-[120px] lg:mx-[120px] md:mx-[120px]" >
            <span className="text-[16px] font-semibold  text-dark">Transaction Summary</span>
            <div className="p-6 rounded-[16px] px-[0px] mt-0 py-[40px]">

                <div className="flex  flex-col px-[0px] xl:px-[30px] lg:px-[30px] md:px-[30px] py-[15px] xl:py-[30px] lg:py-[30px] md:py-[30px] bg-[#F9F9F9] ">
                    <div className="flex justify-between py-2 px-8">
                        <span className="text-[14px] font-semibold  text-[#A5A5A5]">Beneficiary</span>
                        <span className="text-[14px] font-semibold  text-dark">Jame Canor</span>
                    </div>
                    <div className="flex justify-between py-2 px-8">
                        <span className="text-[14px] font-semibold  text-[#A5A5A5]">Account No.</span>
                        <span className="text-[14px] font-semibold  text-dark">9878********888</span>
                    </div>
                    <div className="flex justify-between py-2 px-8">
                        <span className="text-[14px] font-semibold  text-[#A5A5A5]">Country</span>
                        <span className="text-[14px] font-semibold  text-dark">Ivory Coast</span>
                    </div>
                    <div className="flex items-center py-2 px-8 space-x-1 ml-auto">
                        <span className="text-[14px] font-semibold text-[#A5A5A5]">Edit</span>
                        <img src="/assets/icons/read.png" alt="Checked" className="w-auto h-3" />
                    </div>

                    <div className="flex justify-between py-2 px-8">
                        <span className="text-[14px] font-semibold  text-[#A5A5A5]">Amount Transfer</span>
                        <span className="text-[14px] font-semibold  text-dark">20000 C$</span>
                    </div>
                    <div className="flex justify-between py-2 px-8">
                        <span className="text-[14px] font-semibold  text-[#A5A5A5]">Beneficiary Amount</span>
                        <span className="text-[14px] font-semibold  text-dark">8519000.00 XOF</span>
                    </div>
                    <div className="flex justify-between py-2 px-8">
                        <span className="text-[14px] font-semibold  text-[#A5A5A5]">Rate</span>
                        <span className="text-[14px] font-semibold  text-dark">441.16 XOF</span>
                    </div>
                    <div className="flex justify-between py-2 px-8">
                        <span className="text-[14px] font-semibold  text-[#A5A5A5]">Commission</span>
                        <span className="text-[14px] font-semibold  text-dark">2CAD</span>
                    </div>
                    <div className="flex justify-between py-2 px-8">
                        <span className="text-[14px] font-semibold  text-[#A5A5A5]">Charges</span>
                        <span className="text-[14px] font-semibold  text-dark">1CAD</span>
                    </div>
                    <div className="flex justify-between py-2 px-8">
                        <span className="text-[14px] font-semibold  text-[#A5A5A5]">Taxes</span>
                        <span className="text-[14px] font-semibold  text-dark">1.5CAD</span>
                    </div>
                    <div className="flex justify-between py-2 px-8">
                        <span className="text-[14px] font-semibold  text-[#A5A5A5]">Total Charges</span>
                        <span className="text-[14px] font-semibold  text-dark">4.5CAD</span>
                    </div>

                </div>


                <div className="flex  flex-col px-[30px] mt-[30px] py-[20px] bg-[#F9F9F9] ">
                    <div className="flex justify-between py-2 px-8">
                        <span className="text-[14px] font-semibold  text-[#A5A5A5]">Total Transfer</span>
                        <span className="text-[14px] font-semibold  text-dark">20004.5 CAD</span>
                    </div>
                 
                    <button
                        type="submit"
                        className="w-full bg-primary  h-[55px]  text-white py-3 mt-[70px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
                    >
                        Confirm
                    </button>

                </div>
            </div>
        </div>

    );
};

export default Summary;

