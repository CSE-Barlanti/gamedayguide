import HomeHero from "../../components/homepage/homehero/HomeHero";
import Countdown from "../../components/homepage/countdown/Countdown";
import GuideSection from "../../components/homepage/guidesection/GuideSection";
import Sandstorm from "../../components/homepage/sandstorm/Sandstorm";
import Newsletter from "../../components/homepage/newsletter/Newsletter";

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
