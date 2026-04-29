import type { Metadata } from "next";
import VideoMaterialsHero from "@/features/video-materials/components/video-materials-hero";
import VideoMaterialsGrid from "@/features/video-materials/components/video-materials-grid";
import MasterPieces from "@/features/home/components/master-pieces";
import UpcomingCourses from "@/features/home/components/upcoming-courses";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";

export const metadata: Metadata = {
    title: "Video Materials | GRE Quant School",
    description: "Library of instructional videos for GRE Quant concepts.",
};

export default function VideoMaterialsPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <VideoMaterialsHero />
            <VideoMaterialsGrid />
            <MasterPieces />
            <UpcomingCourses />
            <VisitSocial />
            <Contact />
        </main>
    );
}
