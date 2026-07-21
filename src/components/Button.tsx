"use client"
import { useState } from "react";

interface ButtonProps {
    icon: React.ReactNode;
    text?: string;
    active?: boolean;
    options?: string[];
    onClick?: () => void;
    cn?: string;
}

export default function Button({ icon, text, active, onClick, options, cn }: ButtonProps) {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className={`${text != null ? "w-full" : "w-[37px]"} h-[37px] relative`}>
            <div className={`absolute z-2 ${text != null ? "w-full" : "w-[37px]"}`}>
                <button
                    onClick={options != null ? () => setShowOptions(!showOptions) : onClick}
                    className={`flex ${cn} ${text != null ? "w-full justify-between" : "w-[37px] justify-center"} items-center bg-button h-[37px] px-[10px] text-[14px] font-[400] rounded-[20px] transition duration-300 shadow-[0_0_0_2px] shadow-button hover:shadow-icon text-text2 hover:text-icon hover:cursor-pointer ${showOptions && "shadow-icon rounded-b-[0px]"} ${active && "shadow-icon"}`}>
                    {text != null && (
                        <> {text} </>
                    )}
                    {icon}
                </button>
                {(options != null && showOptions) &&
                <div className="w-full shadow-[0_0_0_2px] bg-button shadow-icon rounded-b-[20px]">
                    {options.map((option) => (
                        <div onClick={onClick} className="flex items-center w-full h-[37px] px-[10px]">
                            {option}
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
}
