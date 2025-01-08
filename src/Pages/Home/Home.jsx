import AboutArtifacts from "../../Components/AboutArtifacts";
import Carousel from "../../Components/Carousel";
import FeaturedArtifacts from "../../Components/FeaturedArtifacts";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <FeaturedArtifacts></FeaturedArtifacts>
            <AboutArtifacts></AboutArtifacts>
        </div>
    );
};

export default Home;