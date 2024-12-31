"use client"
import React, { useState } from "react";
import SenderAmountRate from "../component/sender-amount-rate";
import ReceiverAmountRate from "../component/receiver-amount-rate";
import { useRouter } from "next/navigation";

const AmountAndRate = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        router.push("/dashboard/screens/create-transaction/summary");
    };


    return (
        <form onClick={handleSubmit}>
             <div className=" mx-[120px]" >
            <span className="text-[16px] font-semibold  text-dark">Amount & Rates</span>
            <div className="p-6 rounded-[16px] px-[80px] mt-6 py-[40px] bg-[#F9F9F9]">
                <span className="text-sm font-semibold  text-dark">Enter Amount</span>
                <div className="flex flex-col space-y-8">
                    <SenderAmountRate />
                    <ReceiverAmountRate />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary  h-[55px] text-white py-3 mt-[70px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
                >
                    Next
                </button>
            </div>
        </div>
        </form>
    );
};

export default AmountAndRate;

