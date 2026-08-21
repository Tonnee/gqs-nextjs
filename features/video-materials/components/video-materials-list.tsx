"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import Heading from "@/components/ui/heading";
import VideoModal from "@/features/home/components/video-modal";
import { CtaButton } from "@/components/layout/cta-button";
import { StrategyVideoItem } from "../data/must-know-strategies-data";
import { FaPlay, FaYoutube } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { cn } from "@/lib/utils";

import Pagination from "@/components/ui/pagination";
import VideoMaterialCard from "./video-material-card";

export interface VideoMaterialsListProps {
    badge?: string;
    heading: string;
    items: StrategyVideoItem[];
    youtubeChannelUrl?: string;
    youtubeChannelText?: string;
    itemsPerPage?: number;
}

export default function VideoMaterialsList({
    badge = "Video Resources",
    heading,
    items,
    youtubeChannelUrl = "https://www.youtube.com/@GREQuantSchool",
    youtubeChannelText = "Visit Our YouTube Channel",
    itemsPerPage = 6,
}: VideoMaterialsListProps) {
    const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const handleOpenModal = (videoUrl: string) => {
        setSelectedVideoUrl(videoUrl);
    };

    const handleCloseModal = () => {
        setSelectedVideoUrl(null);
    };

    // Pagination calculations
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        const section = document.getElementById("videos-heading");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 300, behavior: "smooth" });
        }
    };

    return (
        <section className="py-20 lg:py-28 bg-white font-poppins relative overflow-hidden" aria-labelledby="videos-heading">
            <Container>
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-6 pb-2">
                    <div>
                        <span className="text-accent text-sm font-semibold uppercase tracking-widest block mb-3">
                            {badge}
                        </span>
                        <Heading level={2} id="videos-heading" className="text-3xl sm:text-4xl lg:text-5xl font-raleway font-bold text-foreground-heading tracking-tight leading-tight">
                            {heading}
                        </Heading>
                    </div>
                    <CtaButton
                        href={youtubeChannelUrl}
                        target="_blank"
                        className="px-6 py-3 font-poppins text-sm font-medium w-fit"
                        baseColorClass="bg-primary"
                        hoverColorClass="bg-accent"
                    >
                        <FaYoutube className="text-xl" />
                        <span>{youtubeChannelText}</span>
                    </CtaButton>
                </div>

                {/* Videos List - Alternating Layout */}
                <div className="flex flex-col space-y-20 lg:space-y-28">
                    {currentItems.map((item: StrategyVideoItem, index: number) => {
                        const absoluteIndex = indexOfFirstItem + index;

                        return (
                            <VideoMaterialCard
                                key={item.id}
                                item={item}
                                index={index}
                                lessonNumber={String(absoluteIndex + 1).padStart(2, "0")}
                                onOpenModal={handleOpenModal}
                            />
                        );
                    })}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-16 md:mt-20">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            infoText={`Showing ${indexOfFirstItem + 1}-${Math.min(indexOfLastItem, items.length)} of ${items.length} lessons`}
                        />
                    </div>
                )}
            </Container>

            {/* Video Modal */}
            {selectedVideoUrl && (
                <VideoModal
                    isOpen={!!selectedVideoUrl}
                    onClose={handleCloseModal}
                    videoUrl={selectedVideoUrl}
                />
            )}
        </section>
    );
}
