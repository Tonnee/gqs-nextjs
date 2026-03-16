"use client";

import { useState, useEffect, useCallback } from "react";
import { IoArrowUp } from "react-icons/io5";

const SCROLL_THRESHOLD_VH = 2;

export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = useCallback(() => {
        const threshold = (window.innerHeight * SCROLL_THRESHOLD_VH) / 100;
        setIsVisible(window.scrollY > threshold);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!isVisible) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-xl active:scale-95"
        >
            <IoArrowUp aria-hidden="true" className="text-xl" />
        </button>
    );
}
