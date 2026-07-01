interface ButtonProps {
    icon: React.ReactNode,
    text?: string,
    size?: "default" | "featured",
}

export default function Button({ icon, text, size = "default" }: ButtonProps) {
    const buttonSize = {
        default: "justify-center items-center w-[40px]",
        featured: "justify-between items-center flex-1 px-[10px]",
    }

    return (
        <button className={`group flex ${buttonSize[size]} bg-c3 h-[40px] rounded-[10px] transition flex-shrink-0 shadow-[0_0_0_2px] shadow-c1 hover:shadow-c4 text-c5 hover:text-c4 hover:cursor-pointer`}>
            {size === "featured" && (
                <>
                {text}
                </>
            )}
            {icon}
        </button>
    );
}
