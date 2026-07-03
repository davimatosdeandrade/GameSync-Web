interface TitleProps {
    title?: string;
    buttons?: React.ReactNode;
}

export default function Title({ title, buttons }: TitleProps) {
    return(
        <div className="flex items-center w-full h-[77px] gap-[20px] px-[40px]">
            {title != null && (
                <h1>
                    {title}
                </h1>
            )}
            {buttons}       
        </div>
    )
}