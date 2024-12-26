import React from "react";

const TransactionSummary = () => {
    const data = [
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: 3, name: "Alice Johnson", email: "alice@example.com", role: "User" },
    ];

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        <tr key={row.id} className="border-b">
                            <td className="px-4 py-2">{row.id}</td>
                            <td className="px-4 py-2">{row.name}</td>
                            <td className="px-4 py-2">{row.email}</td>
                            <td className="px-4 py-2">{row.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionSummary;
