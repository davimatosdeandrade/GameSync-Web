"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { OverlayScrollbars } from "overlayscrollbars";
import Button from "./Button";
import { X } from "lucide-react";

interface BackgroundProps {
    show: boolean;
    onClose: () => void;
    hideCursor?: boolean;
    elements?: React.ReactNode | ((showControls: boolean) => React.ReactNode);
}

export default function Background({ show, onClose, hideCursor = false, elements }: BackgroundProps) {
    const [showControls, setShowControls] = useState(true);
    const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

    const clearHideTimer = useCallback(() => {
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current);
            hideTimerRef.current = null;
        }
    }, []);

    const scheduleHide = useCallback(() => {
        clearHideTimer();
        hideTimerRef.current = setTimeout(() => {
            setShowControls(false);
        }, 2000);
    }, [clearHideTimer]);

    useEffect(() => {
        if (!show) {
            clearHideTimer();
            return;
        }

        setShowControls(true);
        scheduleHide();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);

        const osInstance = OverlayScrollbars(document.body);
        if (osInstance) {
            const prev = osInstance.options();
            osInstance.options({
                overflow: { y: "hidden" },
                scrollbars: { visibility: "hidden" },
            });

            return () => {
                clearHideTimer();
                window.removeEventListener("keydown", handleKeyDown);
                osInstance.options({
                    overflow: { y: prev.overflow.y },
                    scrollbars: { visibility: prev.scrollbars.visibility },
                });
            };
        }

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            clearHideTimer();
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [show, onClose, clearHideTimer, scheduleHide]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setShowControls(true);
        const isOverControl = Boolean((e.target as HTMLElement).closest("[data-bg-control]"));

        if (isOverControl) {
            clearHideTimer();
        } else {
            scheduleHide();
        }
    };

    if (!show) return null;

    return (
        <div
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={scheduleHide}
            className={`fixed flex flex-col items-center justify-center z-15 top-0 right-0 bg-black/70 w-screen h-screen ${
                hideCursor && !showControls ? "cursor-none [&_*]:cursor-none!" : ""
            }`}
        >
            <div data-bg-control>
                <Button
                    icon={<X size={14} />}
                    onClick={onClose}
                    position={`absolute top-[20px] right-[40px] z-20 transition-opacity duration-300 ${
                        showControls ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                    cn="bg-button/50 shadow-button/50"
                    size={3}
                />
            </div>
            {typeof elements === "function" ? elements(showControls) : elements}
        </div>
    );
}
