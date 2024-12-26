import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#EAF1FF] pt-10 pb-6 px-6 xl:px-40 md:px-14 lg:px-28 md:px-18">
            <div className="mb-8">
                <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between pt-2 items-start lg:items-center md:items-center xl:items-center">
                    <div className="flex justify-items-center items-center">
                        <img src="/assets/images/logo.png" alt="Logo" className="w-24" />
                    </div>
                    <div className="sm:block mt-8 xl:mt-4 lg:mt-4 md:mt-4">
                        <div className="flex mt-4">
                            {["discord", "facebook", "twitter", "linkedin"].map((platform, index) => (
                                <img
                                    key={index}
                                    src={`/assets/icons/${platform}.png`}
                                    alt={platform}
                                    className="w-10 h-10 ml-4"
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <hr className="bg-footerLineColor mt-6 mb-8" />
                <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between pt-2 items-start lg:items-center md:items-center xl:items-center">
                    <div className="sm:block mt-8 xl:mt-4 lg:mt-4 md:mt-4">
                    <h4 className="ml-0 xl:ml-0 lg:ml-0 md:ml-0 pb-[30px] text-[#34342A] text-lg font-semibold">
                            <a href="#0"><span>Subscribe to our <br/>newsletters</span></a>
                        </h4>
                        <div className="mt-4">
                            <form className="relative">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 bg-transparent  text-[#636464] text-[16px] pr-12 font-semibold  border border-[#B1B6BE] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                                <img
                                    src="/assets/icons/arrow-right.png"
                                    alt="Email"
                                    
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-cursor w-auto h-3"
                                />
                            </form>
                        </div>
                    </div>
                    <div className="sm:block mt-8 xl:mt-4 lg:mt-4 md:mt-4">
                        <h4 className="ml-0 xl:ml-0 lg:ml-0 md:ml-0 pb-2 text-[#34342A] text-lg font-semibold">
                            <a href="#0"><span>Company</span></a>
                        </h4>
                        <ul>
                            {["About Us", "FAQ", "Why UbuPay?"].map((item, index) => (
                                <li
                                    key={index}
                                    className="ml-0 xl:ml-0 lg:ml-0 md:ml-0 pb-2 font-semibold text-[16px] text-[#636464] transition ease-out duration-500"
                                >
                                    <a href="#1">
                                        <span>{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sm:block mt-8 xl:mt-4 lg:mt-4 md:mt-4">
                        <h4 className="ml-0 xl:ml-0 lg:ml-0 md:ml-0 pb-2 text-[#34342A] text-lg font-semibold">
                            <a href="#0"><span>Support</span></a>
                        </h4>
                        <ul>
                            {["Talk to Support", "Help Center", "Refer & Earn",].map((item, index) => (
                                <li
                                    key={index}
                                    className="ml-0 xl:ml-0 lg:ml-0 md:ml-0 pb-2 font-semibold text-base text-[#636464] transition ease-out duration-500"
                                >
                                    <a href="#1">
                                        <span>{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sm:block mt-8 xl:mt-4 lg:mt-4 md:mt-4">
                        <h4 className="ml-0 xl:ml-0 lg:ml-0 md:ml-0 pb-2 text-[#34342A] text-lg font-semibold">
                            <a href="#0"><span>Get in Touch</span></a>
                        </h4>
                        <ul>
                            {["+1 (613) 793-9059", "info@ubupay.ca", "23 Ave Street Canada",].map((item, index) => (
                                <li
                                    key={index}
                                    className="ml-0 xl:ml-0 lg:ml-0 md:ml-0 pb-2 font-semibold text-base text-[#636464] transition ease-out duration-500"
                                >
                                    <a href="#1">
                                        <span>{item}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>



                </div>

                <hr className="bg-footerLineColor mt-10" />

                <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between pt-2 items-start lg:items-center md:items-center xl:items-center">
                    <a href="#0" className="mt-0">
                        <span className="text-[14px] font-semibold text-[#636464]">
                            All Rights Reserved© ubupay.ca
                        </span>
                    </a>

                    <div className="flex mt-4">
                        {["Privacy Policy", "Terms of Use"].map((link, index) => (
                            <span
                                key={index}
                                className="ml-0 xl:ml-8 lg:ml-8 md:ml-8 pb-2 text-[14px] font-semibold text-[#636464] transition ease-out duration-500"
                            >
                                <a href="#1">
                                    <span>{link}</span>
                                </a>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
