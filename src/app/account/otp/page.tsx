"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const OTP = () => {
    const router = useRouter();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]); 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);
        
        if (e.target.value && index < 5) {
            const nextInput = document.getElementById(`otp-input-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const otpCode = otp.join(""); 
        console.log("OTP Code:", otpCode); 

        router.push("/account/kyc/basic-information");
    };

    return (
        <div className="flex h-screen bg-[#FFFFFF] px-0 md:px-0 xl:px-0 lg:px-0 xl:flex-row lg:flex-row md:flex-col flex-col">
        <div className="w-full xl:w-[40%] lg:w-[40%] md:w-full bg-account-bg-3 xl:rounded-[20px] lg:rounded-[20px] md:rounded-[0px] rounded-[0px] xl:mx-10 lg:mx-10 md:mx-0 mx-0  xl:my-4 xl:py-0 lg:py-0 py-8 md:py-8 bg-cover flex flex-col justify-between p-4">
            <div
                onClick={() => router.push("/")}
                className="flex items-center cursor-pointer mt-[20px] ml-[20px] space-x-2">
                <img
                    src="/assets/icons/arrow-back.png"
                    alt="Icon"
                    className="w-auto h-3"
                />
                <span className="text-white text-sm font-semibold">
                    Back to Website
                </span>
            </div>
        </div>


        <div className="w-full xl:w-[60%] lg:w-[60%] md:w-full flex flex-col justify-center px-4 xl:px-0 lg:px-0 md:px-[60px] pt-[0px] xl:pt-[0px] lg:pt-[0px] md:pt-[0px] xl:pr-[150px] xl:pl-[50px] overflow-y-auto h-full">
            <h1 className="text-[25px] font-bold text-[#34342A] mt-[30px]">Enter OTP</h1>
                <p className="text-[#6C6C6C] font-semibold text-[14px] mb-8 mt-4">
                    Enter the 6-digit OTP sent to your email  <span className="text-yellow"

                        > hello@gmail.com</span>
                </p>

                <form onClick={handleSubmit}>
                    <div className="flex space-x-2 mb-4">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                id={`otp-input-${index}`}
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                className="w-[40px] h-[40px] md:w-[70px] md:h-[65px] xl:w-[70px] xl:h-[65px] lg:w-[70px] lg:h-[65px] text-center text-[#6c6c6c] font-semibold text-[26px] bg-[#ECECEC] rounded-lg focus:outline-none"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        
                        className="w-full bg-primary h-[55px] text-white py-3 mt-[90px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OTP;
