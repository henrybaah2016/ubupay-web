import React from "react";

const Countries = () => {


    return (
        <section className="bg-[#ffffff] mt-[0px] xl:mt-[0px] px-4 py-[10px] w-full rounded-[0px]">
            <div className="flex flex-col w-full md:items-center  md:flex-col xl:flex-row lg:flex-row px-4 mx-[0px] xl:mx-[0px] md:mx-[0px] lg:mx-[0px] xl:space-x-[50px] lg:space-x-[30px]  md:space-x-[0px]  py-10 ">

                <div className="pt-6  lg:mt-[95px] xl:mb-[65px] md:pt-0 flex flex-col w-full lg:w-[45%] md:w-[55%]  xl:w-[55%]  justify-center  ml-0 lg:ml-20 md:ml-0 xl:ml-20">
                    <img src="/assets/images/mockup-4.png" alt="Phone" />
                </div>

                <div className="w-full xl:w-[55%] md:w-full  lg:w-[55%] flex flex-col justify-center items-start  mb-6 md:mb-0">
                    <h1 className="text-[#000000] xl:pr-[160px] pt-[50px] leading-tight lg:leading-[53px] xl:leading-[50px] xl:pb-[15px] md:pb-[10px] lg:pb-0 pb-[10px] pt-0 lg:pt-0 xl:pt-2 md:pt-[100px] lg:text-[20px] xl:text-[40px] font-semibold text-2xl">
                    Send money to over 10 African Countries
                    </h1>
                    <p className="pt-2 xl:pr-[80px]  text-[#3F3F3F] text-[18px] leading-snug font-normal md:text-[17px] xl:text-[17px] lg:text-[17px]">
                    With UbuPay, effortlessly send money to your loved ones, friends, and business partners, ensuring fast, secure, and seamless transactions anytime, anywhere in Africa                    </p>
                   
                    <img src="../../assets/images/countries.png" className="w-[220px] lg:w-[300px] xl:w-[300px] md:w-[300px] mt-6" />


                    {/* <div className="pt-[0px] lg:pt-[0px]  z-10 relative ">
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
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Countries;
