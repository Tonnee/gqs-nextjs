import type { Metadata } from "next";
import InstructorHero from "@/features/instructor-profile/components/instructor-hero";
import InstructorProfileContent from "@/features/instructor-profile/components/instructor-profile-content";
import MasterPieces from "@/features/home/components/master-pieces";
import UpcomingCourses from "@/features/home/components/upcoming-courses";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";

export const metadata: Metadata = {
    title: "Instructor Profile - Sourav Simanta | GRE Quant School",
    description: "Learn more about Sourav Simanta, GRE Quant 170 scorer, PhD student at UMBC, and lead mentor at GRE Quant School.",
};

export default function InstructorProfilePage() {
    return (
        <main className="min-h-screen">
            <InstructorHero />
            <InstructorProfileContent />
            <MasterPieces />
            <UpcomingCourses />
            <VisitSocial />
            <Contact />
        </main>
    );
}

