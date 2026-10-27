import "./TeamHistory.css";
import WilliamBriceImage from "./images/HeroImageWillyB.webp";
import GeorgeRogers from "./images/georgerogers.webp";
import SterlingSharpe from "./images/sterlingsharpe.webp";
import SteveSpurrier from "./images/stevespurrier.webp";


const TeamHistory = () => {
    return(
        <main>
            <section className="history-hero">
                <div className="hero-banner">
                    <div className="hero-emblem">C</div>

                    <div className="hero-intro">
                        <h1>A Legacy Written In Garnet</h1>
                        
                        <p>
                            From early traditions to unforgettable game-day
                            moments, explore the history that built Gamecock
                            football.
                        </p>
                    </div>
                    <div className="history-year">
                        <div></div>
                        <p>EST<br />1892</p>
                        <div></div>

                    </div>
                </div>

                <img
                    className="hero-image"
                    src={WilliamBriceImage}
                    alt="Gamecock Stadium"
                />
            </section>

            <section className="milestones-section">
                <h2>GameCock Football Milestones</h2>
                <p className="milestones-intro">
                    Four defining seasons in Gamecock football history.
                </p>

                <div className="milestone-cards">
                    <article className="milestone-card">
                        <h3>1892</h3>
                        <p>First Football Season</p>
                    </article>
                    <article className="milestone-card">
                        <h3>1969</h3>
                        <p>ACC Season Champions</p>
                    </article>
                    <article className="milestone-card">
                        <h3>1980</h3>
                        <p>FIrst Heisman Winner: George Rogers</p>
                    </article>
                    <article className="milestone-card">
                        <h3>2010</h3>
                        <p>SEC East Champions</p>
                    </article>
                </div>
            </section>
            <section className="legends-section">
                <div className="legends-heading">
                    <h2>GameCock Legends</h2>

                    <div className="legends-heading-line"></div>

                    <p>
                        The players and leaders whose impact reaches far beyond the final whistle.
                    </p>
                </div>

                <div className="legend-cards">
                    <article className="legend-card">
                        <img
                            className="legend-image"
                            src={GeorgeRogers}
                            alt="Gamecock Stadium"
                        />

                        <div className="legend-card-content">
                            <h3>1980 Heisman Trophy Winner</h3>

                            <p>
                                Rogers led the nation with 1,894 rushing yards in 1980 and
                                still holds Carolina&apos;s career rushing record with 5,204 yards.
                            </p>
                        </div>
                    </article>
                    <article className="legend-card">
                        <img
                            className="legend-image"
                            src={SterlingSharpe}
                            alt="Gamecock Stadium"
                        />

                        <div className="legend-card-content">
                            <h3>Record Setting Receiver</h3>

                            <p>
                                Sharpe finished his Carolina career with 169 receptions,
                                2,497 receiving yards, and 17 touchdowns.
                            </p>
                        </div>
                    </article>
                    <article className="legend-card">
                        <img
                            className="legend-image"
                            src={SteveSpurrier}
                            alt="Gamecock Stadium"
                        />

                        <div className="legend-card-content">
                            <h3>Winningest Coach In Program History</h3>

                            <p>
                                 Spurrier led Carolina to its first SEC East title and the
                                program&apos;s only three 11-win seasons.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <section className="history-cta-section">
                <h2>Ready For Next Kickoff?</h2>

                <p>
                    Everything you need for an unforgettable Saturday at Williams-Brice
                    Stadium is waiting in the Game-Day Guide.
                </p>

                <a className="history-cta-button" href="#gameday">
                    Plan Your Game Day
                </a>
            </section>
        </main>
    );
};

export default TeamHistory;