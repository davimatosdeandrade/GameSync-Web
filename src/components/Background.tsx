interface BackgroundProps {
    show: boolean;
    z: number;
    elements?: React.ReactNode;
}

export default function Background({ show, z, elements }: BackgroundProps) {
    return(
        <>
        {show &&
        <div className={`fixed flex flex-col z-${z} top-0 right-0 bg-black/70 w-screen h-screen pb-[20px]`}>
            {elements}
        </div>}
        </>
    )
}