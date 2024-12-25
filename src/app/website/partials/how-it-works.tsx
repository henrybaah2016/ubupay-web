import React, { useState } from "react";

const HowItWorks = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index: React.SetStateAction<number>) => {
        setOpenIndex(openIndex === index ? 0 : index);
    };

    const faqs = [
        {
            number: 1,
            title: "Sign Up ",
            description: "Open the app and create an account by providing your email, phone number, and a secure password.If you already have an account, log in using your credentials",
        },
        {
            number: 2,
            title: "Verify Your Identity",
            description: "Complete your profile by verifying your identity. Upload a valid government-issued ID, such as a passport or driver’s license, and a selfie to confirm your identity. This process complies with international security standards to prevent fraud and ensure secure transactions.",
        },
        {
            number: 3,
            title: "Add a Payment Method",
            description: "Link a payment method to fund your transfers. Choose from options like a debit card, credit card, or bank account. Your payment details are encrypted for security, and you can manage your methods easily within the app.",
        },
        {
            number: 4,
            title: "Enter Transfer Details",
            description: "Specify the recipient's details, including their name, address, and bank account information (if applicable). Input the amount you want to send, and the app will calculate any applicable fees and the exchange rate.",
        },
        {
            number: 5,
            title: "Review & Confirm",
            description: "Double-check all the details, including the recipient’s information, transfer amount, and fees. Confirm the transfer to initiate the transaction. Once confirmed, you’ll receive a receipt and a tracking number.",
        },
        {
            number: 6,
            title: "Track Transfer  Status",
            description: "Monitor your transfer’s progress in real-time. The app provides status updates, from processing to completion. Notifications will alert you once the transfer is successful.",
        },
    ];

    return (
        <section className="bg-[#EAF1FF] mt-[10px] py-[0px] rounded-[26px]">
            <div className="flex flex-col md:flex-row px-4 mx-[30px] xl:mx-[70px] md:mx-[30px] lg:mx-[30px] space-x-[120px] pt-[70px] ">


                <div className="w-full xl:w-[55%] md:w-[55%]  lg:w-[55%] flex flex-col justify-center items-start  mb-6 md:mb-0">
                    <h1 className="text-[#34342A] xl:pr-[160px] pt-[50px] leading-tight lg:leading-[53px] xl:leading-[50px] xl:pb-[5px] md:pb-[10px] lg:pb-0 pb-[10px] pt-0 lg:pt-0 xl:pt-2 md:pt-[100px] lg:text-[20px] xl:text-[40px] font-bold text-2xl">
                        Get Started with UbuPay Effortlessly
                    </h1>
                    <p className="pt-2 xl:pr-[80px]  text-[#9F9F9F] text-[18px] leading-snug font-semibold md:text-[17px] xl:text-[17px] lg:text-[17px]">
                        UbuPay offers a holistic solution for users to support family, friends, and businesses in Africa, ensuring financial inclusion and empowerment.
                    </p>
                    <div className="flex flex-col mt-[20px]">
                        <div className="max-w-3xl mx-auto mt-0">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start p-6 mb-0 ${openIndex === index
                                        ? "bg-[#F6F9FF] border-primary rounded-lg"
                                        : "border-gray-200"
                                        }`}
                                >

                                    <div
                                        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full mr-4 ${openIndex === index ? "bg-primary text-[#ffffff]" : "bg-[#F6F9FF] text-[#34342A]"
                                            }`}
                                    >
                                        {faq.number}
                                    </div>


                                    <div className="flex-grow">
                                        <h3
                                            className="text-[20px] text-[#34342A] font-semibold cursor-pointer"
                                            onClick={() => toggleFAQ(index)}
                                        >
                                            {faq.title}
                                        </h3>
                                        {openIndex === index && (
                                            <p className="mt-2 font-semibold text-[15px] text-[#6C6C6C]">{faq.description}</p>
                                        )}
                                    </div>


                                    <button
                                        className="flex-shrink-0 ml-4 text-gray-500"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        {openIndex === index ? (
                                            <img
                                                src="assets/icons/arrow-up.svg"
                                                alt=""
                                                className="w-[14px] h-auto ml-2 xl:contain"
                                            />
                                        ) : (
                                            <img
                                                src="assets/icons/arrow-down.svg"
                                                alt=""
                                                className="w-[14px] h-auto ml-2 xl:contain"
                                            />
                                        )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="pt-6 lg:mt-[95px] xl:mb-[0px] md:pt-0 flex flex-col w-full lg:w-[45%] md:w-[45%] xl:w-[45%] justify-center md:ml-0 lg:ml-20 md:ml-20 xl:ml-20">
                    <img src="/assets/images/mockup-2.png" alt="Phone" />
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;
