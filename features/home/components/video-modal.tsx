"use client";

import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MdOpenInNew } from "react-icons/md";

type VideoModalProps = {
    isOpen: boolean;
    onClose: () => void;
    videoUrl?: string;
};

export default function VideoModal({
    isOpen,
    onClose,
    videoUrl = "https://www.youtube.com/embed/pQ2Fe1-zDrI",
}: VideoModalProps) {
    const [origin, setOrigin] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setOrigin(window.location.origin);
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    // Extract Video ID from various YouTube URL formats
    const extractYouTubeId = (url: string): string => {
        if (!url) return "pQ2Fe1-zDrI";
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : "pQ2Fe1-zDrI";
    };

    const videoId = extractYouTubeId(videoUrl);
    const nocookieEmbedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0${origin ? `&origin=${encodeURIComponent(origin)}` : ""}`;
    const directWatchUrl = `https://www.youtube.com/watch?v=${videoId}`;

    return (
        <div
            id="modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Video modal"
            className="fixed inset-0 bg-black/85 flex items-center justify-center z-50 p-4 font-poppins"
            onClick={handleOverlayClick}
        >
            <div
                className="relative p-2 md:p-4 rounded-xl shadow-2xl w-[95%] sm:w-[90%] md:w-full max-w-4xl bg-primary-soft/95 border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute -top-12 md:-top-10 right-0 md:right-2 text-white/80 hover:text-white transition-colors"
                    aria-label="Close video modal"
                    onClick={onClose}
                >
                    <RxCross1 className="cursor-pointer text-2xl md:text-3xl" />
                </button>
                <div className="relative w-full aspect-video rounded-md md:rounded-lg overflow-hidden bg-black">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={nocookieEmbedUrl}
                        title="GRE Quant School Trailer Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
                <div className="mt-3 flex justify-between items-center px-1">
                    <span className="text-xs text-white/60">
                        GRE Quant School Trailer
                    </span>
                    <a
                        href={directWatchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent font-semibold hover:underline flex items-center gap-1"
                    >
                        <span>Watch on YouTube</span>
                        <MdOpenInNew className="text-sm" />
                    </a>
                </div>
            </div>
        </div>
    );
}
