"use client";

import { Container } from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import masterPieceData from "@/data/master-piece-data";
import ClassCard from "@/components/ui/ClassCard";

export default function MasterPieces() {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="pt-[120px] pb-[150px] bg-secondary">
            <Container>
                <SectionHeading
                    level={2}
                    headingText="Master Pieces"
                    topText="More Resources"
                    className="text-white"
                />

                <div className="mt-[55px] mb-[140px] master-pieces-slider">
                    <Slider {...settings}>
                        {masterPieceData.map((item, index) => (
                            <div
                                key={index}
                                className="px-4"
                            >
                                <ClassCard
                                    imgSrc={item.src}
                                    imgAlt={item.alt}
                                    classTitle={item.title}
                                    classLink={item.link}
                                    duration={item.time}
                                    ctaBaseColorClass="bg-[#0D0D3F]"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </section>
    );
}
