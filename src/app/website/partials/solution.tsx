import React from "react";

const Solution = () => {


    return (
        <section className="bg-[#F6F9FF] mt-[10px] py-[100px] rounded-[0px]">
            <div className="flex flex-col md:flex-row px-4 mx-[30px] xl:mx-[70px] md:mx-[30px] lg:mx-[30px] space-x-[130px] py-10 ">

                <div className="pt-6 lg:mt-[95px] xl:mb-[165px] md:pt-0 flex flex-col w-full lg:w-[45%] md:w-[45%] xl:w-[45%] justify-center md:ml-0 lg:ml-20 md:ml-20 xl:ml-20">
                    <img src="/assets/images/mockup-1.png" alt="Phone" />
                </div>

                <div className="w-full xl:w-[55%] md:w-[55%]  lg:w-[55%] flex flex-col justify-center items-start  mb-6 md:mb-0">
                    <h1 className="text-[#34342A] xl:pr-[160px] pt-[50px] leading-tight lg:leading-[53px] xl:leading-[50px] xl:pb-[5px] md:pb-[10px] lg:pb-0 pb-[10px] pt-0 lg:pt-0 xl:pt-2 md:pt-[100px] lg:text-[20px] xl:text-[40px] font-bold text-2xl">
                        We support Africa's family, friends, businesses.
                    </h1>
                    <p className="pt-2 xl:pr-[80px]  text-[#9F9F9F] text-[18px] leading-snug font-semibold md:text-[17px] xl:text-[17px] lg:text-[17px]">
                        UbuPay offers a holistic solution for users to support family, friends, and businesses in Africa, ensuring financial inclusion and empowerment.
                    </p>
                    <div className="flex flex-col mt-[20px]">
                        <div className="flex items-center mt-[8px]">
                            <img
                                src="assets/icons/correct-check.svg"
                                alt=""
                                className="w-[18px] h-auto"
                            />
                            <h4 className="ml-2 text-[#9F9F9F] text-[18px] leading-snug font-semibold md:text-[17px] xl:text-[17px] lg:text-[17px]">
                                Competitive Exchange Rates
                            </h4>
                        </div>
                        <div className="flex items-center mt-[12px]">
                            <img
                                src="assets/icons/correct-check.svg"
                                alt=""
                                className="w-[18px] h-auto"
                            />
                            <h4 className="ml-2 text-[#9F9F9F] text-[18px] leading-snug font-semibold md:text-[17px] xl:text-[17px] lg:text-[17px]">
                                Multi-Currency Support
                            </h4>
                        </div>
                        <div className="flex items-center mt-[12px]">
                            <img
                                src="assets/icons/correct-check.svg"
                                alt=""
                                className="w-[18px] h-auto"
                            />
                            <h4 className="ml-2 text-[#9F9F9F] text-[18px] leading-snug font-semibold md:text-[17px] xl:text-[17px] lg:text-[17px]">
                                Rewards and Loyalty Programs
                            </h4>
                        </div>
                    </div>


                    <div className="pt-[0px] lg:pt-[0px] z-10 relative">
                        <div className="flex mt-12 mb:mt-12 lg:mt-8 xl:mt-12  mx-8 lg:mx-4 xl:mx-2 md:mx-8 pb-10 items-center">
                            <div
                                className="flex items-center w-auto btn cursor-pointer btn-playstore-2  transition ease-out duration-500 ">
                                <img src="../../assets/images/playstore.png" className="w-5 lg:w-6 xl:w-10 md:w-10" />
                                <div className="ml-1 md:ml-2 xl:2 lg:2">
                                    <h6 className="text-white font-semibold text-[8px] lg:text-xs xl:text-xs md:text-xs">GET IT ON</h6>
                                    <p className="text-white font-semibold text-[12px] lg:text-lg xl:text-lg md:text-lg">Google Play</p>
                                </div>
                            </div>
                            <div
                                className="flex items-center cursor-pointer w-auto btn ml-2 btn-appstore-2 transition ease-out duration-500 ">
                                <img src="../../assets/images/appstore.png" className="w-5 lg:w-6 xl:w-8 md:w-8" />
                                <div className="ml-1 md:ml-2 xl:2 lg:2">
                                    <h6 className="text-white font-semibold text-[8px] lg:text-xs xl:text-xs md:text-xs">Download on the </h6>
                                    <p className="text-white font-semibold text-[12px] lg:text-lg xl:text-lg md:text-lg">App Store</p>
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
