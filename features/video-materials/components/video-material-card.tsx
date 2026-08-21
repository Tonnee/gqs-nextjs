"use client";

import Image from "next/image";
import Heading from "@/components/ui/heading";
import { CtaButton } from "@/components/layout/cta-button";
import { StrategyVideoItem } from "../data/must-know-strategies-data";
import { FaPlay, FaDownload } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { cn } from "@/lib/utils";

export interface VideoMaterialCardProps {
    item: StrategyVideoItem | {
        id: string | number;
        title: string;
        topic?: string;
        badge?: string;
        description: string;
        videoUrl?: string;
        thumbnail?: string;
        imageSrc?: string;
        imageAlt?: string;
        duration?: string;
        highlight?: string;
        buttonText?: string;
        buttonLink?: string;
        isExternal?: boolean;
        isVideo?: boolean;
    };
    index: number;
    lessonNumber?: string | number;
    onOpenModal?: (videoUrl: string) => void;
    className?: string;
}

export default function VideoMaterialCard({
    item,
    index,
    lessonNumber,
    onOpenModal,
    className
}: VideoMaterialCardProps) {
    const isEven = index % 2 === 1;
    const displayImage = item.thumbnail || ('imageSrc' in item ? item.imageSrc : '') || "/images/video-materials-banner.png";
    const imageAlt = ('imageAlt' in item && item.imageAlt) ? item.imageAlt : item.title;
    const topicTag = item.topic || ('badge' in item ? item.badge : undefined);
    const videoUrl = item.videoUrl || ('buttonLink' in item && item.isVideo ? item.buttonLink : undefined);
    const isVideo = Boolean(item.videoUrl || ('isVideo' in item && item.isVideo));

    const handlePlay = () => {
        if (videoUrl && onOpenModal) {
            onOpenModal(videoUrl);
        }
    };

    return (
        <article
            className={cn("grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center", className)}
        >
            {/* Visual / Thumbnail Column */}
            <div className={cn("lg:col-span-6 lg:row-start-1", isEven ? "lg:col-start-7" : "lg:col-start-1")}>
                <div
                    onClick={isVideo && onOpenModal ? handlePlay : undefined}
                    className={cn(
                        "group relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-dark",
                        isVideo && onOpenModal && "cursor-pointer"
                    )}
                    role={isVideo && onOpenModal ? "button" : undefined}
                    tabIndex={isVideo && onOpenModal ? 0 : undefined}
                    aria-label={isVideo ? `Play video: ${item.title}` : undefined}
                    onKeyDown={(e) => {
                        if (isVideo && onOpenModal && (e.key === "Enter" || e.key === " ")) {
                            e.preventDefault();
                            handlePlay();
                        }
                    }}
                >
                    <Image
                        src={displayImage}
                        alt={imageAlt}
                        fill
                        className={cn(
                            "object-cover transition-transform duration-700",
                            isVideo && "group-hover:scale-105"
                        )}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                    />

                    {/* Gradient Overlay for video */}
                    {isVideo && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    )}

                    {/* Play Button */}
                    {isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-accent-hover">
                                <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
                                <FaPlay className="text-xl sm:text-2xl ml-1 text-white relative z-10" />
                            </div>
                        </div>
                    )}

                    {/* Badges on thumbnail */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-md text-xs font-semibold text-white">
                            {item.duration || "Video Lesson"}
                        </span>
                        <span className="px-3 py-1 bg-accent/90 backdrop-blur-md rounded-md text-xs font-semibold text-white">
                            {item.highlight || "High Impact"}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content Column (with 1 column offset in middle) */}
            <div className={cn("lg:col-span-5 lg:row-start-1 flex flex-col justify-center", isEven ? "lg:col-start-1" : "lg:col-start-8")}>
                <div className="flex items-center gap-2 mb-3">
                    {topicTag && (
                        <span className="text-xs font-bold text-accent tracking-widest uppercase bg-accent/10 px-3 py-1 rounded-full">
                            {topicTag}
                        </span>
                    )}
                    {lessonNumber !== undefined && (
                        <span className="text-xs text-foreground-muted font-medium">
                            Lesson {lessonNumber}
                        </span>
                    )}
                </div>

                <Heading level={3} className="text-2xl sm:text-3xl font-raleway font-bold text-foreground-heading leading-snug mb-4">
                    {item.title}
                </Heading>

                <p className="text-foreground-muted text-sm sm:text-base leading-relaxed mb-6 font-poppins">
                    {item.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                    {isVideo && videoUrl ? (
                        <>
                            {onOpenModal && (
                                <CtaButton
                                    onClick={handlePlay}
                                    className="px-6 py-3 font-poppins text-sm font-medium"
                                    baseColorClass="bg-primary"
                                    hoverColorClass="bg-accent"
                                >
                                    <FaPlay className="text-xs text-accent mr-1" />
                                    <span>Watch Lesson</span>
                                </CtaButton>
                            )}

                            <CtaButton
                                href={videoUrl}
                                target="_blank"
                                className="px-6 py-3 font-poppins text-sm font-medium"
                                baseColorClass="bg-accent"
                                hoverColorClass="bg-primary"
                            >
                                <span>Watch on YouTube</span>
                                <MdOpenInNew className="text-base ml-1" />
                            </CtaButton>
                        </>
                    ) : (
                        'buttonLink' in item && item.buttonLink && (
                            <CtaButton
                                href={item.buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 font-poppins text-sm font-medium"
                                baseColorClass="bg-primary"
                                hoverColorClass="bg-accent"
                            >
                                {item.buttonText?.includes("Download") ? (
                                    <FaDownload className="text-xs mr-2" />
                                ) : (
                                    <MdOpenInNew className="text-base mr-2" />
                                )}
                                <span>{item.buttonText || "Learn More"}</span>
                            </CtaButton>
                        )
                    )}
                </div>
            </div>
        </article>
    );
}
