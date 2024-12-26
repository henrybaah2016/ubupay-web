import React from "react";
import HorizontalNavbar from "../../component/horizontal-nav-bar";
import VerticalNavbar from "../../component/vertical-nav-bar";
import TransactionSummary from "../../component/transaction-summary";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <div className="h-full">
                <VerticalNavbar />
            </div>

            <div className="flex-1 flex flex-col">
                <HorizontalNavbar />

                <div className="p-6 flex-1 overflow-y-auto">
                    {/* <TransactionSummary /> */}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
