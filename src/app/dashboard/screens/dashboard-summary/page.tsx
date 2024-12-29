"use client"
import OverallTransferCard from "../component/overall-card";
import QuickSend from "../component/quick-send";
import TransactionSummary from "../component/transaction-summary";



const DashboardSummary = () => {
    return (
        <>
            <OverallTransferCard />
            <QuickSend />
            <TransactionSummary />
        </>
    );
};

export default DashboardSummary;
