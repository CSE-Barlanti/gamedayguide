import "./GuideSection.css";
import GuideCard from "../guidecard/GuideCard";
import parkingMap from "../../../pages/home/images/ParkingZones.jpg";
import tailgatingZones from "../../../pages/home/images/Gamecock-Park-Columbia-SC-Sitemap.jpeg";
import tailgateSetup from "../../../pages/home/images/Tailgate.webp";

const GuideSection = () => {
    return (
        <section className="game-day-guide-section">
            <p className="guide-label">● GAME DAY LOGISTICS</p>
            <h2>Parking & Tailgating Guide</h2>
            <p className="guide-description">
                Everything you need to plan your arrival and pre-game setup around
                Williams-Brice.
            </p>

            <div className="guide-cards">
                <GuideCard
                    image={parkingMap}
                    alt="Parking map for Williams-Brice Stadium"
                    title="Parking Map"
                    description="Explore reserved lots, public parking garages, and shuttle pickup routes around the fairgrounds."
                    buttonText="Explore Map"
                    link="#parking"
                />
                <GuideCard
                    image={tailgatingZones}
                    alt="Map of Gamecock tailgating zones"
                    title="Tailgating Zones"
                    description="Find the best tailgating areas, arrival tips, and game-day atmosphere for your crew."
                    buttonText="Find Zones"
                    link="#tailgating"
                />
                <GuideCard
                    image={tailgateSetup}
                    alt="Gamecock tailgating setup"
                    title="What To Bring"
                    description="Review stadium policies, weather checklists, and essential gear for the perfect Carolina tailgate."
                    buttonText="Checklist"
                    link="#checklist"
                />
            </div>
        </section>
    );
};

export default GuideSection;