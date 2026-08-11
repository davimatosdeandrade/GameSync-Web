interface BackgroundProps {
    show: boolean;
    elements?: React.ReactNode;
}

export default function Background({ show, elements }: BackgroundProps) {
    return(
        <>
        {show &&
        <div className={`fixed flex flex-col z-10 top-0 right-0 bg-black/70 w-screen h-screen pb-[20px]`}>
            {elements}
        </div>}
        </>
    )
}