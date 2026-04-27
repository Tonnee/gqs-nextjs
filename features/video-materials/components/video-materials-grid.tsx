import { Container } from "@/components/layout/container";
import ClassCard from "@/features/home/components/class-card";
import { videoMaterialsData } from "../data/video-materials-data";


export default function VideoMaterialsGrid() {
    return (
        <section className="py-40 bg-background-subtle">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                    {videoMaterialsData.map((item, index) => (
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
