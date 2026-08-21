import type { Metadata } from "next";
import VideoMaterialsHero from "@/features/video-materials/components/video-materials-hero";
import VideoMaterialsList from "@/features/video-materials/components/video-materials-list";
import { basicsSessionsData } from "@/features/video-materials/data/basics-sessions-data";
import UpcomingCourses from "@/features/home/components/upcoming-courses";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";

export const metadata: Metadata = {
    title: "GRE Quant Basic Sessions | Video Lessons | GRE Quant School",
    description: "Master GRE Quant fundamentals: inequalities, geometry problem solving, statistics, probability, counting, and coordinate geometry.",
    openGraph: {
        title: "GRE Quant Basic Sessions | GRE Quant School",
        description: "Foundational video lessons and topic-by-topic concept reviews for GRE Quantitative Reasoning.",
        images: ["/images/student-banner.jpg"],
    },
};

export default function BasicsSessionsPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <VideoMaterialsHero
                badge="Video Resources"
                title="GRE Quant Basic Sessions"
                description="Strengthen your fundamentals across Algebra, Geometry, Statistics, and Word Problems with comprehensive topic walkthroughs."
                imageSrc="/images/student-banner.jpg"
                imageAlt="GRE Quant Basic Sessions"
            />
            <VideoMaterialsList
                badge="Foundation Lessons"
                heading="GRE Quant Basic Sessions"
                items={basicsSessionsData}
                youtubeChannelUrl="https://www.youtube.com/@GREQuantSchool"
                youtubeChannelText="Visit Our YouTube Channel"
            />
            <UpcomingCourses />
            <VisitSocial />
            <Contact />
        </main>
    );
}
