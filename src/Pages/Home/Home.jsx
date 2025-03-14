import AboutArtifacts from "../../Components/AboutArtifacts";
import Carousel from "../../Components/Carousel";
import FAQ from "../../Components/FAQ";
import FeaturedArtifacts from "../../Components/FeaturedArtifacts";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <FeaturedArtifacts></FeaturedArtifacts>
            <div id='about-section'>
                <AboutArtifacts></AboutArtifacts>
            </div>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;