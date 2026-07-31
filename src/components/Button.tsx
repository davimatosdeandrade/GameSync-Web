"use client"
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type ButtonProps = {
    text?: string;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    position?: string;
    cn?: string;
} & (
    | { options: string[]; icon?: never }
    | { options?: never; icon: React.ReactNode }
)

export default function Button({ icon, text, active, disabled, onClick, position = "relative", options, cn }: ButtonProps) {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className={`${text != null ? "w-full" : "w-[37px]"} ${position} h-[37px]`}>
            <div className={`absolute z-2 ${text != null ? "w-full" : "w-[37px]"}`}>
                <button
                    type="button"
                    onClick={options != null ? () => setShowOptions(!showOptions) : onClick}
                    disabled={disabled}
                    className={`flex ${cn} ${text != null ? "w-full justify-between" : "w-[37px] justify-center"} 
                    items-center bg-button h-[37px] px-[10px] text-[14px] font-[400] rounded-[20px] transition duration-300 
                    shadow-[0_0_0_2px] shadow-button hover:shadow-icon text-text2 hover:text-icon hover:cursor-pointer 
                    disabled:opacity-0 disabled:cursor-not-allowed ${showOptions && "shadow-icon rounded-b-[0px]"} ${active && "shadow-icon"}`}
                >
                    {text != null && (
                        <> {text} </>
                    )}
                    {icon}
                    {options != null &&
                    <ChevronDown size={14} />}
                </button>
                {(options != null && showOptions) &&
                <div className="w-full shadow-[0_0_0_2px] bg-button shadow-icon rounded-b-[20px]">
                    {options.map((option) => (
                        <div key={option} onClick={onClick} className="flex items-center w-full h-[37px] px-[10px]">
                            <h4>{option}</h4>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
}