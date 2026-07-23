interface BackgroundProps {
    show: boolean;
    z: number;
    elements: React.ReactNode;
}

export default function Background({ show, z, elements }: BackgroundProps) {
    return(
        <>
        {show &&
        <div className={`fixed z-${z} top-0 right-0 bg-black/70 w-screen h-screen py-[20px] px-[40px]`}>
            {elements}
        </div>}
        </>
    )
}