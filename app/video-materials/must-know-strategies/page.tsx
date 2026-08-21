import type { Metadata } from "next";
import VideoMaterialsHero from "@/features/video-materials/components/video-materials-hero";
import MustKnowStrategiesList from "@/features/video-materials/components/must-know-strategies-list";
import UpcomingCourses from "@/features/home/components/upcoming-courses";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";

export const metadata: Metadata = {
    title: "GRE Quant Must-Know Strategies | Video Lessons | GRE Quant School",
    description: "Learn proven strategies for GRE Quantitative Reasoning: mental math, formula roadmaps, 165+ score blueprint, mistake traps prevention, and exam day protocols.",
    openGraph: {
        title: "GRE Quant Must-Know Strategies | GRE Quant School",
        description: "Proven video lessons and strategic blueprints to achieve 165+ in GRE Quant.",
        images: ["/images/video-materials-banner.png"],
    },
};

export default function MustKnowStrategiesPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <VideoMaterialsHero
                badge="Video Resources"
                title="GRE Quant Must-know Strategies"
                imageSrc="/images/video-materials-banner.png"
                imageAlt="GRE Quant Must-Know Strategies"
            />
            <MustKnowStrategiesList />
            <UpcomingCourses />
            <VisitSocial />
            <Contact />
        </main>
    );
}
