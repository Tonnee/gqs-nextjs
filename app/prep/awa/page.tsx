import type { Metadata } from "next";
import VideoMaterialsHero from "@/features/video-materials/components/video-materials-hero";
import AwaPrepContent from "@/features/awa-prep/components/awa-prep-content";
import UpcomingCourses from "@/features/home/components/upcoming-courses";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";

export const metadata: Metadata = {
    title: "GRE AWA Preparation | 110 Issue Prompts & Sample Essays | GRE Quant School",
    description: "Prepare for GRE Analytical Writing: official Pool of Issue Topics, ETS scoring guidelines, GregMat essay strategy videos, and 110 sample model essays.",
    openGraph: {
        title: "GRE AWA Preparation & 110 Model Essays | GRE Quant School",
        description: "Official pool of issue topics, essay templates, walkthrough videos, and comprehensive sample answers.",
        images: ["/images/student-banner.jpg"],
    },
};

export default function AwaPrepPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <VideoMaterialsHero
                badge="Writing Preparation Guide"
                title="GRE Analytical Writing (AWA)"
                description="Master the GRE Issue Task with official ETS prompt pools, scoring criteria guidelines, GregMat video walkthrough templates, and 110 sample model essays analyzed by experts."
                imageSrc="/images/student-banner.jpg"
                imageAlt="GRE Analytical Writing Preparation"
            />
            <AwaPrepContent />
            <UpcomingCourses />
            <VisitSocial />
            <Contact />
        </main>
    );
}
