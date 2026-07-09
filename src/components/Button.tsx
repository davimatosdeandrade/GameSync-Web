interface ButtonProps {
    icon: React.ReactNode;
    text?: string;
    size: "default" | "featured";
    active?: boolean;
    options?: string[];
    onClick?: () => void;
}

export default function Button({ icon, text, size, active, onClick, options }: ButtonProps) {
    const buttonSize = {
        default: "w-[37px]",
        featured: "w-full",
    }

    return (
        <div className={`${buttonSize[size]} h-[37px] relative transition`}>
            <div className={`absolute z-2 ${buttonSize[size]} bg-red-900 transition`}>
                <button
                    onClick={onClick}
                    className={`flex ${buttonSize[size]} justify-between items-center bg-button h-[37px] px-[10px] text-[14px] font-[400] rounded-[20px] transition shadow-[0_0_0_2px] shadow-button hover:shadow-icon text-text2 hover:text-icon hover:cursor-pointer ${active && "shadow-icon"}`}>
                    {size === "featured" && (
                        <>
                        {text}
                        </>
                    )}
                    {icon}
                </button>
                {options != null &&
                <div className="w-full bg-purple-900 rounded-b-[20px]">
                    {options.map((option) => (
                        <div>
                            {option}
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
}
