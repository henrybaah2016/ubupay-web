"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ForgotPassword = () => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        router.push("/account/reset-password"); 
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
                <h1 className="text-[25px] font-bold text-[#34342A] mt-[30px]">Forgot password</h1>
                <p className="text-[#6C6C6C] font-semibold text-[14px] mb-8 mt-4">
                    Enter the email you created the account with, a reset password link will be sent to the email.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary  h-[55px] text-white py-3 mt-[30px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
                    >
                        Submit
                    </button>
                </form>
                <div className="flex items-center justify-center my-8">
                    <div className="mx-4 text-center text-[#6c6c6c] font-semibold text-[16px]">
                        Already have an account?{" "}
                        <span
                            className="text-yellow cursor-pointer"
                            onClick={() => router.push("/account/signup")}
                        >
                            Sign in
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
