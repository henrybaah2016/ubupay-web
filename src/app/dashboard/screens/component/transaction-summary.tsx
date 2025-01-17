import React, { useState } from "react";

const TransactionSummary = () => {
    const [dropdownVisible, setDropdownVisible] = useState<number | null>(null);

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
            status: "Cancel",
        },
    ];

    const toggleDropdown = (id: number) => {
        setDropdownVisible(dropdownVisible === id ? null : id);
    };

    return (
        <div className="bg-[#F9F9F9] rounded-lg p-4 mx-[0px] xl:mx-[30px] lg:mx-[30px] md:mx-[30px]">
            <table className="w-full hidden md:table table-auto">
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
                    {data.map((row) => (
                        <tr key={row.id} className="border-b border-gray-200">
                            <td className="px-4 py-6 flex items-center space-x-4">
                                <img
                                    src={row.image}
                                    alt={row.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <span className="text-[14px] text-[#636464] font-semibold">
                                    {row.name}
                                </span>
                            </td>
                            <td className="px-4 py-6 text-[#636464] text-[14px] font-semibold">
                                {row.amount}
                            </td>
                            <td className="px-4 py-6 text-[#636464] text-[14px] font-semibold">
                                {row.date}
                            </td>
                            <td className="px-4 py-6 text-[#636464] text-[14px] font-semibold">
                                {row.type}
                            </td>
                            <td className="px-4 py-6">
                                <button
                                    className={`px-4 py-2 rounded-full font-semibold text-sm ${
                                        row.status === "Pending"
                                            ? "bg-[#ECECEC] text-[#636464]"
                                            : row.status === "Sent"
                                            ? "bg-[#BDEBD0] text-[#17D062]"
                                            : "bg-[#F6CCCC] text-[#FF9A9A]"
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
                                        className="w-auto h-4 xl:w-auto xl:h-4 lg:w-auto lg:h-4 md:w-auto md:h-8 cursor-pointer"
                                        onClick={() => toggleDropdown(row.id)}
                                    />
                                    {dropdownVisible === row.id && (
                                        <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg z-10">
                                            <ul className="py-2">
                                                <li className="px-4 py-2 text-[14px] text-[#636464] font-semibold hover:bg-gray-100 cursor-pointer">
                                                    View
                                                </li>
                                                <li className="px-4 py-2 text-[14px] text-[#636464] font-semibold hover:bg-gray-100 cursor-pointer">
                                                    Delete
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="md:hidden  space-y-4">
                {data.map((row) => (
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
                                    className={`px-2 py-1 rounded-full font-semibold text-[10px] ${
                                        row.status === "Pending"
                                            ? "bg-[#ECECEC] text-[#636464]"
                                            : row.status === "Sent"
                                            ? "bg-[#BDEBD0] text-[#17D062]"
                                            : "bg-[#F6CCCC] text-[#FF9A9A]"
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
    );
};

export default TransactionSummary;
