import React, { useState } from "react";

const Back: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleBack = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                className="border-dashed border-2 border-gray-400 p-6 w-[250px] h-[100px] md:w-[250px] md:h-[200px] lg:w-[250px] lg:h-[200px] xl:w-[250px] xl:h-[200px] flex flex-col items-center justify-center cursor-pointer relative bg-cover bg-center"
                style={{ backgroundImage: image ? `url(${image})` : 'none' }}
                onClick={() => document.getElementById("back")?.click()}
            >
                {!image ? (
                    <>
                        <img
                            src="/assets/images/camera.png"
                            alt="Upload Icon"
                            className="w-auto md:w-auto lg:w-auto xl:w-auto h-6 xl:h-10 lg:h-10 md:h-10 mb-2"
                        />
                        <span className="text-primary font-semibold  xl:text-[18px] lg:text-[18px] md:text-[18px] text-[14px]">Back</span>
                        </>
                ) : (
                    <>
                        <div className="absolute inset-0 flex items-center justify-center space-x-4">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <img
                                    src="/assets/icons/edit.png"
                                    alt="Edit"
                                    className="w-3 h-3 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6"
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
                    id="back"
                    className="hidden"
                    accept="image/*"
                    onChange={handleBack}
                />
            </div>
        </div>
    );
};

export default Back;
