interface TitleProps {
    title: string;
    buttons?: React.ReactNode;
    sticky?: boolean;
}

export default function Title({ title, buttons, sticky = false }: TitleProps) {
    return(
        <div className={`${sticky && "sticky top-0 z-3"} flex items-center w-full h-[77px] gap-[20px] px-[40px]`}>
            {title != null && (
                <>
                <div className="w-[20px] h-[37px] rounded-full bg-button"/>
                <h1>
                    {title}
                </h1>
                </>
            )}
            {buttons}       
        </div>
    )
}