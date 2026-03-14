"use client";

import { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

type VideoModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
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

    return (
        <div
            id="modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Video modal"
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
        >
            <div
                className="relative p-2 md:p-4 rounded-lg shadow-lg w-[95%] sm:w-[90%] md:w-full max-w-4xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute -top-12 md:-top-10 right-0 md:right-2"
                    aria-label="Close video modal"
                    onClick={onClose}
                >
                    <RxCross1 className="text-white cursor-pointer text-2xl md:text-3xl" />
                </button>
                <div className="relative w-full aspect-video">
                    <iframe
                        className="absolute inset-0 w-full h-full rounded-md md:rounded-lg"
                        src="https://www.youtube.com/embed/shsVQvHUTxw"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
}
