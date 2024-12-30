"use client"
import React, { useState } from "react";
import Momo from "./component/Momo";
import Bank from "./component/bank";
import PaymentMethodModal from "./component/payment-method-modal";
import { useRouter } from "next/navigation";

const CreateTransaction = () => {
    const [isSourceChecked, setIsSourceChecked] = useState(false);
    const [selectedReceiverMethod, setSelectedReceiverMethod] = useState("bank");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedMethod, setSelectedMethod] = useState("bank");
    const router = useRouter()
    
    const handleSourceCheck = () => {
        setIsSourceChecked(!isSourceChecked);
    };

    const handleReceiverMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedReceiverMethod(event.target.value);
    };

   
       const handleSubmit = (e: React.FormEvent) => {
           e.preventDefault();
           router.push("/dashboard/screens/create-transaction/amount-and-rate");
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
        <div className=" mx-[120px]" >
            <span className="text-[16px] font-semibold  text-dark">Transfer to recipient</span>
            <div className="p-6 rounded-[16px] px-[80px] mt-6 py-[40px] bg-[#F9F9F9]">
                <span className="text-sm font-semibold  text-dark">SOURCE ACCOUNT</span>

                <div className="flex items-center space-x-4 mb-6 p-6  mt-4 justify-between rounded-[16px] px-[30px] bg-[#ffffff]">

                    <div className="flex space-x-4">
                        <div
                            className="w-12 h-12 flex items-center justify-center rounded-[6px] bg-[#ECECEC]">
                            <img src="/assets/images/visa.png" alt="Source Account" className="w-auto h-4 p-[2px]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[16px] text-[#6C6C6C] font-semibold">Cash Transfer</span>
                            <span className="text-[14px] font-semibold text-[#A5A5A5]">3043 **** **** 7859</span>
                        </div>
                    </div>

                    <div className="ml-auto">
                        <img src="/assets/icons/checked.png" alt="Checked" className="w-auto h-4" />
                    </div>
                </div>

                <div className="text-right mb-6">
                    <span className="text-sm text-primary font-semibold cursor-pointer"
                        onClick={handleOpenModal}>Change Method?</span>
                </div>

                <PaymentMethodModal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <div className="flex flex-col space-y-2">
                        <div>
                            <div
                                className={`flex items-center p-6 justify-between rounded-[16px] px-[30px] bg-[#ffffff] cursor-pointer ${selectedMethod === "bank" ? "ring-2 ring-transparent" : ""
                                    }`}
                                onClick={() => handleMethodChange("bank")}
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
                                {selectedMethod === "bank" ? (
                                    <img src="/assets/icons/checked.png" alt="Checked" className="w-auto h-4" />
                                ) : (
                                    <div className="w-4 h-4 border-2 border-yellow rounded-full"></div>
                                )}
                            </div>
                            <div className="border-b border-gray-100"></div>
                        </div>

                        <div>
                            <div
                                className={`flex items-center p-6 justify-between rounded-[16px] px-[30px] bg-[#ffffff] cursor-pointer ${selectedMethod === "visa" ? "ring-2 ring-transparent" : ""
                                    }`}
                                onClick={() => handleMethodChange("visa")}
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
                                {selectedMethod === "visa" ? (
                                    <img src="/assets/icons/checked.png" alt="Checked" className="w-auto h-4" />
                                ) : (
                                    <div className="w-4 h-4 border-2 border-yellow rounded-full"></div>
                                )}
                            </div>
                            <div className="border-b border-gray-100"></div>
                        </div>

                        <div>
                            <div
                                className={`flex items-center p-6 justify-between rounded-[16px] px-[30px] bg-[#ffffff] cursor-pointer ${selectedMethod === "mastercard" ? "ring-2 ring-transparent" : ""
                                    }`}
                                onClick={() => handleMethodChange("mastercard")}
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
                                {selectedMethod === "mastercard" ? (
                                    <img src="/assets/icons/checked.png" alt="Checked" className="w-auto h-4" />
                                ) : (
                                    <div className="w-4 h-4 border-2 border-yellow rounded-full"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </PaymentMethodModal>



                <span className="text-sm font-semibold   text-dark">RECIEVER ACCOUNT</span>

                <div className="mb-6 mt-4">
                    <div className="flex space-x-36">
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                value="bank"
                                checked={selectedReceiverMethod === "bank"}
                                onChange={handleReceiverMethodChange}
                                className="form-radio"
                            />
                            <span className="font-semibold text-[14px] text-[#A5A5A5]">Bank Account</span>
                        </label>
                        <label className="flex items-center space-x-2">
                            <input
                                type="radio"
                                value="mobileMoney"
                                checked={selectedReceiverMethod === "mobileMoney"}
                                onChange={handleReceiverMethodChange}
                                className="form-radio "
                            />
                            <span className="font-semibold text-[14px] text-[#A5A5A5]">Mobile Money</span>
                        </label>
                    </div>

                    {selectedReceiverMethod === "bank" && (
                        <Bank />
                    )}

                    {selectedReceiverMethod === "mobileMoney" && (
                        <Momo />
                    )}
                </div>




                <button
                onClick={handleSubmit}
                    type="submit"
                    className="w-full bg-primary  h-[55px] text-white py-3 mt-[30px] rounded-lg font-semibold hover:bg-primary-dark transition duration-300"
                >
                    Next
                </button>
            </div>
        </div>

    );
};

export default CreateTransaction;
function setIsModalOpen(arg0: boolean) {
    throw new Error("Function not implemented.");
}

