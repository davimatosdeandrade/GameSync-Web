interface ButtonProps {
    icon: React.ReactNode;
    text?: string;
    size: "default" | "featured";
    active?: boolean;
    onClick?: () => void;
}

export default function Button({ icon, text, size, active, onClick }: ButtonProps) {
    const buttonSize = {
        default: "justify-center items-center w-[37px]",
        featured: "justify-between items-center flex-1 px-[10px]",
    }

    return (
        <button
            onClick={onClick}
            className={`group flex ${buttonSize[size]} bg-button h-[37px] text-[14px] font-[400] rounded-[20px] transition flex-shrink-0 shadow-[0_0_0_2px] shadow-button hover:shadow-icon text-text2 hover:text-icon hover:cursor-pointer ${active && "shadow-icon"}`}>
            {size === "featured" && (
                <>
                {text}
                </>
            )}
            {icon}
        </button>
    );
}
