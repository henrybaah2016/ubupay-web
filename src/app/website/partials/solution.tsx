import React from "react";

const Solution = () => {


    return (
        <section className="bg-[#F6F9FF] mt-[0px] xl:mt-[230px] lg:mt-[300px] px-4 py-[10px] w-full rounded-[0px]">
            <div className="flex flex-col w-full md:items-center lg:py-[100px]  md:flex-col xl:flex-row lg:flex-row px-4 mx-[0px] xl:mx-[0px] md:mx-[0px] lg:mx-[0px] xl:space-x-[50px] lg:space-x-[60px]  md:space-x-[0px] xl:space-x-[30px] py-10 ">

                <div className="pt-6  lg:mt-[0px] xl:mb-[65px]  md:pt-0 flex flex-col w-full lg:w-[45%] md:w-[55%]  xl:w-[35%]  justify-center  ml-0 lg:ml-20 md:ml-0 xl:ml-20">
                    <img src="/assets/images/mockup-1.png" alt="Phone" />
                </div>

                <div className="w-full xl:w-[55%] md:w-full  lg:w-[55%] flex flex-col justify-center items-start  mb-6 md:mb-0">
                    <h1 className="text-[#000000] xl:pr-[160px] pt-[50px] leading-tight lg:leading-[40px] xl:leading-[50px] xl:pb-[15px] md:pb-[10px] lg:pb-0 pb-[10px] pt-0 lg:pt-0 xl:pt-2 md:pt-[100px] lg:text-[40px] xl:text-[40px] font-semibold text-2xl">
                        We support Africa's family, friends, businesses.
                    </h1>
                    <p className="pt-2 xl:pr-[80px]  text-[#3F3F3F] text-[18px] leading-snug font-normal md:text-[17px] xl:text-[17px] lg:text-[17px]">
                        UbuPay offers a holistic solution for users to support family, friends, and businesses in Africa, ensuring financial inclusion and empowerment.
                    </p>
                    <div className="flex flex-col mt-[20px]">
                        <div className="flex items-center mt-[8px]">
                            <img
                                src="assets/icons/correct-check.svg"
                                alt=""
                                className="w-[18px] h-auto"
                            />
                            <h4 className="ml-2 text-[#3F3F3F] text-[18px] leading-snug font-normal md:text-[17px] xl:text-[17px] lg:text-[17px]">
                                Competitive Exchange Rates
                            </h4>
                        </div>
                        <div className="flex items-center mt-[12px]">
                            <img
                                src="assets/icons/correct-check.svg"
                                alt=""
                                className="w-[18px] h-auto"
                            />
                            <h4 className="ml-2 text-[#3F3F3F] text-[18px] leading-snug font-normal md:text-[17px] xl:text-[17px] lg:text-[17px]">
                                Multi-Currency Support
                            </h4>
                        </div>
                        <div className="flex items-center mt-[12px]">
                            <img
                                src="assets/icons/correct-check.svg"
                                alt=""
                                className="w-[18px] h-auto"
                            />
                            <h4 className="ml-2 text-[#3F3F3F] text-[18px] leading-snug font-normal md:text-[17px] xl:text-[17px] lg:text-[17px]">
                                Rewards and Loyalty Programs
                            </h4>
                        </div>
                    </div>


                    <div className="pt-[0px] lg:pt-[0px]  z-10 relative ">
                        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row mt-12 mb:mt-12 lg:mt-8 xl:mt-12 mx-0 lg:mx-4 xl:mx-2 md:mx-0 pb-10  xl:items-left xl:items-center lg:items-center md:items-center">
                            <div
                                className="flex items-center w-[190px] md:w-auto lg:w-auto xl:w-auto mb-4 xl:mb-0 lg:mb-0 md:mb-0  btn cursor-pointer btn-playstore-new-1  transition ease-out duration-500 ">
                                <img src="../../assets/images/playstore.png" className="w-7 lg:w-6 xl:w-8 md:w-8" />
                                <div className="ml-2 md:ml-2 xl:mx-2 lg:ml-2">
                                    <h6 className="text-white font-medium text-[14px] lg:text-xs xl:text-[12px] md:text-xs">GET IT ON</h6>
                                    <p className="text-white font-normal text-[16px] lg:text-lg xl:text-[14px] md:text-lg">Google Play</p>
                                </div>
                            </div>
                            <div
                                className="flex items-center  w-[190px] md:w-auto lg:w-auto xl:w-auto mb-4 xl:mb-0 lg:mb-0 md:mb-0  btn cursor-pointer btn-playstore-new-1  transition ease-out duration-500 ">
                                <img src="../../assets/images/appstore.png" className="w-7 lg:w-6 xl:w-7 md:w-8" />
                                <div className="ml-2 md:ml-2 xl:mx-2 lg:ml-2">
                                    <h6 className="text-[#ffffff] font-medium text-[14px] lg:text-xs xl:text-[12px] md:text-xs">GET IT ON</h6>
                                    <p className="text-[#ffffff] font-normal text-[16px] lg:text-lg xl:text-[14px] md:text-lg">Google Play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solution;
