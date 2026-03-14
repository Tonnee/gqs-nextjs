import { Container } from "@/components/layout/container";
import SectionHeading from "@/components/ui/section-heading";
import ClassCard from "./class-card";
import demoClassData from "@/data/demo-class-data";

export default function DemoClasses() {
    return (
            <section className="pt-[136px] pb-[150px] bg-[#F5FBFF]">
                <Container>
                    <SectionHeading
                        level={4}
                        headingText="Demo Classes"
                        topText="Resources"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-[55px]">
                        {demoClassData.map((item, index) => (
                            <ClassCard
                                key={index}
                                imgSrc={item.src}
                                imgAlt={item.alt}
                                classTitle={item.title}
                                duration={item.time}
                                classLink={item.link}
                            />
                        ))}
                    </div>
                </Container>
            </section>
    );
}