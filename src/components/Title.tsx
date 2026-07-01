interface TitleProps {
    title?: string;
    buttons?: React.ReactNode;
}

export default function Title({ title, buttons }: TitleProps) {
    return(
        <div className="flex items-center w-full h-[40px] gap-[10px] px-[20px]">
            {title != null && (
                <h1>
                    {title}
                </h1>
            )}
            {buttons}       
        </div>
    )
}