"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import Heading from "@/components/ui/heading";
import { CtaButton } from "@/components/layout/cta-button";
import VideoModal from "@/features/home/components/video-modal";
import Pagination from "@/components/ui/pagination";
import VideoMaterialCard from "@/features/video-materials/components/video-material-card";
import { 
    awaResourcesData, 
    awaQuestionsData, 
    type AwaQuestion 
} from "../data/awa-prep-data";
import { 
    FaPlay, 
    FaDownload, 
    FaChevronDown, 
    FaSearch, 
    FaPenNib,
    FaExternalLinkAlt 
} from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import { cn } from "@/lib/utils";

export default function AwaPrepContent() {
    const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
    const [openQuestionId, setOpenQuestionId] = useState<number | null>(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 10;

    // Filter questions based on search
    const filteredQuestions = useMemo(() => {
        if (!searchQuery.trim()) return awaQuestionsData;
        const q = searchQuery.toLowerCase();
        return awaQuestionsData.filter(
            item => 
                item.prompt.toLowerCase().includes(q) || 
                item.response.toLowerCase().includes(q) ||
                String(item.id).includes(q)
        );
    }, [searchQuery]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        const section = document.getElementById("awa-questions-heading");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleAccordion = (id: number) => {
        setOpenQuestionId(prev => (prev === id ? null : id));
    };

    return (
        <div className="bg-white font-poppins">
            {/* Section 1: AWA Preparation Resource Blocks matching video-materials-list layout */}
            <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-labelledby="awa-resources-heading">
                <Container>
                    {/* Resources List - Alternating Split Layout */}
                    <div className="flex flex-col space-y-20 lg:space-y-28">
                        {awaResourcesData.map((resource, index) => (
                            <VideoMaterialCard
                                key={resource.id}
                                item={resource}
                                index={index}
                                lessonNumber={`0${index + 1}`}
                                onOpenModal={setSelectedVideoUrl}
                            />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Section 2: 110 AWA Questions & Sample Essays Accordion */}
            <section className="py-20 md:py-28 bg-background-subtle/40 border-t border-gray-100" aria-labelledby="awa-questions-heading">
                <Container>
                    <div className="max-w-4xl mx-auto mb-12">
                        <SectionHeading
                            level={2}
                            topText="Complete Practice Bank"
                            headingText="110 AWA Issue Questions & Answers"
                            className="text-center text-foreground-heading mb-8"
                        />

                        {/* Search & Counter Filter */}
                        <div className="relative w-full max-w-xl mx-auto mb-10">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                placeholder="Search by topic keyword (e.g. truth, society, education, law)..."
                                className="w-full pl-11 pr-4 py-3.5 rounded-full border border-gray-200 bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary text-sm font-poppins transition-all shadow-xs"
                            />
                        </div>

                        {/* Accordion Questions List */}
                        <div className="space-y-4">
                            {currentQuestions.map((item) => {
                                const isOpen = openQuestionId === item.id;

                                return (
                                    <div
                                        key={item.id}
                                        className={cn(
                                            "border rounded-2xl transition-all duration-300 overflow-hidden",
                                            isOpen 
                                                ? "border-primary/30 bg-white shadow-xs" 
                                                : "border-gray-200 bg-white hover:border-gray-300"
                                        )}
                                    >
                                        <button
                                            onClick={() => toggleAccordion(item.id)}
                                            className="w-full px-6 py-5 flex items-start justify-between text-left gap-4 cursor-pointer select-none"
                                            aria-expanded={isOpen}
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold text-xs flex items-center justify-center mt-0.5">
                                                    {item.id}
                                                </span>
                                                <span className="font-poppins font-medium text-sm sm:text-base text-foreground-heading leading-snug">
                                                    &ldquo;{item.prompt}&rdquo;
                                                </span>
                                            </div>

                                            <div className={cn(
                                                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                                                isOpen ? "bg-accent text-white rotate-180" : "bg-gray-100 text-gray-500"
                                            )}>
                                                <FaChevronDown className="text-xs" />
                                            </div>
                                        </button>

                                        {isOpen && (
                                            <div className="px-6 pb-6 pt-2 text-foreground-muted text-sm sm:text-base leading-relaxed border-t border-gray-100/80">
                                                <div className="flex items-center gap-2 mb-4 text-xs font-semibold text-accent uppercase tracking-wider">
                                                    <FaPenNib className="text-xs" />
                                                    <span>Sample Model Analysis & Response</span>
                                                </div>
                                                <div className="space-y-4 text-neutral-700 whitespace-pre-line font-raleway">
                                                    {item.response}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                            {filteredQuestions.length === 0 && (
                                <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
                                    <p className="text-foreground-muted text-base">No AWA prompts matched your search query &ldquo;{searchQuery}&rdquo;.</p>
                                </div>
                            )}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-12">
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                    infoText={`Showing ${indexOfFirstQuestion + 1}-${Math.min(indexOfLastQuestion, filteredQuestions.length)} of ${filteredQuestions.length} prompts`}
                                />
                            </div>
                        )}
                    </div>
                </Container>
            </section>

            {/* Video Modal */}
            {selectedVideoUrl && (
                <VideoModal
                    isOpen={!!selectedVideoUrl}
                    onClose={() => setSelectedVideoUrl(null)}
                    videoUrl={selectedVideoUrl}
                />
            )}
        </div>
    );
}
