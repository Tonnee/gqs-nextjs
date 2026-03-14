import { Container } from "@/components/layout/container";
import FaqAccordion from "@/components/ui/faq-accordion";
import SectionHeading from "@/components/ui/section-heading";
import homeFaqData from "@/data/home-faq-data";

export default function HomeFaq() {
    const firstHalf = homeFaqData.slice(0, 3);
    const secondHalf = homeFaqData.slice(3, 6);

    return (
        <section className="pt-36 pb-10 bg-[#050027]">
            <Container>
                {/* Header row */}
                <div className="flex flex-col lg:flex-row gap-16 xl:gap-[150px]">
                    <div className="lg:w-1/2">
                        <SectionHeading
                            topText="FAQ"
                            headingText={`Got Questions? ${'\n'} We've Got Answers!`}
                            level={2}
                            align="text-left"
                            className="text-white whitespace-pre-line"
                        />
                    </div>

                    <div className="lg:w-1/2">
                        <p className="text-xl md:text-2xl text-white/85 leading-relaxed lg:leading-[42px] mt-0 lg:mt-10">
                            Find quick solutions to common queries about our
                            courses, GRE prep, and more. If you don&apos;t see
                            your question here, feel free to reach out!
                        </p>
                    </div>
                </div>

                {/* Accordion columns */}
                <div className="flex flex-col lg:flex-row gap-10 xl:gap-[150px] mt-16 xl:mt-28">
                    <div className="lg:w-1/2">
                        <FaqAccordion
                            items={firstHalf}
                            defaultOpenIndex={0}
                        />
                    </div>

                    <div className="lg:w-1/2">
                        <FaqAccordion items={secondHalf} />
                    </div>
                </div>
            </Container>
        </section>
    );
}