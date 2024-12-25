import React from "react";

const DownloadApp = () => {
    return (
        <section className="bg-[#F6F9FF] xl:py-[100px]">
            <div className="bg-primary mx-[30px] xl:mx-[100px] mt-[120px] py-[10px] rounded-[36px] relative">
                <div className="absolute top-[-80px] left-[-50px] xl:left-[-10px] w-[45%] xl:w-[45%]">
                    <img src="/assets/images/mockup-3.png" alt="Phone" className="w-full h-auto" />
                </div>

                <div className="flex flex-col items-start px-6 lg:px-12 xl:px-16 py-12 space-y-6 ml-auto w-full lg:w-[60%]">
                    <h1 className="text-white font-bold text-2xl lg:text-3xl xl:text-4xl">
                        Download App
                    </h1>
                    <p className="text-white text-lg lg:text-xl xl:text-xl leading-snug font-semibold">
                        Send money to anyone in Africa using UbuPay. <br/>Download the app now
                    </p>
                    <div className="flex space-x-4">
                        <div className="flex items-center cursor-pointer btn-outline  p-4 rounded-lg">
                            <img src="/assets/images/playstore.png" className="w-6 lg:w-8" alt="Play Store" />
                            <div className="ml-2">
                                <h6 className="text-white text-xs">GET IT ON</h6>
                                <p className="text-white text-sm lg:text-base font-semibold">Google Play</p>
                            </div>
                        </div>
                        <div className="flex items-center cursor-pointer btn-outline   p-4 rounded-lg">
                            <img src="/assets/images/appstore.png" className="w-6 lg:w-8" alt="App Store" />
                            <div className="ml-2">
                                <h6 className="text-white text-xs">Download on the</h6>
                                <p className="text-white text-sm lg:text-base font-semibold">App Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
