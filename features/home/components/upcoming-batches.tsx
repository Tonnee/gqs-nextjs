import BatchCard from "./batch-card";
import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import { batchData } from "@/data/batch-data";

export default function UpcomingBatches() {
    return (
        <section className="pt-[136px] pb-[140px] bg-[#F5FBFF]">
            <Container>
                <SectionHeading
                    level={2}
                    headingText="Upcoming Batches"
                    topText="Schedule"
                    className="text-center text-primary tracking-wider"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-[70px]">
                    {batchData.map((batch) => (
                        <BatchCard
                            key={batch.slug}
                            imgSrc={batch.imgSrc}
                            imgAlt={batch.imgAlt}
                            courseName={batch.courseName}
                            courseLevel={batch.courseLevel}
                            startDate={batch.startDate}
                            days={batch.days}
                            time={batch.time}
                            courseLink={batch.courseLink}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}