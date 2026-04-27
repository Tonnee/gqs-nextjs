"use client";

import { useState, useRef, useEffect } from "react";
import { IoChevronUp } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { KmfSectionAccordion } from "../data/kmf-questions-data";

export default function KmfAccordion({ data, defaultOpen = false }: { data: KmfSectionAccordion, defaultOpen?: boolean }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    const buttonId = `accordion-btn-${data.title.replace(/\s+/g, '-')}`;
    const panelId = `accordion-panel-${data.title.replace(/\s+/g, '-')}`;

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
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full flex justify-between items-center px-8 py-6 text-left transition-colors duration-200",
                    isOpen
                        ? "bg-primary text-white rounded-t-xl"
                        : "bg-background-subtle text-foreground-heading rounded-xl"
                )}
            >
                <div className="flex flex-col gap-2">
                    <span className={cn(
                        "text-sm font-semibold tracking-wide",
                        isOpen ? "text-accent" : "text-secondary"
                    )}>
                        {data.sectionCount} Sections
                    </span>
                    <h3 className="text-xl font-medium tracking-wide font-poppins">
                        {data.title}
                    </h3>
                </div>
                <IoChevronUp
                    aria-hidden="true"
                    className={cn(
                        "text-3xl shrink-0 transition-transform duration-300",
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
                    <div className="flex flex-col sm:flex-row flex-wrap gap-6">
                        {data.items && data.items.length > 0 ? (
                            data.items.map((item, index) => (
                                <div key={index} className="bg-[#EBF5FF] rounded-xl p-6 flex flex-row items-center min-w-[280px] gap-5">
                                    <div className="bg-white text-accent font-poppins text-2xl h-[60px] w-[60px] flex items-center justify-center rounded-lg shadow-sm flex-shrink-0 font-medium">
                                        {index + 1}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-poppins text-[17px] text-primary-deep font-medium tracking-wide">
                                            {item.difficulty}
                                        </span>
                                        <span className="font-raleway text-[13px] text-neutral-500 mt-1 uppercase tracking-wider font-medium">
                                            {item.questionCount} Questions
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-neutral-500 font-raleway italic py-4">Questions will be added soon.</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
