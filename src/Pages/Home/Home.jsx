import AboutArtifacts from "../../Components/AboutArtifacts";
import Carousel from "../../Components/Carousel";
import FAQ from "../../Components/FAQ";
import FeaturedArtifacts from "../../Components/FeaturedArtifacts";
import Reviews from "../../Components/Reviews";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <FeaturedArtifacts></FeaturedArtifacts>
            <AboutArtifacts></AboutArtifacts>
            <Reviews></Reviews>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;