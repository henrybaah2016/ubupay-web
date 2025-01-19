import ReceiverAmountRateBanner from "@/app/dashboard/screens/create-transaction/component/receiver-amount-rate-banner";
import SenderAmountRateBanner from "@/app/dashboard/screens/create-transaction/component/sender-amount-rate-banner";
import React from "react";

const Banner = () => {
    return (

        <div className="flex flex-col items-center lg:mt-0 mt-[0px] px-[20px] xl:px-[20px] lg:px-[20px] md:mt-[0px] lg:mt-[20px] xl:mt-[20px] md:flex-col lg:flex-col xl:flex-col justify-center md:justify-center lg:justify-center xl:justify-center w-full xl:w-full lg:w-full h-auto md:h-auto xl:h-[550px] lg:h-[500px]">
            <div
                id="solution"
                className="h-full  flex items-center lg:px-[0px] w-full pt-4 lg:pt-[100px]  lg:mb-[120px] xl:pt-[150px] md:pt-4"
            >
                <div className="flex  items-center lg:flex-row flex-col-reverse xl:space-x-[10px] lg:px-24 xl:px-14 md:px-14 px-0 h-full">
                    <div className="px-6 md:px-0 lg:px-0 xl:pt-[60px] xl:px-0 lg:w-full xl:w-full h-full flex flex-col lg:justify-center">
                        <h1 className="text-[#ffffff] pt-[110px] leading-tight lg:leading-[43px] xl:leading-[73px] xl:pb-[30px] md:pb-[30px] lg:pb-4 pb-[30px] pt-0 lg:pt-[130px] xl:pt-[30px] md:pt-[100px] lg:text-[40px] xl:text-[55px] font-semibold text-3xl">
                            Instant transfer to Africa on UbuPay
                        </h1>
                        <p className="pt-0 text-[#DCDCDC] text-[16px] leading-snug font-normal md:text-[18px] xl:text-[18px] lg:text-[18px]">
                            Seamless, secure, and efficient money transfers from Canada to other African countries.
                        </p>

                        <div className="pt-[0px] lg:pt-[0px] z-10 relative w-full">
                            <div className="flex  flex-col xl:space-x-4 lg:space-x-4  md:space-x-4   xl:flex-row lg:flex-row md:flex-row mt-12 mb:mt-12 lg:mt-8 xl:mt-12 mx-0 lg:mx-4 xl:mx-2 md:mx-0 pb-10  xl:items-left xl:items-center lg:items-center md:items-center">
                                <div
                                    className="flex items-center w-[190px] md:w-auto lg:w-auto xl:w-auto mb-4 xl:mb-0 lg:mb-0 md:mb-0  btn cursor-pointer btn-playstore-new  transition ease-out duration-500 ">
                                    <img src="../../assets/images/playstore.png" className="w-7 lg:w-6 xl:w-8 md:w-8" />
                                    <div className="ml-2 md:ml-2 xl:mx-2 lg:ml-2">
                                        <h6 className="text-white font-medium text-[14px] lg:text-xs xl:text-[12px] md:text-xs">GET IT ON</h6>
                                        <p className="text-white font-normal text-[16px] lg:text-lg xl:text-[14px] md:text-lg">Google Play</p>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center  w-[190px] md:w-auto lg:w-auto xl:w-auto mb-4 xl:mb-0 lg:mb-0 md:mb-0  btn cursor-pointer btn-playstore-new  transition ease-out duration-500 ">
                                    <img src="../../assets/images/appstore.png" className="w-7 lg:w-6 xl:w-7 md:w-8" />
                                    <div className="ml-2 md:ml-2 xl:mx-2 lg:ml-2">
                                        <h6 className="text-white font-medium text-[14px] lg:text-xs xl:text-[12px] md:text-xs">GET IT ON</h6>
                                        <p className="text-white font-normal text-[16px] lg:text-lg xl:text-[14px] md:text-lg">Google Play</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="pt-6  mt-[6px]  lg:mt-[95px]   xl:mb-[0px] md:pt-[80px] flex  flex-col md:flex-col w-full lg:w-full md:w-full xl:w-full justify-center ml-0 lg:ml-20 md:ml-0 xl:ml-20">
                        <form
                            className=" xl:absolute lg:absolute left-[0px] top-[10px] xl:left-[700px] xl:top-[300px] lg:left-[550px] lg:top-[300px] md:left-[0px] md:top-[30px] px-0 xl:px-0  lg:px-0  md:px-0 w-full xl:w-[40%] lg:w-[40%] md:w-full md:h-[500px]  h-[500px]  w-full z-50 flex justify-center items-center"
                            
                        >
                            <div className="mx-[0px] xl:mx-[30px] lg:mx-[0px] md:mx-[0px]">
                                <div className="p-6 w-full justify-center drop-shadow-xl rounded-[16px] px-[10px] lg:px-[30px] mt-6 py-[40px] border-[0px] border-primary bg-[#0C162A]">
                                    <div className="flex justify-center items-center">
                                        <span className="text-[18px] font-medium text-center w-full text-[#ffffff]">
                                            Send money today with UbuPay!
                                        </span>
                                    </div>

                                    <div className="flex flex-col space-y-8">
                                        <SenderAmountRateBanner />
                                        <ReceiverAmountRateBanner />

                                        <div className="flex justify-between items-center px-3">
                                            <span className="text-[14px] font-medium text-[#ffffff] mb-2">
                                                Conversion Rate
                                            </span>
                                            <p className="text-[14px] font-medium text-[#ffffff] mb-2">
                                                1 USD = 600 NGN
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-primary h-[55px] text-white py-3 mt-[70px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
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
