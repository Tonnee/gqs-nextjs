import { mustKnowStrategiesData } from "../data/must-know-strategies-data";
import VideoMaterialsList from "./video-materials-list";

export default function MustKnowStrategiesList() {
    return (
        <VideoMaterialsList
            badge="Proven Video Tactics"
            heading="GRE Quant Must-Know Strategies"
            items={mustKnowStrategiesData}
            youtubeChannelUrl="https://www.youtube.com/@GREQuantSchool"
            youtubeChannelText="Visit Our YouTube Channel"
        />
    );
}


