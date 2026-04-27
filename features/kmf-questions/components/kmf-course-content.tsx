import Heading from "@/components/ui/heading";
import { KmfQuestionPageData } from "../data/kmf-questions-data";
import KmfAccordion from "./kmf-accordion";
import { Container } from "@/components/layout/container";

export default function KmfCourseContent({ data }: { data: KmfQuestionPageData }) {
    if (!data.sections || data.sections.length === 0) return null;

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <Container>
                {data.sections.map((section, sIndex) => (
                    <div key={sIndex} className="mb-20 last:mb-0">
                        <Heading level={2} className="text-3xl md:text-[38px] font-extrabold text-primary-deep mb-10 tracking-tight">
                            {section.heading}
                        </Heading>
                        <div className="flex flex-col gap-2">
                            {section.accordions.map((accordion, aIndex) => (
                                <KmfAccordion 
                                    key={aIndex} 
                                    data={accordion} 
                                    defaultOpen={sIndex === 0 && aIndex === 0} 
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </section>
    );
}
