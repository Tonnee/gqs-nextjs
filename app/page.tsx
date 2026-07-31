import Banner from "@/features/home/components/banner";
import Reviews from "@/features/home/components/review";
import UpcomingCourses from "@/features/home/components/upcoming-courses";
import DemoClasses from "@/features/home/components/demo-classes";
import MasterPieces from "@/features/home/components/master-pieces";
import VisitSocial from "@/features/home/components/visit-social";
import Contact from "@/features/home/components/contact";
import HomeFaq from "@/features/home/components/home-faq";
import { getLandingDataServer } from "@/features/home/data/landing-server";

export default function Home() {
    const landingData = getLandingDataServer();

    return (
        <>
            <Banner data={landingData} />
            <UpcomingCourses />
            <Reviews />
            <DemoClasses />
            <MasterPieces />
            <VisitSocial />
            <Contact />
            <HomeFaq />
        </>
    );
}
