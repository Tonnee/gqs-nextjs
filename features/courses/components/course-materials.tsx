import Image from "next/image";
import SectionHeading from "@/components/ui/section-heading";

const MATERIALS = [
    {
        src: "/images/materials-bgq/1.png",
        alt: "Manhattan Prep 5 lb. Book of GRE Practice Problems",
    },
    {
        src: "/images/materials-bgq/2.png",
        alt: "Official GRE Quantitative Reasoning Practice Questions",
    },
    {
        src: "/images/materials-bgq/3.png",
        alt: "ETS GRE Big Book",
    },
    {
        src: "/images/materials-bgq/4.png",
        alt: "Magoosh GRE Prep",
    },
    {
        src: "/images/materials-bgq/5.png",
        alt: "GMAT Official Guide Quantitative Review",
    },
    {
        src: "/images/materials-bgq/6.png",
        alt: "Nova's GRE Math Bible",
    },
];

interface CourseMaterialsProps {
    materials?: string;
}

export default function CourseMaterials({ materials }: CourseMaterialsProps) {
    if (!materials) return null;

    return (
        <section className="bg-white py-16 md:py-36">
            <div className="container mx-auto px-4">
                <SectionHeading
                    level={2}
                    topText="BOOKS"
                    headingText="Materials to Cover"
                    className="mb-12 md:mb-20 text-primary"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-9 items-center justify-items-center">
                    {MATERIALS.map((material, index) => (
                        <div
                            key={index}
                            className="w-full max-w-[280px] md:max-w-none flex justify-center"
                        >
                            <Image
                                src={material.src}
                                alt={material.alt}
                                width={240}
                                height={320}
                                className="w-full h-auto object-contain drop-shadow-md"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 16vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
