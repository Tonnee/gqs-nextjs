"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ReviewData } from "../data/reviews-list-data";

interface ReviewListCardProps {
    review: ReviewData;
}

const DEFAULT_MALE_AVATAR = "/images/reviews/all/default-male-avatar.png";

export default function ReviewListCard({ review }: ReviewListCardProps) {
    const [imgSrc, setImgSrc] = useState(review.imageSrc || DEFAULT_MALE_AVATAR);

    return (
        <article className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-auto border border-gray-100/90">
            <div>
                {/* 1. Rating Stars at Top */}
                <div className="flex items-center gap-1.5 text-accent text-sm sm:text-base mb-4" aria-label="5 out of 5 stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                {/* 2. Review Content */}
                <p className="font-poppins text-sm md:text-[15px] text-foreground-heading/85 leading-relaxed mb-5 italic">
                    &ldquo;{review.review}&rdquo;
                </p>
            </div>

            {/* 3. Student Profile at Bottom */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100/80 mt-auto">
                <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full border-2 border-accent/20 overflow-hidden bg-background-subtle shrink-0 shadow-xs">
                    <Image
                        src={imgSrc}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                        onError={() => setImgSrc(DEFAULT_MALE_AVATAR)}
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <h3 className="font-raleway font-bold text-base text-foreground-heading leading-tight truncate">
                        {review.name}
                    </h3>
                    <p className="font-poppins text-xs text-foreground-muted mt-0.5 truncate">
                        {review.profession || "Student of GRE Quant School"}
                    </p>
                </div>
            </div>
        </article>
    );
}




