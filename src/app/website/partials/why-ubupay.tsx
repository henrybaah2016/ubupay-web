import React from "react";

const WhyUbupay = () => {
    return (
        <section className="bg-primary w-full  mt-[0px] xl:mt-[140px] lg:mt-[140px] md:mt-[140px] py-[0px] xl:py-[100px] lg:py-[100px] md:py-[100px] rounded-[0px]">
            <div className="flex flex-col  md:flex-col xl:flex-row lg:flex-row px-6 mx-[0px] xl:mx-[70px] md:mx-[30px] lg:mx-[30px] py-10 ">
                <div className="w-full xl:w-[45%] md:w-[90%]  lg:w-[40%] flex flex-col justify-center items-start  mb-6 md:mb-0">
                    <h1 className="text-[#ffffff] xl:pr-[160px] lg:pr-[100px] md:pt-[50px] lg:pt-[50px] xl:pt-[50px] pt-[30px] leading-tight lg:leading-[53px] xl:leading-[50px] xl:pb-[5px] md:pb-[10px] lg:pb-0 pb-[10px] pt-0 lg:pt-0 xl:pt-2 md:pt-[100px] lg:text-[40px] xl:text-[40px]  md:text-[40px] font-bold text-2xl">
                        Seamless secure
                        & efficient money transfers
                    </h1>
                    <p className="pt-2 xl:pr-[100px]  lg:pr-[100px]  text-[#ECECEC] text-[18px] leading-snug font-semibold md:text-[17px] xl:text-[17px] lg:text-[17px]">
                        UbuPay enables affordable, seamless money transfers to Africa for loved ones and businesses.
                    </p>
                    <button className="px-6 xl:mt-[50px] lg:mt-[50px] md:mt-[50px] md:mb-[50px] mt-[30px] py-2 btn-readmore  transition">
                        Learn More
                    </button>

                </div>

                <div className="w-full md:w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col items-start p-6 border rounded-lg bg-white">
                        <h3 className="text-[26px]  font-semibold text-[#34342A] mb-[20px]">
                            Instant Transfers
                        </h3>
                        <p className=" text-[#6C6C6C] font-semibold text-[18px] mb-[60px]">
                            Send money instantly to bank accounts, mobile wallets.
                        </p>
                        <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center">
                            <img
                                src="assets/icons/why-icon-1.png"
                                alt=""
                                className="w-8 h-8"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-start p-6 border rounded-lg bg-white">
                        <h3 className="text-[26px] font-semibold text-[#34342A] mb-[20px]">
                        Realtime Tracking
                        </h3>
                        <p className=" text-[#6C6C6C] font-semibold text-[18px] mb-[60px]">
                        Track the status of transfers with live updates until delivery is confirmed                        </p>
                        <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center">
                            <img
                                src="assets/icons/why-icon-2.png"
                                alt=""
                                className="w-8 h-8"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-start p-6 border rounded-lg bg-white">
                        <h3 className="text-[26px] font-semibold text-[#34342A] mb-[20px]">
                        Flexible Payment Options
                        </h3>
                        <p className=" text-[#6C6C6C] font-semibold text-[18px] mb-[60px]">
                        Use debit or credit cards  or Canadian bank account to fund transfers
                        </p>
                        <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center">
                            <img
                                src="assets/icons/why-icon-3.png"
                                alt=""
                                className="w-8 h-8"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-start p-6 border rounded-lg bg-white">
                        <h3 className="text-[26px] font-semibold text-[#34342A] mb-[20px]">
                        Low Transaction Fees
                        </h3>
                        <p className=" text-[#6C6C6C] font-semibold text-[18px] mb-[60px]">
                        Affordable fees compared to traditional banks or money transfer services
                        </p>
                        <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center">
                            <img
                                src="assets/icons/why-icon-4.png"
                                alt=""
                                className="w-auto h-6"
                            />
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
};

export default WhyUbupay;
