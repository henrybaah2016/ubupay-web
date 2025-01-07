"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import PaymentMethodModal from "./payment-method-modal";

const PaymentCard = () => {
    const [isSourceChecked, setIsSourceChecked] = useState(false);
    const [selectedReceiverMethod, setSelectedReceiverMethod] = useState("bank");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("bank");
    const router = useRouter()

    const handleAddBank = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard/screens/payment-card/add-bank");
    };

    const handleAddVisa = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard/screens/payment-card/add-visa");
    };

    const handleAddMasterCard = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard/screens/payment-card/add-mastercard");
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleMethodChange = (method: string) => {
        setSelectedMethod(method);
    };
    return (
        <div className="flex flex-col   mx-[0px] xl:mx-[120px] lg:mx-[120px] md:mx-[60px]">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-[14px] md:text-[18px] lg:text-[18px] xl:text-[18px] font-bold text-[#636464]">Bank & Cards</h2>
                <div className="flex space-x-4">
                    <button
                        onClick={handleOpenModal}
                        className=" flex px-3 py-2 xl:px-8 xl:py-4 lg:px-8 lg:py-4 md:px-6 md:py-3 items-center rounded-full font-semibold text-sm bg-primary text-white"

                    >
                        <img src="/assets/icons/add.png" className="w-auto h-3 xl:w-auto xl:h-3 lg:w-auto lg:h-3 md:w-auto md:h-3 pr-2" />
                        Add
                    </button>

                </div>
            </div>
            <PaymentMethodModal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className="flex flex-col space-y-2">
                    <div>
                        <div
                            onClick={handleAddBank}
                            className="flex items-center p-6 justify-between rounded-[16px] px-[30px] bg-[#ffffff] cursor-pointer"

                        >
                            <div className="flex space-x-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-[6px] bg-[#ECECEC]">
                                    <img src="/assets/images/bank.png" alt="Bank Account" className="w-auto h-6 p-[2px]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[16px] text-[#6C6C6C] font-semibold">Bank Account</span>
                                    <span className="text-[14px] font-semibold text-[#A5A5A5]">0013 ************980</span>
                                </div>
                            </div>

                            <img src="/assets/icons/arrow-forward.png" alt="Checked" className="w-auto h-3" />

                        </div>
                        <div className="border-b border-gray-100 mx-[30px]"></div>
                    </div>

                    <div>
                        <div
                            onClick={handleAddVisa}

                            className="flex items-center p-6 justify-between rounded-[16px] px-[30px] bg-[#ffffff] cursor-pointer"

                        >
                            <div className="flex space-x-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-[6px] bg-[#ECECEC]">
                                    <img src="/assets/images/visa.png" alt="Visa" className="w-auto h-4 p-[2px]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[16px] text-[#6C6C6C] font-semibold">Visa</span>
                                    <span className="text-[14px] font-semibold text-[#A5A5A5]">9343 **** **** 2455</span>
                                </div>
                            </div>

                            <img src="/assets/icons/arrow-forward.png" alt="Checked" className="w-auto h-3" />

                        </div>
                        <div className="border-b border-gray-100 mx-[30px]"></div>
                    </div>

                    <div>
                        <div
                            onClick={handleAddMasterCard}

                            className="flex items-center p-6 justify-between rounded-[16px] px-[30px] bg-[#ffffff] cursor-pointer"
                        >
                            <div className="flex space-x-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-[6px] bg-[#ECECEC]">
                                    <img src="/assets/images/mastercard.png" alt="MasterCard" className="w-auto h-5 p-[2px]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[16px] text-[#6C6C6C] font-semibold">MasterCard</span>
                                    <span className="text-[14px] font-semibold text-[#A5A5A5]">3043 **** **** 7859</span>
                                </div>
                            </div>

                            <img src="/assets/icons/arrow-forward.png" alt="Checked" className="w-auto h-3" />

                        </div>
                    </div>
                </div>
            </PaymentMethodModal>
            <div className="bg-[#F9F9F9] px-[10px] xl:px-[60px] lg:px-[60px] md:px-[60px] py-[10px] xl:py-[60px] lg:py-[60px] md:py-[60px] rounded-lg p-4 ">

                <div className="flex flex-col space-y-6">
                    <div>
                        <div
                            className={`flex items-center  p-3 xl:p-6 lg:p-6 md:p-6 justify-between rounded-[16px] px-[10px] xl:px-[30px] lg:px-[30px] md:px-[30px] bg-[#ffffff] cursor-pointer ${selectedMethod === "bank" ? "ring-2 ring-transparent" : ""
                                }`}
                            onClick={() => handleMethodChange("bank")}
                        >
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 xl:w-12 xl:h-12 lg:w-12 lg:h-12 md:w-12 md:h-12  flex items-center justify-center rounded-[6px] bg-[#ECECEC]">
                                    <img src="/assets/images/bank.png" alt="Bank Account" className="w-auto h-5 xl:w-auto xl:h-6 lg:w-auto lg:h-6 md:w-auto md:h-6 p-[2px]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[12px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[#6C6C6C] font-semibold">Bank Account</span>
                                    <span className="text-[10px] xl:text-[14px] lg:text-[14px] md:text-[14px] font-semibold text-[#A5A5A5]">0013 ************980</span>
                                </div>
                            </div>
                            {selectedMethod === "bank" ? (
                                <img src="/assets/icons/checked.png" alt="Checked" className="w-auto h-4" />
                            ) : (
                                <div className="w-4 h-4 border-2 border-yellow rounded-full"></div>
                            )}
                        </div>
                    </div>

                    <div>
                        <div
                            className={`flex items-center  p-3 xl:p-6 lg:p-6 md:p-6 justify-between rounded-[16px] px-[10px] xl:px-[30px] lg:px-[30px] md:px-[30px] bg-[#ffffff] cursor-pointer ${selectedMethod === "visa" ? "ring-2 ring-transparent" : ""
                                }`}
                            onClick={() => handleMethodChange("visa")}
                        >
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 xl:w-12 xl:h-12 lg:w-12 lg:h-12 md:w-12 md:h-12  flex items-center justify-center rounded-[6px] bg-[#ECECEC]">
                                    <img src="/assets/images/visa.png" alt="Visa" className="w-auto h-4 xl:w-auto xl:h-6 lg:w-auto lg:h-6 md:w-auto md:h-6 p-[2px]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[12px] xl:text-[16px] lg:text-[16px] md:text-[16px] text-[#6C6C6C] font-semibold">Visa</span>
                                    <span className="text-[10px] xl:text-[14px] lg:text-[14px] md:text-[14px] font-semibold text-[#A5A5A5]">9343 **** **** 2455</span>
                                </div>
                            </div>
                            {selectedMethod === "visa" ? (
                                <img src="/assets/icons/checked.png" alt="Checked" className="w-auto h-4" />
                            ) : (
                                <div className="w-4 h-4 border-2 border-yellow rounded-full"></div>
                            )}
                        </div>
                    </div>

                    <div>
                        <div
                            className={`flex items-center p-3 xl:p-6 lg:p-6 md:p-6 justify-between rounded-[16px] px-[10px] xl:px-[30px] lg:px-[30px] md:px-[30px] bg-[#ffffff] cursor-pointer ${selectedMethod === "mastercard" ? "ring-2 ring-transparent" : ""
                                }`}
                            onClick={() => handleMethodChange("mastercard")}
                        >
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 xl:w-12 xl:h-12 lg:w-12 lg:h-12 md:w-12 md:h-12 flex items-center justify-center rounded-[6px] bg-[#ECECEC]">
                                    <img src="/assets/images/mastercard.png" alt="MasterCard" className="w-auto h-5 xl:w-auto xl:h-6 lg:w-auto lg:h-6 md:w-auto md:h-6 p-[2px]" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[12px] xl:text-[16px] lg:text-[16px] md:text-[12px] text-[#6C6C6C] font-semibold">MasterCard</span>
                                    <span className="text-[10px] xl:text-[16px] lg:text-[16px] md:text-[16px] font-semibold text-[#A5A5A5]">3043 **** **** 7859</span>
                                </div>
                            </div>
                            {selectedMethod === "mastercard" ? (
                                <img src="/assets/icons/checked.png" alt="Checked" className="w-auto h-4" />
                            ) : (
                                <div className="w-4 h-4 border-2 border-yellow rounded-full"></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PaymentCard;
;
