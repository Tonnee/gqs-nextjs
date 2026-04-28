"use client";

import { useState } from "react";
import { Container } from "@/components/layout/container";
import ReviewListCard from "./review-list-card";
import Pagination from "@/components/ui/pagination";
import { reviewsListData } from "../data/reviews-list-data";

export default function ReviewsList() {
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 10;
    
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviewsListData.slice(indexOfFirstReview, indexOfLastReview);
    
    const totalPages = Math.ceil(reviewsListData.length / reviewsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-20 min-h-screen">
            <Container>
                <div className="mx-auto">
                    <div className="space-y-6">
                        {currentReviews.map(review => (
                            <ReviewListCard key={review.id} review={review} />
                        ))}
                    </div>

                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        infoText={`Page ${currentPage} of ${totalPages}`}
                    />
                </div>
            </Container>
        </section>
    );
}
