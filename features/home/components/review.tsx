import { CtaButton } from "@/components/layout/cta-button";
import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import reviewCardData from "@/features/home/data/review-card-data";
import ReviewCard from "./review-card";
import CenterText from "@/components/ui/center-text";
import { cn } from "@/lib/utils";

interface ReviewsProps {
    className?: string;
}

export default function Reviews({ className }: ReviewsProps) {
    const isDark = className?.includes("bg-primary") || className?.includes("bg-primary-deep") || className?.includes("bg-accent-dark");

    return (
        <section className={cn("py-16 md:py-28 mb-8 ", className)}>
            <Container>
                <div className="flex flex-col items-center">
                    <SectionHeading
                        level={3}
                        headingText="Success Stories from Our Students"
                        topText="Reviews"
                        className={isDark ? "text-white" : ""}
                    />

                    <CenterText
                        text="Our students’ success is our greatest achievement. From mastering GRE Quant strategies to achieving their dream scores, their journeys are a testament to our effective guidance. Read their stories of perseverance, growth, and triumph. Let their success inspire and motivate you to reach your goals too!"
                        className={cn("mt-6 md:mt-8 mb-8 md:mb-10 text-center", isDark ? "text-white" : "")}
                    />

                    <div className="text-center w-full flex justify-center mb-12 md:mb-16">
                        <CtaButton
                            href="/"
                            baseColorClass={isDark ? "bg-white" : "bg-accent"}
                            hoverColorClass={isDark ? "bg-accent" : "bg-primary"}
                            textColorClass={isDark ? "text-primary hover:text-white" : "text-white hover:text-white"}
                            className="px-8 py-3"
                        >
                            See More Reviews
                        </CtaButton>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-9 w-full justify-items-center">
                        {reviewCardData.map((cardItem, index) => (
                            <ReviewCard
                                key={index}
                                imgSrc={cardItem.src}
                                imgAlt={cardItem.alt}
                                score={cardItem.score}
                                name={cardItem.name}
                                className={cn(
                                    (index === 1 || index === 2) && "lg:mt-26"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}