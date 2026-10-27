import "./Schedule&Results.css";
import GameDay from "./images/gamedayimage.webp";
import Schedule from "./images/scheduleHero.webp";

const Schedule = () => {
    return(
        <main>
            <section className="schedule-hero">
                <div className="schedule-hero-content">
                    <p className="schedule-label">2026 GAMECOCK FOOTBALL</p>

                    <h1>Schedule & Results</h1>

                    <p>
                        Follow the Gamecocks throughout the season, from
                        kickoff to the final whistle.
                    </p>
                </div>
                <img className="schedule-hero-image" src={Schedule} alt="Picture of the schedule" />
            </section>
            <section className="upcoming-games-section">
                <p className="section-label">
                    UP NEXT
                </p>
                <h2>Upcoming Games</h2>

                <div className="game-cards">
                    <article className="game-card">
                        <p className="game-date">September 26, 2026</p>
                        <h3>South Carolina vs. Alabama</h3>
                        <p>Bryant-Denny Stadium · Tuscaloosa, AL</p>
                        <a href="#tickets">Get Tickets →</a>
                    </article>
                    <article className="game-card">
                        <p className="game-date">October 3, 2026</p>
                        <h3>South Carolina vs. Georgia</h3>
                        <p>William-Brice Stadium · Columbia, SC </p>
                        <a href="#tickets">Get Tickets →</a>
                    </article>
                    <article className="game-card">
                        <p className="game-date">October 10th, 2026</p>
                        <h3>South Carolina vs. Tennesee</h3>
                        <p>William-Brice Stadium · Columbia, SC</p>
                        <a href="#tickets">Get Tickets →</a>
                    </article>
                </div>

            </section>
            <section className="results-section">
                <p className="section-label">SEASON RESULTS</p>
                <h2>Recent Results</h2>

                <div className="results-list">
                    <article className="result-card">
                        <div>
                            <p>August 29, 2026</p>
                            <h3>South Carolina 31 — 17 Coastal Carolina</h3>
                        </div>

                        <span className="win">W</span>
                    </article>

                    <article className="result-card">
                        <div>
                            <p>September 5, 2026</p>
                            <h3>South Carolina 24 — 20 Clemson</h3>
                        </div>

                        <span className="win">W</span>
                    </article>

                    <article className="result-card">
                        <div>
                            <p>September 12, 2026</p>
                            <h3>South Carolina 21 — 27 LSU</h3>
                        </div>

                        <span className="loss">L</span>
                    </article>
                </div>
            </section>
            <section className="game-day-cta-section">
                <div className="game-day-cta-content">
                    <p className="gameday-cta-label">
                        GAME DAY GUIDE
                    </p>

                    <h2>Plan Your Perfect Saturday</h2>

                    <p>
                        Find parking, tailgating information, stadium details,
                        and everything else you need before kickoff.
                    </p>

                    <a href="#gameday">Explore Game Day →</a>
                </div>

                <img
                    className="game-day-cta-image"
                    src={GameDay}
                    alt="Gamecock football game day at Williams-Brice Stadium"
                />
            </section>

        </main>
    );
};

export default Schedule;