"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import { CtaButton } from "@/components/layout/cta-button";
import ReviewListCard from "./review-list-card";
import Pagination from "@/components/ui/pagination";
import { reviewsListData } from "../data/reviews-list-data";
import { FaStar, FaFacebookF } from "react-icons/fa";

const REVIEWS_PER_PAGE = 9;

export default function ReviewsList() {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastReview = currentPage * REVIEWS_PER_PAGE;
    const indexOfFirstReview = indexOfLastReview - REVIEWS_PER_PAGE;
    const currentReviews = reviewsListData.slice(indexOfFirstReview, indexOfLastReview);

    const totalPages = Math.ceil(reviewsListData.length / REVIEWS_PER_PAGE);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        const section = document.getElementById("all-reviews-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <section id="all-reviews-section" className="py-20 lg:py-28 bg-background-subtle">
            <Container>
                <div className="mx-auto">
                    {/* Header Section with Trust Pill & Facebook Action */}
                    <div className="flex flex-col items-center text-center mb-14">
                        <SectionHeading
                            level={2}
                            topText="Student Feedback"
                            headingText="Student Reviews"
                            className="text-center text-foreground-heading mb-6"
                        />

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {/* Rating Pill Badge */}
                            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-gray-200/80 shadow-xs">
                                <div className="flex items-center gap-1 text-accent text-sm" aria-label="5 out of 5 stars">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <span className="text-xs sm:text-sm font-poppins text-foreground-muted">
                                    <strong className="font-bold text-foreground-heading">5.0</strong> from over <strong className="font-semibold text-foreground-heading">{reviewsListData.length}+</strong> verified reviews
                                </span>
                            </div>

                            {/* Facebook Review Button */}
                            <CtaButton
                                href="https://www.facebook.com/groups/2550258085230868/permalink/2985316168391722/"
                                target="_blank"
                                rel="noopener noreferrer"
                                baseColorClass="bg-accent"
                                hoverColorClass="bg-primary"
                                textColorClass="text-white hover:text-white"
                                className="px-6 py-2.5 text-xs sm:text-sm font-medium"
                            >
                                <span className="flex items-center gap-2">
                                    <FaFacebookF className="text-xs" />
                                    <span>View on Facebook</span>
                                </span>
                            </CtaButton>
                        </div>
                    </div>

                    {/* 3 Columns Masonry (Each card has exactly 24px gap around it) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                        {/* Column 1 */}
                        <div className="flex flex-col gap-6">
                            {currentReviews
                                .filter((_, idx) => idx % 3 === 0)
                                .map(review => (
                                    <ReviewListCard key={review.id} review={review} />
                                ))}
                        </div>

                        {/* Column 2 */}
                        <div className="flex flex-col gap-6">
                            {currentReviews
                                .filter((_, idx) => idx % 3 === 1)
                                .map(review => (
                                    <ReviewListCard key={review.id} review={review} />
                                ))}
                        </div>

                        {/* Column 3 */}
                        <div className="flex flex-col gap-6">
                            {currentReviews
                                .filter((_, idx) => idx % 3 === 2)
                                .map(review => (
                                    <ReviewListCard key={review.id} review={review} />
                                ))}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="mt-14">
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            infoText={`Showing page ${currentPage} of ${totalPages} (${reviewsListData.length} total reviews)`}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}



