"use client";

import { useState, useRef, useEffect } from "react";
import { IoChevronUp } from "react-icons/io5";
import { cn } from "@/lib/utils";

// --- Types ---

export type FaqItem = {
    title: string;
    content: string;
};

type AccordionItemProps = {
    title: string;
    content: string;
    isOpen: boolean;
    id: string;
    onToggle: () => void;
};

type FaqAccordionProps = {
    items: FaqItem[];
    defaultOpenIndex?: number;
};

// --- Sub-component ---

function AccordionItem({ title, content, isOpen, id, onToggle }: AccordionItemProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    const buttonId = `${id}-btn`;
    const panelId = `${id}-panel`;

    useEffect(() => {
        if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }, [isOpen]);

    return (
        <div>
            <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={onToggle}
                className={cn(
                    "w-full flex justify-between items-center py-14 text-left text-2xl font-raleway font-normal tracking-wider transition-colors duration-200",
                    isOpen ? "text-white" : "text-white/70 hover:text-white"
                )}
            >
                <span>{title}</span>
                <IoChevronUp
                    aria-hidden="true"
                    className={cn(
                        "text-3xl flex-shrink-0 transition-transform duration-300",
                        isOpen ? "rotate-180" : "rotate-0"
                    )}
                />
            </button>

            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: `${height}px` }}
            >
                <div className="pb-14 text-base leading-8 text-white/60">
                    {content}
                </div>
            </div>
        </div>
    );
}

// --- Main component ---

export default function FaqAccordion({ items, defaultOpenIndex }: FaqAccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(
        defaultOpenIndex ?? null
    );

    const toggle = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="w-full divide-y divide-white/10">
            {items.map((item, index) => (
                <AccordionItem
                    key={item.title}
                    id={`faq-item-${index}`}
                    title={item.title}
                    content={item.content}
                    isOpen={activeIndex === index}
                    onToggle={() => toggle(index)}
                />
            ))}
        </div>
    );
}