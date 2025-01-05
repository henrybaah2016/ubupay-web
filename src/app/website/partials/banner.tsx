import ReceiverAmountRate from "@/app/dashboard/screens/create-transaction/component/receiver-amount-rate";
import SenderAmountRate from "@/app/dashboard/screens/create-transaction/component/sender-amount-rate";
import React from "react";

const Banner = () => {
    return (

        <div className="flex flex-col items-center lg:mt-0 mt-[480px] px-[20px] xl:px-[20px] lg:px-[0px] xl:px-[40px]  md:mt-[350px] lg:mt-[20px] xl:mt-[20px] md:flex-col lg:flex-col xl:flex-col justify-center md:justify-center lg:justify-center xl:justify-center w-full xl:w-full lg:w-full h-[650px] xl:h-[600px] lg:h-[500px]">
            <div
                id="solution"
                className="h-full flex items-center lg:px-[0px] w-full pt-12 lg:pt-[100px]  lg:mb-[120px] xl:pt-[150px] md:pt-14"
            >
                <div className="flex items-center lg:flex-row flex-col-reverse xl:space-x-[50px] lg:px-24 xl:px-14 md:px-14 px-0 h-full">
                    <div className="px-6 md:px-0 lg:px-0 xl:pt-[60px] xl:px-0 lg:w-full xl:w-full h-full flex flex-col lg:justify-center">
                        <h1 className="text-[#34342A] pt-[50px] leading-tight lg:leading-[43px] xl:leading-[73px] xl:pb-[30px] md:pb-[30px] lg:pb-4 pb-[30px] pt-0 lg:pt-[130px] xl:pt-[30px] md:pt-[100px] lg:text-[40px] xl:text-[60px] font-bold text-3xl">
                            Cross-border payment made easy
                        </h1>
                        <p className="pt-2 text-[#636464] text-[18px] leading-snug font-semibold md:text-[22px] xl:text-[20px] lg:text-[22px]">
                            Seamless, secure, and efficient money transfers from Canada<br /> to other African countries.
                        </p>

                        <div className="pt-[0px] lg:pt-[0px] z-10 relative w-full">
                            <div className="flex  flex-col   xl:flex-row lg:flex-row md:flex-row mt-12 mb:mt-12 lg:mt-8 xl:mt-12 mx-0 lg:mx-4 xl:mx-2 md:mx-0 pb-10  xl:items-left xl:items-center lg:items-center md:items-center">
                                <div
                                    className="flex items-center w-[190px] md:w-auto lg:w-auto xl:w-auto mb-4 xl:mb-0 lg:mb-0 md:mb-0  btn cursor-pointer btn-playstore  transition ease-out duration-500 ">
                                    <img src="../../assets/images/playstore.png" className="w-7 lg:w-6 xl:w-10 md:w-10" />
                                    <div className="ml-2 md:ml-2 xl:ml-2 lg:ml-2">
                                        <h6 className="text-white font-semibold text-[14px] lg:text-xs xl:text-xs md:text-xs">GET IT ON</h6>
                                        <p className="text-white font-semibold text-[16px] lg:text-lg xl:text-lg md:text-lg">Google Play</p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center  w-[190px] md:w-auto lg:w-auto xl:w-auto  cursor-pointer w-auto btn ml-2 btn-appstore transition ease-out duration-500 ">
                                    <img src="../../assets/images/appstore.png" className="w-7 lg:w-6 xl:w-8 md:w-8" />
                                    <div className="ml-2 md:ml-2 xl:2 lg:2">
                                        <h6 className="text-white font-semibold text-[14px] lg:text-xs xl:text-xs md:text-xs">Download on the </h6>
                                        <p className="text-white font-semibold text-[16px] lg:text-lg xl:text-lg md:text-lg">App Store</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6  mt-[12px]  lg:mt-[95px]  xl:mb-[0px] md:pt-0 flex  flex-col w-full lg:w-full md:w-[80%] xl:w-full justify-center ml-0 lg:ml-20 md:ml-0 xl:ml-20">
                        <form>
                            <div className=" mx-[0px] xl:mx-[30px] lg:mx-[0px] md:mx-[0px]" >
                                <div className="p-6 rounded-[16px] px-[10px] lg:px-[30px] mt-6 py-[40px] border-[1px] border-primary bg-[#F9F9F9]">
                                    <span className="text-[16px] font-semibold items-center w-full  text-dark">Make a transfer to Africa </span>

                                    <div className="flex flex-col space-y-8">
                                        <SenderAmountRate />
                                        <ReceiverAmountRate />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-primary  h-[55px] text-white py-3 mt-[70px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Banner;
