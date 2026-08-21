"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import { successStoriesData } from "../data/success-stories-data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface SuccessStoriesSliderProps {
    className?: string;
}

export default function SuccessStoriesSlider({ className }: SuccessStoriesSliderProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            slidesToScroll: 1,
            containScroll: "trimSnaps",
            dragFree: false,
        },
        [
            Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onDotClick = useCallback(
        (index: number) => {
            if (emblaApi) emblaApi.scrollTo(index);
        },
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <section className={cn("py-20 md:py-28 bg-white overflow-hidden", className)}>
            <Container>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 md:mb-16">
                    <div>
                        <SectionHeading
                            level={2}
                            topText="Score Reports"
                            headingText="GRE Quantitative Milestones"
                            align="text-left"
                            className="text-foreground-heading"
                        />
                        <p className="font-poppins text-sm md:text-base text-foreground-muted mt-3 max-w-2xl">
                            Verified score reports and testimonials from students who transformed their GRE Quant prep.
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-3 self-start sm:self-end shrink-0">
                        <button
                            type="button"
                            onClick={scrollPrev}
                            aria-label="Previous slide"
                            className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-accent hover:border-accent hover:text-white text-primary flex items-center justify-center transition-all shadow-xs cursor-pointer"
                        >
                            <FaChevronLeft className="text-sm" />
                        </button>
                        <button
                            type="button"
                            onClick={scrollNext}
                            aria-label="Next slide"
                            className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-accent hover:border-accent hover:text-white text-primary flex items-center justify-center transition-all shadow-xs cursor-pointer"
                        >
                            <FaChevronRight className="text-sm" />
                        </button>
                    </div>
                </div>

                {/* Carousel Viewport */}
                <div
                    className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
                    ref={emblaRef}
                >
                    <div className="flex -ml-4 md:-ml-6 touch-pan-y">
                        {successStoriesData.map((item) => (
                            <div
                                key={item.id}
                                className="min-w-0 pl-4 md:pl-6 shrink-0 grow-0 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                            >
                                <div className="group relative overflow-hidden h-full">
                                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            className="object-contain p-1 group-hover:scale-105 transition-transform duration-500 shadow-lg"
                                            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center items-center gap-2 mt-10 md:mt-14">
                    {scrollSnaps.slice(0, 10).map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            aria-label={`Go to slide ${index + 1}`}
                            onClick={() => onDotClick(index)}
                            className={cn(
                                "rounded-full transition-all duration-300 cursor-pointer",
                                index === selectedIndex % 10
                                    ? "w-7 h-2.5 bg-accent"
                                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                            )}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
