import Image from "next/image";
import { CtaButton } from "@/components/layout/cta-button";
import Heading from "@/components/ui/heading";

export interface VideoMaterialsHeroProps {
    badge?: string;
    title?: string;
    description?: string;
    imageSrc?: string;
    imageAlt?: string;
    ctaText?: string;
    ctaHref?: string;
    discountText?: string;
}

export default function VideoMaterialsHero({
    badge = "Video Resources",
    title = "GRE Quant Must-know Strategies",
    description = "Learn smarter strategies, solve faster, and score higher with ease. Join thousands who've aced GRE Quant with our help!",
    imageSrc = "/images/video-materials-banner.png",
    imageAlt = "Video Materials Strategies",
    ctaText = "Join Today",
    ctaHref = "/enroll",
    discountText = "50% discount",
}: VideoMaterialsHeroProps) {
    return (
        <section className="bg-primary w-full min-h-203.5 relative">
            <div className="flex flex-col xl:flex-row items-center w-full h-full min-h-203.5">

                {/* Image */}
                <div className="w-full xl:w-1/2 h-125 xl:h-203.5 relative">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="(max-width: 1280px) 100vw, 50vw"
                    />
                </div>

                {/* Copy */}
                <div className="w-full xl:w-1/2 flex flex-col justify-center px-6 md:px-12 xl:pl-28 xl:pr-8 py-16 xl:py-0">
                    <div className="max-w-3xl">
                        <p className="font-poppins text-accent text-base font-medium tracking-widest uppercase mb-4">
                            {badge}
                        </p>
                        <Heading level={1} className="text-4xl md:text-5xl lg:text-6xl font-raleway font-bold tracking-widest leading-tight text-white/90 mb-12" >
                            {title}
                        </Heading>
                        <div>
                            <p className="font-raleway text-white/70 text-base md:text-lg mb-8 leading-relaxed">
                                {description}
                            </p>
                        </div>
                        <div className="mt-10 md:mt-20 text-white uppercase flex flex-col sm:flex-row items-start sm:items-center w-max rounded-full sm:pr-2 sm:py-2">
                            <CtaButton
                                href={ctaHref}
                                className="w-max sm:w-auto py-3 px-6 mr-6 font-poppins text-base font-medium capitalize whitespace-nowrap"
                                baseColorClass="bg-white"
                                textColorClass="text-primary hover:text-white"
                                hoverColorClass="bg-accent"
                            >
                                {ctaText}
                            </CtaButton>

                            <span className="text-sm md:text-base text-left mb-4 sm:mb-0 uppercase tracking-wide">
                                Get <span className="text-accent font-semibold mx-1">{discountText}</span> on course fee
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

