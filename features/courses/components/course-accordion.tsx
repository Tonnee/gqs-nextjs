"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoChevronUp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { cn } from "@/lib/utils";
import type { CourseInfo } from "@/features/home/data/course-data";
import {Container} from "@/components/layout/container";
import { CtaButton } from "@/components/layout/cta-button";

type CourseOutlineItem = NonNullable<CourseInfo["courseOutline"]>[number];

interface CourseAccordionProps {
    courseOutline: CourseOutlineItem[];
}

function AccordionItem({
    item,
    isOpen,
    onToggle,
}: {
    item: CourseOutlineItem;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    const buttonId = `accordion-btn-${item.classNumber}`;
    const panelId = `accordion-panel-${item.classNumber}`;

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div 
            className={cn(
                "mb-8 rounded-xl overflow-hidden border transition-all duration-300",
                isOpen ? "border-[#D8EFFF]" : "border-transparent"
            )}
        >
            <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={onToggle}
                className={cn(
                    "w-full flex justify-between items-center px-8 py-6 text-left transition-colors duration-200",
                    isOpen
                        ? "bg-primary text-white rounded-t-xl"
                        : "bg-background-subtle text-foreground-heading rounded-xl"
                )}
            >
                <div className="flex flex-col gap-2">
                    <span
                        className={cn(
                            "text-sm font-semibold tracking-wide",
                            isOpen ? "text-accent" : "text-secondary"
                        )}
                    >
                        Class {item.classNumber}
                    </span>
                    <span className="text-xl font-medium tracking-wide font-poppins">{item.title}</span>
                </div>
                <IoChevronUp
                    aria-hidden="true"
                    className={cn(
                        "text-3xl flex-shrink-0 transition-transform duration-300",
                        isOpen ? "rotate-0 text-white" : "rotate-180 text-foreground-heading"
                    )}
                />
            </button>

            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                ref={contentRef}
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out bg-white border-[#D8EFFF]",
                    isOpen ? "rounded-b-xl border-opacity-100" : "border-opacity-0"
                )}
                style={{ maxHeight: `${height}px` }}
            >
                <div className="p-8">
                    {/* Content Area Inside Accordion */}
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                        {/* Thumbnail */}
                        {item.videoThumbnail && (
                            <div className="relative w-full md:w-64 h-36 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                                <Image
                                    src={item.videoThumbnail}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        {/* Details */}
                        <div className="flex flex-col gap-4 flex-grow">
                            <Link href={item.videoLink} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-foreground-heading hover:text-accent transition-colors">
                                {item.title}
                            </Link>
                            
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground-muted">
                                <p>
                                    Duration:{" "}
                                    <span className="text-accent font-medium">
                                        {item.videoDuration}
                                    </span>
                                </p>
                                <p>
                                    Material:{" "}
                                    <span className="text-accent font-medium">
                                        {item.materialsInformation}
                                    </span>
                                </p>
                            </div>

                            <Link
                                href={item.videoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-background-subtle text-foreground-heading text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors self-start"
                            >
                                <FaYoutube className="text-red-500 text-lg" />
                                Watch on YouTube
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CourseAccordion({ courseOutline }: CourseAccordionProps) {
    // First item open by default
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    if (!courseOutline || courseOutline.length === 0) return null;

    const toggle = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <h2 className="text-4xl md:text-5xl font-raleway text-foreground-heading font-bold">
                        Course Outline
                    </h2>
                    <CtaButton
                        href="/course-outline.pdf"
                        download
                        className="px-6 py-3"
                        baseColorClass="bg-primary"
                        hoverColorClass="bg-accent"
                    >
                        Download
                    </CtaButton>
                </div>

                <div className="w-full">
                    {courseOutline.map((item, index) => (
                        <AccordionItem
                            key={item.classNumber.toString() + index}
                            item={item}
                            isOpen={activeIndex === index}
                            onToggle={() => toggle(index)}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
