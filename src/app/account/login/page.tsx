"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
                <h1 className="text-[25px] font-bold text-[#34342A] mt-[150px]">Sign in</h1>
                <p className="text-[#6C6C6C] font-semibold text-[14px] mb-8">
                    Welcome back! Send money to Africa again with UbuPay
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email Address "
                            className="w-full px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                        />
                    </div>

                    <div className="text-right mb-4">
                        <button
                            type="button"
                            className="text-yellow  font-semibold text-[14px]"
                            onClick={() => router.push("/account/forgot-password")}
                        >
                            Forgot Password?
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary  h-[55px] text-white py-3 mt-[30px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
                    >
                        Sign in
                    </button>
                </form>

                <div className="flex items-center my-8">
                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                    <div className="mx-4 text-center text-[#6c6c6c] font-semibold text-[16px]">
                        Or sign in with
                    </div>
                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                </div>

                <div className="flex flex-col space-y-4">
                    <button className="flex items-center justify-center text-[16px] border-[#9F9F9F] h-[60px] border-[1px] w-full bg-[#D9D9D9] text-[#34342A] py-3 rounded-lg font-semibold">
                        <img
                            src="/assets/images/gmail.png"
                            alt="Google"
                            className="w-5 h-5 mr-2"
                        />
                        Sign in with Google
                    </button>
                    <button className="flex items-center justify-center text-[16px] border-[#9F9F9F] h-[60px] border-[1px] w-full bg-[#D9D9D9] text-[#34342A] py-3 rounded-lg font-semibold">
                        <img
                            src="/assets/images/linkedin.png"
                            alt="Linkedin"
                            className="w-5 h-5 mr-2"
                        />
                        Sign in with Linkedin
                    </button>
                </div>

                <div className="flex items-center justify-center my-8">
                    <div className="mx-4 text-center text-[#6c6c6c] font-semibold text-[16px]">
                        Don't have an account?{" "}
                        <span
                            className="text-yellow cursor-pointer"
                            onClick={() => router.push("/signup")}
                        >
                            Sign up
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
