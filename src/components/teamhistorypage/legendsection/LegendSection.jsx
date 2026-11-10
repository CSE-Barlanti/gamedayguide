import "./LegendSection.css";
import LegendCard from "../legendcard/LegendCard";
import GeorgeRogers from "../../../pages/team-history/images/georgerogers.webp";
import SterlingSharpe from "../../../pages/team-history/images/sterlingsharpe.webp";
import SteveSpurrier from "../../../pages/team-history/images/stevespurrier.webp";

const LegendSection = () => {
    return(
        <section className="legends-section">
            <div className="legends-heading">
                <h2>GameCock Legends</h2>

                <div className="legends-heading-line"></div>

                <p>
                    The players and leaders whose impact reaches far beyond the final whistle.
                </p>
            </div>

            <div className="legend-cards">
                <LegendCard
                    image={GeorgeRogers}
                    alt="George Rogers"
                    title="1980 Heisman Trophy Winner"
                    text="Rogers led the nation with 1,894 rushing yards in 1980 and still holds Carolina's career rushing record with 5,204 yards."
                />
                <LegendCard
                    image={SterlingSharpe}
                    alt="Sterling Sharpe"
                    title="Record Setting Receiver"
                    text="Sharpe finished his Carolina career with 169 receptions, 2,497 receiving yards, and 17 touchdowns."
                />
                <LegendCard
                    image={SteveSpurrier}
                    alt="Coach Steve Spurrier"
                    title="Winningest Coach In Program History"
                    text="Spurrier led Carolina to its first SEC East title and the program's only three 11-win seasons."
                />
            </div>
        </section>
    );
};

export default LegendSection;