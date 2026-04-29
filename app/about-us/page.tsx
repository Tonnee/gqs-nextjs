import type { Metadata } from "next";
import LogoHero from "@/components/ui/logo-hero";
import SectionHeading from "@/components/ui/section-heading";
import { Container } from "@/components/layout/container";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";

export const metadata: Metadata = {
    title: "About Us | GRE Quant School",
    description: "The story behind GRE Quant School and our mission.",
};

export default function AboutUsPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <LogoHero
                backgroundImage="/images/logo-page-banner.png"
                title={
                    <>
                        <span>
                            GRE Quant School
                        </span>
                    </>
                }
                subtitle="1000+ success stories"
            />

            <section className="py-20 md:py-28">
                <Container>
                    <SectionHeading
                        level={2}
                        topText="ABOUT"
                        headingText="Who We Are?"
                        className="text-3xl md:text-[40px] font-extrabold text-primary-deep mb-8"
                        align="text-center"
                    />
                    <div className="max-w-6xl mx-auto text-center font-raleway text-lg text-neutral-600 leading-relaxed space-y-6">
                        <p>
                            GRE Quant School was founded with a singular mission: to make high-quality GRE preparation accessible, effective, and engaging for everyone. We understand that the GRE can be a daunting hurdle, but with the right guidance and practice, it becomes a stepping stone to your future.
                        </p>
                        <p>
                            Are you looking to ace the Quant section of the GRE? Our personalized mentorship is here to help. With proven strategies and individualized approaches, we'll guide you to success and help you achieve your desired score. Join us on this exciting journey and let's reach your GRE goals together.
                        </p>
                    </div>
                </Container>
            </section>

            <VisitSocial platform="facebook" />
            <Contact/>
        </main>
    );
}
