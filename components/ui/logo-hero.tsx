import React from "react";
import Heading from "@/components/ui/heading";
import { Container } from "@/components/layout/container";

interface HoloHeroProps {
    backgroundImage: string;
    title: React.ReactNode;
    subtitle: React.ReactNode;
}

export default function LogoHero({
    backgroundImage,
    title,
    subtitle,
}: HoloHeroProps) {
    return (
        <section 
            className="w-full bg-cover bg-center bg-no-repeat py-20 md:py-32"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
        >
            <Container>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-start-7 md:col-span-6 text-left flex flex-col justify-center">
                        <Heading level={1} className="text-5xl md:text-[72px] font-extrabold text-primary-deep leading-tight tracking-wide mb-[50px]">
                            {title}
                        </Heading>
                        <p className="font-raleway text-2xl md:text-[32px] font-semibold text-accent">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
