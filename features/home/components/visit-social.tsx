import { Container } from "@/components/layout/container";
import { CtaButton } from "@/components/layout/cta-button";

interface VisitSocialProps {
    className?: string;
    platform?: "youtube" | "facebook";
}

export default function VisitSocial({
    className,
    platform = "youtube",
}: VisitSocialProps) {
    const isYoutube = platform === "youtube";

    const headingText = isYoutube
        ? "96 videos and counting – dive into our growing library of GRE Quant insights."
        : "14K followers and counting - Join our facebook group to get the latest updates.";

    const descriptionText = isYoutube
        ? "Explore our YouTube channel for expert tips, problem-solving strategies, and free GRE Quant lessons. Watch, learn, and practice with engaging videos designed to boost your preparation. Subscribe now to stay updated and take your GRE prep to the next level!"
        : "Explore our Facebook group for expert tips, problem-solving strategies, and free GRE Quant lessons. Watch, learn, and practice with engaging videos designed to boost your preparation. Subscribe now to stay updated and take your GRE prep to the next level!";

    const ctaText = isYoutube
        ? "Visit our YouTube Channel"
        : "Join our Facebook Group";

    const ctaLink = isYoutube
        ? "https://youtube.com"
        : "https://facebook.com/grequantschoolonline";

    return (
        <section className={`mt-20 md:mt-24 ${className || ""}`}>
            <Container>
                <div className={`bg-primary-soft rounded-3xl px-6 py-16 md:px-12 md:py-20 lg:px-44 lg:pt-22 lg:pb-14 text-center ${className || ""}`}>
                    <h6 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                        {headingText}
                    </h6>
                    <p className="text-sm md:text-base font-normal leading-relaxed text-white/75 mt-6 mb-10 max-w-3xl mx-auto">
                        {descriptionText}
                    </p>
                    <CtaButton
                        href={ctaLink}
                        className="px-8 py-3.5"
                        baseColorClass="bg-accent"
                        hoverColorClass="bg-white"
                        textColorClass="text-white hover:text-primary"
                    >
                        {ctaText}
                    </CtaButton>
                </div>
            </Container>
        </section>
    );
}
