interface ButtonProps {
    icon: React.ReactNode,
    text?: string,
    size?: "default" | "featured",
}

export default function Button({ icon, text, size = "default" }: ButtonProps) {
    const buttonSize = {
        default: "justify-center items-center w-[40px]",
        featured: "justify-between items-center fill px-[10px]",
    }

    return (
        <button className={`group flex ${buttonSize[size]} bg-c3 h-[40px] rounded-[10px] transition flex-shrink-0 border-[2px] border-c3 hover:border-c4 text-c5 hover:text-c4 hover:cursor-pointer`}>
            {text}
            {icon}
        </button>
    );
}
