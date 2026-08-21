import type { Metadata } from "next";
import VideoMaterialsHero from "@/features/video-materials/components/video-materials-hero";
import VideoMaterialsList from "@/features/video-materials/components/video-materials-list";
import { confusingTopicsData } from "@/features/video-materials/data/confusing-topics-data";
import UpcomingCourses from "@/features/home/components/upcoming-courses";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";

export const metadata: Metadata = {
    title: "GRE Quant Confusing Topics | Video Lessons | GRE Quant School",
    description: "Clarify GRE Quant's most confusing topics: lines equations, coordinate geometry formulas, Venn diagrams, simple & compound interest, and parabola questions.",
    openGraph: {
        title: "GRE Quant Confusing Topics | GRE Quant School",
        description: "Deep dive video explanations demystifying high-frequency confusing concepts in GRE Quant.",
        images: ["/images/course-banner.png"],
    },
};

export default function ConfusingTopicsPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <VideoMaterialsHero
                badge="Video Resources"
                title="GRE Quant Confusing Topics"
                description="Eliminate confusion on tricky GRE concepts: lines equations, coordinate geometry, Venn diagrams, compound interest, and parabolas."
                imageSrc="/images/course-banner.png"
                imageAlt="GRE Quant Confusing Topics"
            />
            <VideoMaterialsList
                badge="Deep Dive Lessons"
                heading="GRE Quant Confusing Topics"
                items={confusingTopicsData}
                youtubeChannelUrl="https://www.youtube.com/@GREQuantSchool"
                youtubeChannelText="Visit Our YouTube Channel"
            />
            <UpcomingCourses />
            <VisitSocial />
            <Contact />
        </main>
    );
}
