import React from "react";

const WhyUbupay = () => {
    return (
        <section className=" xl:absolute lg:absolute md:absolute xl:top-[520px] lg:top-[520px] md:top-[520px] w-full  px-[20px]  mt-[0px] xl:mt-[140px] lg:mt-[140px] md:mt-[140px] py-[0px] xl:py-[100px] lg:py-[100px] md:py-[100px] rounded-[0px]">
            <div className="flex flex-col bg-[#ffffff]  xl:drop-shadow-xl lg:drop-shadow-xl md:drop-shadow-xl rounded-[0px] xl:rounded-[10px] md:rounded-[10px] lg:rounded-[10px]  md:flex-col xl:flex-col lg:flex-row px-6 mx-[0px] xl:mx-[70px] md:mx-[30px] lg:mx-[30px] py-10 ">
                <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row xl:space-x-28">
                    <div className="flex flex-col items-left mr-[100px] xl:mr-[0px] lg:mr-[0px] md:mr-[0px]  mx-[20px] xl:mx-[50px]">
                        <h3 className="font-semibold xl:text-[40px] text-[#000000] mb-[0px]">
                            200K
                        </h3>
                        <p className=" text-[#3F3F3F] font-medium text-[14px] xl:text-[14px] mb-[40px]">
                            TOTAL TRANSACTIONS
                        </p>
                    </div>
                    <div className="flex flex-col items-left mr-[100px] xl:mr-[0px] lg:mr-[0px] md:mr-[0px]  mx-[20px] xl:mx-[50px]">
                        <h3 className="font-semibold xl:text-[40px] text-[#000000] mb-[0px]">
                            6
                        </h3>
                        <p className=" text-[#3F3F3F] font-medium text-[14px] mb-[40px]">
                        NUMBER OF COUNTRIES
                        </p>
                    </div>
                </div>

                <hr className=" mr-[0px] xl:mr-[530px] lg:mr-[500px] md:mr-[500px]"/>

                <div className="w-full md:w-full xl:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-0">
                    <div className="flex flex-col items-start p-6">
                        <h3 className="font-semibold xl:text-[22px] text-[#000000] mb-[0px] xl:mb-[10px] md:mb-[10px] lg:mb-[10px]">
                            Instant Transfers
                        </h3>
                        <p className=" text-[#3F3F3F] font-normal text-[16px] mb-[10px] xl:mb-[60px] md:mb-[60px] lg:mb-[60px]">
                            Send money instantly to bank accounts, mobile wallets.
                        </p>

                    </div>
                    <div className="flex flex-col items-start p-6">
                        <h3 className="font-semibold xl:text-[22px] text-[#000000] mb-[10px]">
                            Realtime Tracking
                        </h3>
                        <p className=" text-[#3F3F3F] font-normal text-[16px] mb-[10px] xl:mb-[60px] md:mb-[60px] lg:mb-[60px]">
                            Track the status of transfers with live updates until delivery is confirmed
                        </p>



                    </div>

                    <div className="flex flex-col items-start p-6">
                        <h3 className="font-semibold xl:text-[22px] text-[#000000] mb-[10px]">
                            Flexible Payment Options
                        </h3>
                        <p className=" text-[#3F3F3F] font-normal text-[16px] mb-[10px] xl:mb-[60px] md:mb-[60px] lg:mb-[60px]">
                            Use debit or credit cards  or Canadian bank account to fund transfers
                        </p>



                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyUbupay;
