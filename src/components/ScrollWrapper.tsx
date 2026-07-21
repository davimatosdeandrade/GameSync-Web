"use client";
import { useEffect } from "react";
import { useOverlayScrollbars } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
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