import {CtaButton} from "@/components/layout/CtaButton";
import {Container} from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import reviewCardData from "@/data/reviewcard-data";
import ReviewCard from "@/components/ui/ReviewCard";
import CenterText from "@/components/layout/CenterText";
import { cn } from "@/lib/utils";

export default function Reviews() {
    return (
        <section className="py-16 md:py-[120px] mb-8">
            <Container>
                <div className="flex flex-col items-center">
                    <SectionHeading
                        level={3}
                        headingText="Success Stories from Our Students"
                        topText="Reviews"
                    />

                    <CenterText
                        text="Our students’ success is our greatest achievement. From mastering GRE Quant strategies to achieving their dream scores, their journeys are a testament to our effective guidance. Read their stories of perseverance, growth, and triumph. Let their success inspire and motivate you to reach your goals too!"
                        className="mt-6 md:mt-8 mb-8 md:mb-10 text-center"
                    />

                    <div className="text-center w-full flex justify-center mb-12 md:mb-16">
                        <CtaButton
                            href="/"
                            baseColorClass="bg-accent"
                            hoverColorClass="bg-primary"
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
                                    (index === 1 || index === 2) && "lg:mt-[105px]"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}