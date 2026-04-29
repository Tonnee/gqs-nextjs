import Contact from "@/features/home/components/contact";
import MasterPieces from "@/features/home/components/master-pieces";
import Reviews from "@/features/home/components/review";
import UpcomingCourses from "@/features/home/components/upcoming-courses";
import VisitSocial from "@/features/home/components/visit-social";
import ReviewsList from "@/features/reviews/components/reviews-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Student Reviews | GRE Quant School",
    description: "Read success stories and testimonials from past students.",
};

export default function ReviewsPage() {
    return (
        <main className="min-h-screen">
            <Reviews className="bg-primary" />
            <ReviewsList />
            <MasterPieces />
            <UpcomingCourses />
            <VisitSocial />
            <Contact/>
        </main>
    );
}
