"use client";
import React, { useState } from "react";

const Transaction = () => {
    const [activeTab, setActiveTab] = useState<"all" | "transfer" | "received">("all");

    const data = [
        {
            id: 1,
            name: "John Cole",
            amount: "$10,000",
            date: "3 days ago",
            type: "Bank Transfer",
            image: "/assets/images/face-1.png",
            status: "Pending",
        },
        {
            id: 2,
            name: "Sarah Brown",
            amount: "$10,000",
            date: "3 days ago",
            type: "Bank Transfer",
            image: "/assets/images/face-2.png",
            status: "Sent",
        },
        {
            id: 3,
            name: "Mike Davis",
            amount: "$5,000",
            date: "1 day ago",
            type: "Card Payment",
            image: "/assets/images/face-3.png",
            status: "Received",
        },
    ];

    const filteredData = {
        all: data,
        transfer: data.filter((item) => item.type === "Bank Transfer"),
        received: data.filter((item) => item.type === "Card Payment"),
    };

    return (
        <div className="flex flex-col space-y-4 mx-[0px] xl:mx-[30px] lg:mx-[30px] md:mx-[30px]">
            <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row justify-left xl:justify-between lg:justify-between md:justify-between items-left xl:items-center lg:items-center md:items-center mb-6">
                <h2 className="text-[14px] xl:text-[18px] lg:text-[18px] md;text-[18px]  font-bold text-[#636464]">All Transactions</h2>
                <div className="flex space-x-1 xl:space-x-4 lg:space-x-4 md:space-x-4 mt-4 xl:mt-0 lg:mt-0 md:mt-0">
                    <button
                        className={`px-3 py-1  xl:px-8 xl:py-4 lg:px-8 lg:py-4 md:px-8 md:py-4 rounded-full font-semibold text-sm xl:text-[16px] lg:text-[16px] md:text-[16px] ${activeTab === "all" ? "bg-primary text-white text-[11px]" : "bg-[#ffffff] text-[#636464] text-[11px]"
                            }`}
                        onClick={() => setActiveTab("all")}
                    >
                        All
                    </button>
                    <button
                        className={`px-3 py-1  xl:px-8 xl:py-4 lg:px-8 lg:py-4 md:px-8 md:py-4  rounded-full font-semibold text-sm xl:text-[16px] lg:text-[16px] md:text-[16px] ${activeTab === "transfer" ? "bg-primary text-white text-[11px]" : "bg-[#ffffff] text-[#636464] text-[11px]"
                            }`}
                        onClick={() => setActiveTab("transfer")}
                    >
                        Transfers
                    </button>
                    <button
                        className={`px-3 py-1  xl:px-8 xl:py-4 lg:px-8 lg:py-4 md:px-8 md:py-4 rounded-full font-semibold text-sm xl:text-[16px] lg:text-[16px] md:text-[16px] ${activeTab === "received" ? "bg-primary text-white text-[11px]" : "bg-[#ffffff] text-[#636464] text-[11px]"} `}
                        onClick={() => setActiveTab("received")}
                    >
                        Received
                    </button>
                </div>
            </div>
            <div className="bg-[#F9F9F9] rounded-lg p-4">
                <table className="w-full table-auto hidden md:table">
                    <thead>
                        <tr className="text-left">
                            <th className="px-4 py-2">Receiver</th>
                            <th className="px-4 py-2">Amount</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Type</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData[activeTab].map((row: any) => (
                            <tr key={row.id} className="border-b border-gray-200 relative">
                                <td className="px-4 py-6 flex items-center space-x-4">
                                    <img
                                        src={row.image}
                                        alt={row.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <span className="text-[14px] text-[#636464] font-semibold">{row.name}</span>
                                </td>
                                <td className="px-4 py-6 text-[#636464] text-[14px] font-semibold">{row.amount}</td>
                                <td className="px-4 py-6 text-[#636464] text-[14px] font-semibold">{row.date}</td>
                                <td className="px-4 py-6 text-[#636464] text-[14px] font-semibold">{row.type}</td>
                                <td className="px-4 py-6">
                                    <button
                                        className={`px-4 py-2 rounded-full font-semibold text-sm ${row.status === "Pending"
                                            ? "bg-[#ECECEC] text-[#636464]"
                                            : row.status === "Sent"
                                                ? "bg-[#BDEBD0] text-[#17D062]"
                                                : "bg-[#ffeabe] text-yellow"
                                            }`}
                                    >
                                        {row.status}
                                    </button>
                                </td>
                                <td className="px-4 py-6">
                                    <div className="relative">
                                        <img
                                            src="/assets/icons/vert-more.svg"
                                            alt="Menu"
                                            className="w-auto h-4 cursor-pointer"
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Mobile View */}
                <div className="md:hidden space-y-4">
                    {filteredData[activeTab].map((row: any) => (
                        <div
                            key={row.id}
                            className=" flex flex-col space-y-2"
                        >
                            <div className="flex items-center justify-between space-x-4">
                                <img
                                    src={row.image}
                                    alt={row.name}
                                    className="w-6 h-6 rounded-full"
                                />
                                <div className="flex-1">
                                    <div className="text-[14px] text-[#636464] font-semibold">
                                        {row.name}
                                    </div>
                                    <div className="text-[12px] text-[#A5A5A5]">{row.date}</div>
                                </div>


                                <div className="flex-2 mt-2">
                                    <div className="text-[14px] text-[#636464] font-semibold">
                                        {row.amount}
                                    </div>
                                    <button
                                        className={`px-2 py-1 rounded-full font-semibold text-[10px] ${row.status === "Pending"
                                                ? "bg-[#ECECEC] text-[#636464]"
                                                : row.status === "Sent"
                                                    ? "bg-[#BDEBD0] text-[#17D062]"
                                                    : "bg-[#fae7bb] text-yellow"
                                            }`}
                                    >
                                        {row.status}
                                    </button>
                                </div>
                            </div>

                            <hr className="border-t border-gray-100 my-2" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Transaction;
