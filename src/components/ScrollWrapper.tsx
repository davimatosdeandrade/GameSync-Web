"use client";
import { useEffect } from "react";
import { useOverlayScrollbars } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";

interface ScrollWrapperProps {
    children: React.ReactNode
}

export default function ScrollWrapper({ children }: ScrollWrapperProps) {
    const [initialize] = useOverlayScrollbars({
        options: {
            scrollbars: {
                autoHide: "never",
            },
            overflow: {
                x: "hidden",
            }
        },
        defer: true,
    });

    useEffect(() => {
        initialize(document.body);
    }, [initialize]);

    return <>{children}</>;
}