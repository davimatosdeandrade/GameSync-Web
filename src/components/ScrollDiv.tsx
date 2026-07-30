"use client";
import { useEffect, useRef } from "react";
import { useOverlayScrollbars } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";

interface ScrollDivProps {
    children: React.ReactNode;
}

export default function ScrollDiv({ children }: ScrollDivProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [initialize] = useOverlayScrollbars({
        options: {
            scrollbars: {
                autoHide: "never",
            },
        },
        defer: true,
    });

    useEffect(() => {
        if (ref.current) initialize(ref.current);
    }, [initialize]);

    return (
        <div ref={ref} className={`flex-1 bg-main2 rounded-[20px] p-[14px] overflow-auto`}>
            {children}
        </div>
    );
}