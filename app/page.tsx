import Banner from "./_sections/Banner";
import Reviews from "./_sections/Review";
import UpcomingBatches from "./_sections/UpcomingBatches";
import DemoClasses from "@/app/_sections/DemoClasses";
import MasterPieces from "./_sections/master-pieces";
import VisitChannel from "@/app/_sections/VisitChannel";
import Contact from "@/app/_sections/Contact";
import HomeFaq from "@/app/_sections/HomeFaq";

export default function Home() {
    return <>
        <Banner />
        <UpcomingBatches />
        <Reviews />
        <DemoClasses />
        <MasterPieces />
        <VisitChannel />
        <Contact />
        <HomeFaq/>
    </>;
}
