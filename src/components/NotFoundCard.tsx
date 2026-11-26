interface NotFoundCardProps {
    icon: React.ReactNode;
    title: string;
    message: string;
    border?: boolean;
    button?: React.ReactNode;
}

export default function NotFoundCard({ icon, title, message, border = true, button }: NotFoundCardProps) {
    const content = (
        <div
            className={`flex flex-col items-center justify-center gap-[6px] w-full h-full bg-main2 rounded-[20px] p-[20px] text-center ${
                !border ? "flex-1" : ""
            }`}
        >
            <div className="flex items-center justify-center text-text2">
                {icon}
            </div>
            <div className="flex flex-col gap-[6px]">
                <h1>{title}</h1>
                <h4>{message}</h4>
            </div>
            {button && <div className="mt-[10px]">{button}</div>}
        </div>
    );

    if (!border) return content;

    return (
        <div className="flex w-full hSizeCard bg-main rounded-[20px] p-[20px]">
            {content}
        </div>
    );
}
