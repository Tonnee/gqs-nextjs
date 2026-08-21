import type { Metadata } from "next";
import VideoMaterialsHero from "@/features/video-materials/components/video-materials-hero";
import VerbalPrepContent from "@/features/verbal-prep/components/verbal-prep-content";
import UpcomingCourses from "@/features/home/components/upcoming-courses";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";

export const metadata: Metadata = {
    title: "GRE Verbal Preparation | Study Materials & Word Lists | GRE Quant School",
    description: "Free GRE Verbal reasoning resources: reading habit publications, high-frequency word lists, Text Completion, Sentence Equivalence, and RC practice books.",
    openGraph: {
        title: "GRE Verbal Preparation Resources | GRE Quant School",
        description: "Official guides, GregMat and Magoosh word lists, ETS Verbal books, and KMF question sets.",
        images: ["/images/student-banner.jpg"],
    },
};

export default function VerbalPrepPage() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <VideoMaterialsHero
                badge="Verbal Preparation Guide"
                title="Improve Your Reading Ability"
                description="Improving your reading ability for the GRE Verbal section requires a combination of strategic habits: active skimming, argument mapping, and structural comprehension. Consistent exposure to high-level academic prose builds stamina and analytical speed for long passages."
                imageSrc="/images/student-banner.jpg"
                imageAlt="GRE Verbal Preparation"
            />
            <VerbalPrepContent />
            <UpcomingCourses />
            <VisitSocial />
            <Contact />
        </main>
    );
}
