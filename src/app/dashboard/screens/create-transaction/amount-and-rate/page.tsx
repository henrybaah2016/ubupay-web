"use client"
import React, { useState } from "react";
import SenderAmountRate from "../component/sender-amount-rate";
import ReceiverAmountRate from "../component/receiver-amount-rate";

const AmountAndRate = () => {


    return (
        <div className=" mx-[120px]" >
            <span className="text-[16px] font-semibold  text-dark">Amount & Rates</span>
            <div className="p-6 rounded-[16px] px-[80px] mt-6 py-[40px] bg-[#F9F9F9]">
                <span className="text-sm font-semibold  text-dark">Enter Amount</span>

                <SenderAmountRate/>

                <ReceiverAmountRate/>
                
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

export default AmountAndRate;

