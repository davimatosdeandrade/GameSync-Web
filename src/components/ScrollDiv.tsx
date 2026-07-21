"use client";
import { useEffect, useRef } from "react";
import { useOverlayScrollbars } from "overlayscrollbars-react";

export default function ScrollDiv({ children, className }: { children: React.ReactNode, className?: string }) {
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
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}