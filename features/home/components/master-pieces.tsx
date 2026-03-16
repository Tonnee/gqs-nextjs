"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import masterPieceData from "@/data/master-piece-data";
import ClassCard from "./class-card";
import { cn } from "@/lib/utils";

/** Responsive breakpoints aligned to Tailwind:
 *  - lg (≥1024px): 3 slides
 *  - md (≥768px):  2 slides
 *  - sm (<768px):  1 slide
 */
function useSlidesPerView() {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width >= 1024) setSlidesPerView(3);
            else if (width >= 768) setSlidesPerView(2);
            else setSlidesPerView(1);
        }

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return slidesPerView;
}

function DotNavigation({
    scrollSnaps,
    selectedIndex,
    onDotClick,
}: {
    scrollSnaps: number[];
    selectedIndex: number;
    onDotClick: (index: number) => void;
}) {
    return (
        <div className="flex justify-center items-center gap-3 mt-12">
            {scrollSnaps.map((_, index) => (
                <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => onDotClick(index)}
                    className={cn(
                        "rounded-full transition-all duration-300",
                        index === selectedIndex
                            ? "w-[15px] h-[15px] bg-white"
                            : "w-[11px] h-[11px] bg-white/50 hover:bg-white/70"
                    )}
                />
            ))}
        </div>
    );
}

export default function MasterPieces() {
    const slidesPerView = useSlidesPerView();

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: slidesPerView === 1 ? "center" : "start",
            slidesToScroll: 1,
            containScroll: slidesPerView === 1 ? false : "trimSnaps",
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onDotClick = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", () => {
            setScrollSnaps(emblaApi.scrollSnapList());
            onSelect();
        });
        onSelect();
    }, [emblaApi, onSelect]);

    // Reinitialize when slidesPerView changes
    useEffect(() => {
        if (emblaApi) emblaApi.reInit();
    }, [emblaApi, slidesPerView]);

    // Calculate slide width percentage based on slides per view
    const slideWidth =
        slidesPerView === 3
            ? "flex-[0_0_33.333%]"
            : slidesPerView === 2
              ? "flex-[0_0_50%]"
              : "flex-[0_0_85%]";

    return (
        <section className="py-20 md:py-[120px] bg-secondary overflow-hidden">
            <Container>
                <SectionHeading
                    level={2}
                    headingText="Master Pieces"
                    topText="More Resources"
                    className="text-white"
                />

                <div className="mt-12 md:mt-[55px] mb-16 md:mb-[80px] w-full">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-2 md:-ml-4">
                            {masterPieceData.map((item, index) => (
                                <div
                                    key={`master-piece-${index}`}
                                    className={cn(
                                        "min-w-0 pl-2 md:pl-4",
                                        slideWidth
                                    )}
                                >
                                    <ClassCard
                                        imgSrc={item.src}
                                        imgAlt={item.alt}
                                        classTitle={item.title}
                                        classLink={item.link}
                                        duration={item.time}
                                        ctaBaseColorClass="bg-[#0D0D3F]"
                                        className="h-full"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <DotNavigation
                        scrollSnaps={scrollSnaps}
                        selectedIndex={selectedIndex}
                        onDotClick={onDotClick}
                    />
                </div>
            </Container>
        </section>
    );
}
