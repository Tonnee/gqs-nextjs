"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: Array<{ id: number; src: string; alt: string }>;
    currentIndex: number;
    onNavigate: (newIndex: number) => void;
}

export default function ImageModal({
    isOpen,
    onClose,
    images,
    currentIndex,
    onNavigate,
}: ImageModalProps) {
    // Handle keyboard navigation (Escape, ArrowLeft, ArrowRight)
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") {
                onClose();
            } else if (e.key === "ArrowLeft") {
                onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
            } else if (e.key === "ArrowRight") {
                onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
            }
        },
        [isOpen, onClose, onNavigate, currentIndex, images.length]
    );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen || !images[currentIndex]) return null;

    const currentImage = images[currentIndex];

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Image preview modal"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 select-none animate-in fade-in duration-200"
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                type="button"
                onClick={onClose}
                aria-label="Close image modal"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer border border-white/10"
            >
                <RxCross1 className="text-xl" />
            </button>

            {/* Previous Arrow */}
            <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center transition-all cursor-pointer border border-white/10 shadow-lg"
            >
                <FaChevronLeft className="text-base sm:text-lg" />
            </button>

            {/* Next Arrow */}
            <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/10 hover:bg-accent text-white flex items-center justify-center transition-all cursor-pointer border border-white/10 shadow-lg"
            >
                <FaChevronRight className="text-base sm:text-lg" />
            </button>

            {/* Image Container */}
            <div
                className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full h-[75vh] sm:h-[80vh] flex items-center justify-center">
                    <Image
                        src={currentImage.src}
                        alt={currentImage.alt}
                        fill
                        className="object-contain drop-shadow-2xl rounded-xl"
                        priority
                        sizes="(max-width: 1024px) 95vw, 1000px"
                    />
                </div>

                {/* Footer Caption / Counter */}
                <div className="mt-3 flex items-center justify-center gap-3 text-white/80 font-poppins text-xs sm:text-sm">
                    <span>{currentImage.alt}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-accent font-medium">
                        {currentIndex + 1} / {images.length}
                    </span>
                </div>
            </div>
        </div>
    );
}
