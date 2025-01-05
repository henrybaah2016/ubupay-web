"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState({
        code: "+1",
        flag: "/assets/images/ca.png",
    });

    const countries = [
        { code: "+234", name: "Nigeria", flag: "/assets/images/ng.png" },
        { code: "+233", name: "Ghana", flag: "/assets/images/gh.png" },
        { code: "+257", name: "Burundi", flag: "/assets/images/bu.png" },
        { code: "+1", name: "Canada", flag: "/assets/images/ca.png" },


    ];

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const selectCountry = (country: React.SetStateAction<{ code: string; flag: string; }>) => {
        setSelectedCountry(country);
        setDropdownVisible(false);
    };

    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/account/otp");
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


            <div className="w-full xl:w-[60%] lg:w-[60%] md:w-full flex flex-col justify-center px-4 xl:px-0 lg:px-0 md:px-[60px] pt-[200px] xl:pt-[0px] lg:pt-[0px] md:pt-[200px] xl:pr-[150px] xl:pl-[50px] overflow-y-auto h-full">
                <h1 className="text-[25px] font-bold text-[#34342A]  mt-[150px]">Sign Up</h1>

                <h1 className="text-[20px] font-bold text-[#34342A] mb-1 mt-[16px]"> </h1>
                <p className="text-[#6C6C6C] font-semibold text-[14px] mb-8">
                    Create an account send money to Africa
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email Address "
                            className="w-full px-4 py-3 h-[55px] text-[#6c6c6c]  placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px]  bg-[#ECECEC] rounded-lg focus:outline-none"
                        />
                    </div>

                    <div className="mb-4 relative ">
                        <div className="flex items-center bg-[#ECECEC] rounded-lg overflow-hidden">
                            <div
                                className="flex items-center px-4 py-3 h-[55px]    focus:outline-none cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <img
                                    src={selectedCountry.flag}
                                    className="w-auto h-3 mr-2"
                                />
                                <span className=" text-[#6c6c6c]  font-semibold  text-[14px]">{selectedCountry.code}</span>
                                <img
                                    src="/assets/icons/arrow-down.svg"
                                    alt=""
                                    className="w-auto h-2 ml-2"
                                />
                            </div>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3  text-[#6c6c6c] bg-[#ECECEC]  border-0 focus:outline-none placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px]"
                            />
                        </div>

                        {dropdownVisible && (
                            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-10">
                                {countries.map((country) => (
                                    <div
                                        key={country.code}
                                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => selectCountry(country)}
                                    >
                                        <img
                                            src={country.flag}
                                            alt={country.name}
                                            className="w-auto h-3 mr-2"
                                        />
                                        <span className="text-[#6c6c6c]  font-semibold  text-[14px]">{country.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 h-[55px] text-[#6c6c6c]  placeholder-[#6c6c6c] font-semibold placeholder-[14px] text-[14px]  bg-[#ECECEC] rounded-lg focus:outline-none"
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="terms"
                            className="peer w-4 h-4 text-primary border-gray-300 rounded bg-gray-100 focus:ring-primary"
                        />
                        <label htmlFor="terms" className="ml-2 text-[#6c6c6c] font-semibold text-[14px]">
                            By creating an account, you agree to our{" "}
                            <span className="text-yellow cursor-pointer">Terms & Conditions</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary  h-[55px] text-white py-3 mt-[30px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
                    >
                        Sign up
                    </button>
                </form>

                <div className="flex items-center my-8">
                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                    <div className="mx-4 text-center text-[#6c6c6c] font-semibold text-[16px]">Or sign up with</div>
                    <div className="flex-1 h-[1px] bg-gray-300"></div>
                </div>

                <div className="flex flex-col space-y-4">
                    <button className="flex items-center justify-center text-[16px] border-[#9F9F9F] h-[60px] border-[1px] w-full bg-[#D9D9D9] text-[#34342A] py-3 rounded-lg font-semibold">
                        <img
                            src="/assets/images/gmail.png"
                            alt="Google"
                            className="w-5 h-5 mr-2"
                        />
                        Sign up with Google
                    </button>
                    <button className="flex items-center justify-center text-[16px] border-[#9F9F9F] h-[60px] border-[1px]  w-full bg-[#D9D9D9] text-[#34342A] py-3 rounded-lg font-semibold">
                        <img
                            src="/assets/images/linkedin.png"
                            alt="Linkedin"
                            className="w-5 h-5 mr-2"
                        />
                        Sign up with Linkedin
                    </button>
                </div>

                <div className="flex items-center justify-center my-8">
                    <div className="mx-4 text-center text-[#6c6c6c] font-semibold text-[16px]">Already have an account?
                        <span className="text-yellow cursor-pointer"
                            onClick={() => router.push("/account/login")}

                        > Sign in</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;
