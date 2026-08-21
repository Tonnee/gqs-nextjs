import type { Metadata } from "next";
import VideoMaterialsHero from "@/features/video-materials/components/video-materials-hero";
import VideoMaterialsList from "@/features/video-materials/components/video-materials-list";
import { quantPrepData } from "@/features/video-materials/data/quant-prep-data";
import UpcomingCourses from "@/features/home/components/upcoming-courses";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";

export const metadata: Metadata = {
    title: "GRE Quant Preparation | Video Lessons & Practice | GRE Quant School",
    description: "Comprehensive GRE Quantitative preparation: formulas, arithmetic, algebra, geometry, statistics, and KMF Math sprint video walkthroughs.",
    openGraph: {
        title: "GRE Quant Preparation | GRE Quant School",
        description: "Explore topic-wise video lessons, high-yield formulas, problem-solving methods, and practice walkthroughs.",
        images: ["/images/student-banner.jpg"],
    },
};

export default function QuantPrepPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <VideoMaterialsHero
                badge="Prep Resources"
                title="GRE Quant Preparation"
                description="Explore topic-wise video lessons, high-yield formulas, problem-solving methods, and KMF practice walkthroughs."
                imageSrc="/images/student-banner.jpg"
                imageAlt="GRE Quant Preparation"
            />
            <VideoMaterialsList
                badge="Video Lessons"
                heading="Quantitative Preparation Materials"
                items={quantPrepData}
                youtubeChannelUrl="https://www.youtube.com/@GREQuantSchool"
                youtubeChannelText="Visit Our YouTube Channel"
            />
            <UpcomingCourses />
            <VisitSocial />
            <Contact />
        </main>
    );
}
