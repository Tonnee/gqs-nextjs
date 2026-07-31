"use client";

import { useState } from "react";
import Image from "next/image";
import BannerImg from "@/public/images/banner.png";
import { CtaButton } from "@/components/layout/cta-button";
import Heading from "@/components/ui/heading";
import VideoModal from "./video-modal";
import { LandingData, defaultLandingData } from "../data/landing-types";

interface BannerProps {
    data?: LandingData;
}

export default function Banner({ data = defaultLandingData }: BannerProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const imageUrl = data.heroImageUrl || BannerImg;

    return (
        <section className="bg-primary w-full min-h-227.5 relative">
            <div className="flex flex-col xl:flex-row items-center w-full h-full min-h-227.5">

                {/* Image + play button */}
                <div className="w-full xl:w-1/2 h-125 xl:h-227.5 relative">
                    <Image
                        src={imageUrl}
                        alt={data.heroTitle || "GRE Quant School Banner image"}
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 1280px) 100vw, 50vw"
                    />

                    <button
                        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:left-auto xl:right-0 xl:translate-x-1/2 cursor-pointer z-10"
                        aria-label="Play trailer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <span className="relative w-21 h-21 bg-accent-dark rounded-full flex justify-center items-center">
                            <span className="absolute w-31 h-31 bg-white/15 rounded-full flex justify-center items-center -z-10" />
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

                            <span className="absolute w-31 h-31 animate-ping bg-white/15 rounded-full flex justify-center items-center -z-10" />
                        </span>
                    </button>
                </div>

                {/* Copy */}
                <div className="w-full xl:w-1/2 flex flex-col justify-center px-6 md:px-12 xl:pl-28 xl:pr-8 py-16 xl:py-0">
                    <div className="max-w-3xl">
                        <p className="font-poppins text-accent text-base font-medium tracking-widest uppercase">
                            {data.heroSubtitle || "GRE Quant School"}
                        </p>
                        <Heading level={1} className="text-4xl md:text-5xl lg:text-6xl font-raleway font-bold tracking-widest leading-tight text-white/90">
                            {data.heroTitle}
                        </Heading>
                        <p className="text-lg max-w-xl mt-6 md:mt-10.5 text-white/75 leading-relaxed">
                            {data.heroDescription}
                        </p>
                        <div className="mt-10 md:mt-20 text-white uppercase flex flex-col sm:flex-row items-start sm:items-center sm:bg-white/10 w-max rounded-full sm:pr-2 sm:py-2 sm:pl-8">
                            <span className="text-sm md:text-base text-left mb-4 sm:mb-0">
                                {data.offerBadgeText}
                            </span>
                            <CtaButton
                                href={data.offerCtaLink || "/"}
                                className="w-max sm:w-auto py-3 px-6 sm:ml-6 font-poppins text-base font-medium capitalize whitespace-nowrap"
                                baseColorClass="bg-white"
                                textColorClass="text-primary hover:text-white"
                                hoverColorClass="bg-accent"
                            >
                                {data.offerCtaText || "Join Today"}
                            </CtaButton>
                        </div>
                    </div>
                </div>
            </div>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoUrl={data.videoUrl}
            />
        </section>
    );
}