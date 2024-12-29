"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Back from "../../component/back";
import Front from "../../component/front";

const BasicInformation = () => {
    const router = useRouter();

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedIdentity, setSelectedIdentity] = useState({
        identity_type: "Identity Type",
    });

    const identities = [
        { identity_type: "National ID" },
        { identity_type: "Driver's License" },


    ];

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const selectIdentity = (identity_type: React.SetStateAction<{ identity_type: string; }>) => {
        setSelectedIdentity(identity_type);
        setDropdownVisible(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard");
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
                <h1 className="text-[25px] font-bold text-[#34342A] mt-[120px]">Identity</h1>
                <p className="text-[#6C6C6C] font-semibold text-[14px] mb-8 mt-[20px]">
                    Please upload both sides of the identity card,  your ID should be valid and text should be readable and current else it will be rejected                </p>

                <form onClick={handleSubmit} >

                    <div className="mb-4 relative">
                        <div className="flex w-full items-center bg-[#ECECEC] rounded-lg overflow-hidden">
                            <div
                                className="flex w-full  justify-between items-center px-4 py-3 h-[55px] focus:outline-none cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <div className="flex items-center">

                                    <span className="text-[#6c6c6c] font-semibold text-[14px]">{selectedIdentity.identity_type}</span>

                                </div>
                                <img
                                    src="/assets/icons/arrow-down.svg"
                                    alt="arrow-down"
                                    className="w-auto h-2 ml-2"
                                />
                            </div>
                        </div>

                        {dropdownVisible && (
                            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-10">
                                {identities.map((identity) => (
                                    <div
                                        key={identity.identity_type}
                                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => selectIdentity(identity)}
                                    >

                                        <span className="text-[#6c6c6c] font-semibold text-[14px]">{identity.identity_type}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>



                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Identification Number"
                            className="w-full px-4 py-3 h-[55px] text-[#6c6c6c] placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px] bg-[#ECECEC] rounded-lg focus:outline-none"
                        />

                    </div>
                    <p className="text-[#6C6C6C] font-semibold text-[14px] mb-8 mt-[20px]">
                        Your ID Photo
                    </p>

                    <div className="mb-4 flex justify-between">
                        <Front />
                        <Back />

                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary  h-[55px] mb-8 text-white py-3 mt-[30px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
                    >
                        Submit
                    </button>
                </form>


            </div>
        </div>
    );
};

export default BasicInformation;
