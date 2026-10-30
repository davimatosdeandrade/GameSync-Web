interface TitleProps {
    name: string;
    buttons?: React.ReactNode;
}

export default function Title({ name, buttons }: TitleProps) {
    return (
        <div className="flex items-center justify-between w-full h-[77px] px-[37px]">
            <div className="flex items-center gap-[20px]">
                {name != null && (
                    <>
                        <div className="w-[20px] h-[37px] rounded-full bg-main"/>
                        <h1 className="[background:radial-gradient(ellipse,rgba(0,0,0,1)_0%,transparent_70%)]">
                            {name}
                        </h1>
                    </>
                )}
            </div>

            <div className="flex gap-[20px] items-center">
                {buttons}      
            </div>     
        </div>
    );
}