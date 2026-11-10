import "./ScheduleHero.css";
import scheduleHeroImage from "../../../pages/schedule&results/images/scheduleHero.webp";

const ScheduleHero = () => {
    return(
        <section className="schedule-hero">
            <div className="schedule-hero-content">
                <p className="schedule-label">2026 GAMECOCK FOOTBALL</p>

                <h1>Schedule & Results</h1>

                <p>
                    Follow the Gamecocks throughout the season, from
                    kickoff to the final whistle.
                </p>
            </div>

            <img
                className="schedule-hero-image"
                src={scheduleHeroImage}
                alt="Gamecocks football game at Williams-Brice Stadium"
            />
        </section>
    );
};

export default ScheduleHero;