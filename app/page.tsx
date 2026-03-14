import Banner from "@/features/home/components/banner";
import Reviews from "@/features/home/components/review";
import UpcomingBatches from "@/features/home/components/upcoming-batches";
import DemoClasses from "@/features/home/components/demo-classes";
import MasterPieces from "@/features/home/components/master-pieces";
import VisitChannel from "@/features/home/components/visit-channel";
import Contact from "@/features/home/components/contact";
import HomeFaq from "@/features/home/components/home-faq";

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
