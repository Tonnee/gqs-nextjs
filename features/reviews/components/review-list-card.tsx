import Image from "next/image";
import { ReviewData } from "../data/reviews-list-data";

interface ReviewListCardProps {
    review: ReviewData;
}

export default function ReviewListCard({ review }: ReviewListCardProps) {
    return (
        <div className="w-full bg-background-subtle rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Left side: 3 columns */}
                <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center text-center">
                    <div className="relative w-24 h-24 mb-4 rounded-full border-4 border-white overflow-hidden bg-white">
                        <Image
                            src={review.imageSrc}
                            alt={review.name}
                            fill
                            className="object-cover"
                            sizes="96px"
                        />
                    </div>
                    <h4 className="font-poppins font-bold text-lg text-primary-deep mb-1">
                        {review.name}
                    </h4>
                    {(review.profession || review.batch) && (
                        <p className="font-raleway text-sm text-foreground-muted">
                            {review.profession && review.batch 
                                ? `${review.profession}, Student of ${review.batch}`
                                : review.profession 
                                    ? review.profession 
                                    : `Student of ${review.batch}`
                            }
                        </p>
                    )}
                </div>

                {/* Offset: 1 column empty - hidden on small screens */}
                <div className="hidden md:block md:col-span-1"></div>

                {/* Right side: 8 columns */}
                <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
                    <h3 className="font-poppins font-bold text-xl text-accent mb-4">
                        {review.tagline}
                    </h3>
                    <p className="font-raleway text-base text-foreground-muted leading-relaxed">
                        {review.review}
                    </p>
                </div>
            </div>
        </div>
    );
}
