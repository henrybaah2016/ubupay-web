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

        router.push("/dashboard/screens/dashboard");
    };

    return (
        <div className="flex h-screen bg-[#FFFFFF]">
            <div
                className="w-[40%] bg-account-bg-3 rounded-[20px] xl:mx-10 xl:my-4 bg-cover flex flex-col justify-between p-4"
            >
                <div
                    onClick={() => router.push("/")}
                    className="flex items-center cursor-pointer mt-[20px] ml-[20px] space-x-2"
                >
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

            <div className="w-[60%] flex flex-col justify-center xl:pr-[150px] xl:pl-[50px] overflow-y-auto h-full">
                <h1 className="text-[25px] font-bold text-[#34342A] mt-[30px]">Enter OTP</h1>
                <p className="text-[#6C6C6C] font-semibold text-[14px] mb-8 mt-4">
                    Enter the 6-digit OTP sent to your email  <span className="text-yellow"

                        > hello@gmail.com</span>
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="flex space-x-6 mb-4">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                id={`otp-input-${index}`}
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                className="w-[70px] h-[65px] text-center text-[#6c6c6c] font-semibold text-[26px] bg-[#ECECEC] rounded-lg focus:outline-none"
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
