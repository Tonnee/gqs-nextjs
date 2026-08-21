"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import { CtaButton } from "@/components/layout/cta-button";
import { 
    readingSourcesData, 
    wordListsData, 
    textCompletionMaterials, 
    sentenceEquivalenceMaterials, 
    readingComprehensionMaterials,
    type VerbalBookMaterial
} from "../data/verbal-prep-data";
import { FaBookOpen, FaDownload, FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";

// Combine unique books for the "All Materials" view
const allUniqueBooks: VerbalBookMaterial[] = Array.from(
    new Map(
        [
            ...textCompletionMaterials,
            ...sentenceEquivalenceMaterials,
            ...readingComprehensionMaterials
        ].map(b => [b.title, b])
    ).values()
);

const TABS = [
    { id: "all", label: "All Materials", count: allUniqueBooks.length, materials: allUniqueBooks },
    { id: "tc", label: "Text Completion", count: textCompletionMaterials.length, materials: textCompletionMaterials },
    { id: "se", label: "Sentence Equivalence", count: sentenceEquivalenceMaterials.length, materials: sentenceEquivalenceMaterials },
    { id: "rc", label: "Reading Comprehension", count: readingComprehensionMaterials.length, materials: readingComprehensionMaterials },
];

export default function VerbalPrepContent() {
    const [activeTabId, setActiveTabId] = useState("all");

    const currentTab = TABS.find(t => t.id === activeTabId) || TABS[0];

    return (
        <section className="py-16 md:py-24 bg-white font-poppins">
            <Container>
                {/* Reading Habit Publications & Sources */}
                <div id="reading-sources" className="mb-20 md:mb-28 scroll-mt-24">
                    <SectionHeading
                        level={2}
                        topText="Daily Reading Strategy"
                        headingText="Recommended GRE-Level Publications"
                        className="text-center text-foreground-heading mb-12"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {readingSourcesData.map((source, index) => (
                            <div
                                key={index}
                                className="bg-background-subtle rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
                                        <FaBookOpen className="text-lg" />
                                    </div>
                                    <h3 className="font-raleway text-xl font-bold text-foreground-heading">
                                        {source.category}
                                    </h3>
                                </div>

                                <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                                    {source.description}
                                </p>

                                <div className="flex flex-wrap gap-2.5">
                                    {source.links.map((link, lIdx) => (
                                        <a
                                            key={lIdx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-accent text-foreground-heading hover:text-white border border-gray-200 text-xs font-medium transition-all shadow-2xs group cursor-pointer"
                                        >
                                            <span>{link.name}</span>
                                            <FaExternalLinkAlt className="text-[10px] text-gray-400 group-hover:text-white transition-colors" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vocabulary & High-Frequency Word Lists */}
                <div id="word-lists" className="mb-20 md:mb-28 scroll-mt-24">
                    <SectionHeading
                        level={2}
                        topText="Vocabulary Masterfiles"
                        headingText="High-Yield GRE Word Lists"
                        className="text-center text-foreground-heading mb-12"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {wordListsData.map((wordlist) => (
                            <div
                                key={wordlist.id}
                                className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                            >
                                {wordlist.isFeatured && (
                                    <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                                        <FaStar className="text-[11px]" />
                                        <span>High Yield</span>
                                    </div>
                                )}

                                <div>
                                    <span className="text-xs font-semibold text-foreground-muted uppercase tracking-wider block mb-2">
                                        {wordlist.source}
                                    </span>
                                    <h3 className="font-raleway text-lg font-bold text-foreground-heading group-hover:text-accent transition-colors leading-snug mb-4">
                                        {wordlist.title}
                                    </h3>
                                </div>

                                <CtaButton
                                    href={wordlist.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-2.5 px-4 text-xs font-medium justify-center mt-4"
                                    baseColorClass="bg-primary"
                                    hoverColorClass="bg-accent"
                                >
                                    <FaDownload className="text-xs mr-2" />
                                    <span>Download PDF</span>
                                </CtaButton>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Books & Section-wise Materials with Interactive Tabs */}
                <div id="verbal-books" className="scroll-mt-24">
                    <SectionHeading
                        level={2}
                        topText="Curated Book Bank"
                        headingText="Verbal Reasoning Study Materials"
                        className="text-center text-foreground-heading mb-10"
                    />

                    {/* Interactive Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14 select-none">
                        {TABS.map((tab) => {
                            const isActive = activeTabId === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTabId(tab.id)}
                                    className={cn(
                                        "px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2",
                                        isActive
                                            ? "bg-primary text-white shadow-xs"
                                            : "bg-background-subtle text-foreground-heading hover:bg-gray-200 border border-gray-200/60"
                                    )}
                                >
                                    <span>{tab.label}</span>
                                    <span className={cn(
                                        "text-[11px] px-2 py-0.5 rounded-full font-semibold",
                                        isActive ? "bg-white/20 text-white" : "bg-gray-200 text-foreground-muted"
                                    )}>
                                        {tab.count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* 6-Column Book Grid matching CourseMaterials */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-9 items-center justify-items-center">
                        {currentTab.materials.map((book) => (
                            <div 
                                key={book.id + book.title}
                                className="w-full max-w-[240px] md:max-w-none flex flex-col items-center justify-center group"
                            >
                                {book.link ? (
                                    <a
                                        href={book.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
                                    >
                                        <Image
                                            src={book.imageSrc}
                                            alt={book.title}
                                            width={240}
                                            height={320}
                                            className="w-full h-auto object-contain drop-shadow-md rounded-lg"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                        />
                                    </a>
                                ) : (
                                    <div className="block w-full transition-transform duration-300 group-hover:scale-105">
                                        <Image
                                            src={book.imageSrc}
                                            alt={book.title}
                                            width={240}
                                            height={320}
                                            className="w-full h-auto object-contain drop-shadow-md rounded-lg"
                                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
