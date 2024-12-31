

"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProfileSettings = () => {
    const router = useRouter();

    const handleProfilUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard/screens/profile/update-profile");
    }


    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard/screens/payment-card");
    }




    return (
        <div className="flex flex-col   mx-[120px]">
            <div className="flex justify-between  mb-6">
                <h2 className="text-[18px] font-bold text-[#636464]">Profile Settings</h2>

            </div>

            <div className="flex flex-col bg-[#F9F9F9] px-[60px] py-[60px] rounded-lg p-4">
                <div className="bg-[#ffffff] px-[30px] py-[30px] rounded-lg p-4 ">

                    <div className="flex flex-col space-y-6">
                        <div className="flex flex-col items-center space-y-4 p-6">
                            <div
                                className="relative w-24 h-24 bg-profile-img bg-center bg-cover rounded-full flex items-center justify-center"
                            >
                                <img
                                    src="/assets/images/camera-white.png"
                                    alt="Edit"
                                    className="w-auto h-6"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-800">Adel Williams</h3>
                                <p className="text-sm text-gray-500 font-semibold">adelwilliams@gmail.com</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="flex justify-between py-2 bg-[#ffffff] px-[40px] rounded-lg py-[40px] mt-[50px]">
                    <span className="text-[14px] font-semibold  text-[#A5A5A5]">Total Transaction</span>
                    <span className="text-[16px] font-semibold  text-dark">20004.5 CAD</span>
                </div>

                <div className="flex justify-between py-2 bg-[#ffffff] px-[40px] rounded-lg py-[40px] mt-[50px]">
                    <div className="flex flex-col space-y-2 w-full">
                        <div
                            onClick={handleProfilUpdate}
                            className="flex items-center w-full p-6 justify-between rounded-[16px] px-[30px] cursor-pointer">
                            <div className="flex space-x-4 items-center" >
                                <div className="w-12 h-12 flex items-center justify-center rounded-[6px] bg-[#ECECEC]">
                                    <img src="/assets/icons/personal-info.png" alt="Bank Account" className="w-auto h-6 p-[2px]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[16px] text-[#6C6C6C] font-semibold">Personal Info</span>
                                </div>
                            </div>

                            <img src="/assets/icons/arrow-forward.png" alt="Checked" className="w-auto h-3" />

                        </div>

                        <div
                            onClick={handlePayment}
                            className="flex items-center w-full p-6 justify-between rounded-[16px] px-[30px] cursor-pointer">
                            <div className="flex space-x-4 items-center" >
                                <div className="w-12 h-12 flex items-center justify-center rounded-[6px] bg-[#ECECEC]">
                                    <img src="/assets/icons/card.png" alt="Bank Account" className="w-auto h-6 p-[2px]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[16px] text-[#6C6C6C] font-semibold">Bank & Cards</span>
                                </div>
                            </div>

                            <img src="/assets/icons/arrow-forward.png" alt="Checked" className="w-auto h-3" />

                        </div>

                        <div
                            className="flex items-center w-full p-6 justify-between rounded-[16px] px-[30px] cursor-pointer">
                            <div className="flex space-x-4 items-center" >
                                <div className="w-12 h-12 flex items-center justify-center rounded-[6px] bg-[#ECECEC]">
                                    <img src="/assets/icons/privacy.png" alt="Bank Account" className="w-auto h-6 p-[2px]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[16px] text-[#6C6C6C] font-semibold">Data Privacy</span>
                                </div>
                            </div>

                            <img src="/assets/icons/arrow-forward.png" alt="Checked" className="w-auto h-3" />

                        </div>


                    </div>
                </div>
            </div>


        </div>


    );
};

export default ProfileSettings;
