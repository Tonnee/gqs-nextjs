"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import BannerImg from "@/public/images/banner.png";
import { CtaButton } from "@/components/layout/CtaButton";
import Heading from "@/components/ui/Heading";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type VideoModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

// ---------------------------------------------------------------------------
// VideoModal — isolated client sub-component (handles all interactive state)
// ---------------------------------------------------------------------------

function VideoModal({ isOpen, onClose }: VideoModalProps) {
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

// ---------------------------------------------------------------------------
// Banner — main section component
// ---------------------------------------------------------------------------

export default function Banner() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-[#0A033C] w-full min-h-[910px] relative">
            <div className="flex flex-col-reverse xl:flex-row items-center w-full h-full min-h-[910px]">

                {/* Image + play button */}
                <div className="w-full xl:w-1/2 h-[500px] xl:h-[910px] relative">
                    <Image
                        src={BannerImg}
                        alt="GRE Quant School Banner image"
                        fill
                        priority
                        className="object-cover object-center"
                    />

                    <button
                        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:left-auto xl:right-0 xl:translate-x-1/2 cursor-pointer z-10"
                        aria-label="Play trailer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <span className="relative w-[84px] h-[84px] bg-[#101C3D] rounded-full flex justify-center items-center">
                            <span className="absolute w-[124px] h-[124px] bg-white/15 rounded-full flex justify-center items-center -z-10" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="#F58655"
                                className="size-11 pl-1"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <span className="absolute w-[124px] h-[124px] animate-ping bg-white/15 rounded-full flex justify-center items-center -z-10" />
                        </span>
                    </button>
                </div>

                {/* Copy */}
                <div className="w-full xl:w-1/2 flex flex-col justify-center px-6 md:px-12 xl:pl-[120px] xl:pr-8 py-16 xl:py-0">
                    <div className="max-w-[748px]">
                        <p className="font-poppins text-[#F58655] text-base font-medium tracking-widest uppercase">
                            GRE Quant School
                        </p>
                        <Heading level={1} className="text-4xl md:text-5xl lg:text-[58px] font-raleway font-bold tracking-[1.2px] leading-tight lg:leading-[84px] text-white/90" >
                            Master GRE Quant with Precision and Confidence
                        </Heading>
                        <p className="text-lg max-w-[597px] mt-6 md:mt-[42px] text-white/75 leading-[30px]">
                            Learn smarter strategies, solve faster, and score higher
                            with ease. Join thousands who have aced GRE Quant with our
                            help!
                        </p>
                        <div className="mt-10 md:mt-[78px] text-white uppercase flex flex-col sm:flex-row items-start sm:items-center sm:bg-white/10 w-max rounded-full sm:pr-[7px] sm:py-[7px] sm:pl-8">
                            <span className="text-sm md:text-base text-left mb-4 sm:mb-0">
                                Get <span className="text-[#F58655] font-semibold mx-1">50% discount</span> on course fee
                            </span>
                            <CtaButton
                                href="/"
                                className="w-max sm:w-auto py-3 px-6 sm:ml-6 font-poppins text-base font-medium capitalize whitespace-nowrap"
                                baseColorClass="bg-white"
                                textColorClass="text-primary hover:text-white"
                                hoverColorClass="bg-accent"
                            >
                                Join Today
                            </CtaButton>
                        </div>
                    </div>
                </div>
            </div>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}