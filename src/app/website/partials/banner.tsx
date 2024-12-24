import React from "react";

const Banner = () => {
    return (
        <>
            <div className="flex flex-col items-center lg:mt-0 mt-[200px] md:flex-col lg:flex-col xl:flex-col justify-center md:justify-center lg:justify-center xl:justify-center w-full h-[650px] xl:h-[600px] lg:h-[500px]">
                <div
                    id="solution"
                    className="h-full flex items-center lg:px-[20px] w-full pt-12 lg:pt-[100px] xl:pt-[150px] md:pt-14"
                >
                    <div className="flex items-center lg:flex-row flex-col-reverse xl:space-x-[50px] lg:px-24 xl:px-14 md:px-14 px-0 h-full">
                        <div className="px-6 md:px-0 lg:px-0 xl:px-0 lg:w-[100%] xl:w-[90%] h-full flex flex-col lg:justify-center">
                            <h1 className="text-[#34342A] pt-[50px] leading-tight lg:leading-[73px] xl:leading-[73px] xl:pb-[30px] md:pb-[30px] lg:pb-0 pb-[30px] pt-0 lg:pt-0 xl:pt-2 md:pt-[100px] lg:text-[30px] xl:text-[60px] font-bold text-3xl">
                                Cross-border payment made easy
                            </h1>
                            <p className="pt-2 text-[#9F9F9F] text-[18px] leading-snug font-semibold md:text-[22px] xl:text-[20px] lg:text-[22px]">
                                Seamless, secure, and efficient money transfers from Canada<br/> to other African countries.
                            </p>

                            <div className="pt-[0px] lg:pt-[0px] z-10 relative">
                                <div className="flex mt-12 mb:mt-12 lg:mt-8 xl:mt-12  mx-8 lg:mx-4 xl:mx-2 md:mx-8 pb-10 items-center">
                                    <div
                                        className="flex items-center w-auto btn cursor-pointer btn-playstore  transition ease-out duration-500 ">
                                        <img src="../../assets/images/playstore.png" className="w-5 lg:w-6 xl:w-10 md:w-10" />
                                        <div className="ml-1 md:ml-2 xl:2 lg:2">
                                            <h6 className="text-white font-semibold text-[8px] lg:text-xs xl:text-xs md:text-xs">GET IT ON</h6>
                                            <p className="text-white font-semibold text-[12px] lg:text-lg xl:text-lg md:text-lg">Google Play</p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex items-center cursor-pointer w-auto btn ml-2 btn-appstore transition ease-out duration-500 ">
                                        <img src="../../assets/images/appstore.png" className="w-5 lg:w-6 xl:w-8 md:w-8" />
                                        <div className="ml-1 md:ml-2 xl:2 lg:2">
                                            <h6 className="text-white font-semibold text-[8px] lg:text-xs xl:text-xs md:text-xs">Download on the </h6>
                                            <p className="text-white font-semibold text-[12px] lg:text-lg xl:text-lg md:text-lg">App Store</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="pt-6 lg:mt-[95px] xl:mb-[165px] md:pt-0 flex flex-col w-64 lg:w-[80%] md:w-[80%] xl:w-[80%] justify-center md:ml-0 lg:ml-20 md:ml-20 xl:ml-20">
                            <img src="/assets/images/banner-img.png" alt="Phone" />
                        </div>
                    </div>
                </div>
                <img
                    className="absolute xl:bottom-[-1120px] lg:bottom-[-1150px] md:bottom-[-1010px] hidden xl:block lg:block md:block xxl:block xl:h-[100px] xl:w-full z-0"
                    src="/assets/images/deep.png"
                    alt="Background"
                />
            </div>
            <div className="bg-vertical-2 hidden xl:block lg:block md:block xxl:block bg-cover h-[150px] bg-top w-full md:w-full lg:w-full xl:w-full"></div>
            <img
                className="absolute xl:bottom-[-1275px] lg:bottom-[-1295px] md:bottom-[-1655px] xl:h-[100px] xl:w-full z-0"
                src="/assets/images/deep.png"
                alt="Deep Background"
            />
        </>
    );
};

export default Banner;
