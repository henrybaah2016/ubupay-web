import React, { useState } from "react";

const Front: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleFront = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex w-1/2 justify-center items-center">
            <div
                className="border-dashed border-2 border-gray-400 p-6 w-[250px] h-[200px] flex flex-col items-center justify-center cursor-pointer relative bg-cover bg-center"
                style={{ backgroundImage: image ? `url(${image})` : 'none' }}
                onClick={() => document.getElementById("front")?.click()}
            >
                {!image ? (
                    <>
                        <img
                            src="/assets/images/camera.png"
                            alt="Upload Icon"
                            className="w-auto h-10 mb-2"
                        />
                        <span className="text-primary font-semibold text-[18px]">Front</span>
                    </>
                ) : (
                    <>
                        <div className="absolute inset-0 flex items-center justify-center space-x-4">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <img
                                    src="/assets/icons/edit.png"
                                    alt="Edit"
                                    className="w-6 h-6"
                                />
                            </div>

                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <img
                                    src="/assets/icons/delete.png"
                                    alt="Delete"
                                    className="w-6 h-6"
                                />
                            </div>
                        </div>
                    </>
                )}

                <input
                    type="file"
                    id="front"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFront}
                />
            </div>
        </div>
    );
};

export default Front;
