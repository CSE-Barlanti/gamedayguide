import "./Home.css";
import HomeHero from "../../components/home/hero/HomeHero";
import Countdown from "../../components/home/countdown/Countdown";
import GuideSection from "../../components/home/guidesection/GuideSection";
import Sandstorm from "../../components/home/sandstorm/Sandstorm";
import Newsletter from "../../components/home/newsletter/Newsletter";

const Home = () => {
    return (
        <main>
            <HomeHero />
            <Countdown />
            <GuideSection />
            <Sandstorm />
            <Newsletter />
        </main>
    );
};

export default Home;
