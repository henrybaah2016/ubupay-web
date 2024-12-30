import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const PaymentMethodModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white w-full max-w-md rounded-lg shadow-lg p-6"
                onClick={(event) => event.stopPropagation()} 
            >
                {children}
            </div>
        </div>
    );
};

export default PaymentMethodModal;
