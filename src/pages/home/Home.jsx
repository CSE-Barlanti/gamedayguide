import "./Home.css";
import heroStadium from "./images/willyBStadium.jpg";
import parkingMap from "./images/ParkingZones.jpg";
import tailgatingZones from "./images/Gamecock-Park-Columbia-SC-Sitemap.jpeg";
import tailgateSetup from "./images/Tailgate.webp";
import sandstormImage from "./images/Sandstorm2.webp";

const Home = () => {
    return(
        <main>
            <section className ="home-hero">

                <img
                        className="hero-background-image"
                        src={heroStadium}
                        alt="Williams-Brice Stadium before a Gamecock football game"
                 />
                    
                <div className="hero-overlay"></div>

                <div className ="hero-content">


                    <p className="hero-label">The Ultimate Fan Portal</p>

                    <h1>GameCock <br /> Game Day Guide</h1>
                    <p className="hero-description">
                        Your Ultimate Guide to South Carolina Football
                        Saturdays. From Williams-Brice tailgate spots to the
                        legendary SandStorm.
                    </p>

                    <div className="hero-buttons">
                        <a className="hero-button" href="#gameday">
                            Explore Game Day →
                        </a>
                        <a className="hero-button" href="#schedule">
                            View Schedule
                        </a>
                    </div>


                </div>
            </section>
            <section className = "countdown-section">
                <p className="countdown-label">● COUNTDOWN TO KICKOFF</p>

                <h2>The Next Road Battle</h2>

                <section className="matchup-card">
                    <div className="team">
                        <div className="team-symbol gamecock-symbol">SC</div>
                        <h3>GAMECOCKS</h3>
                    </div>

                    <p className="versus">VS</p>

                    <div className="team">
                        <div className="team-symbol alabama-symbol">AL</div>
                        <h3>ALABAMA</h3>
                    </div>
                    <div className="game-details">
                        <h3>SEC MATCHUP</h3>
                        <p className="game-date">September 26, 2026 · 7:00 PM</p>
                        <p className="game-location">
                            Bryant-Denny Stadium · Tuscaloosa, AL
                        </p>
                    </div>

                    <a className="tickets-button" href="#tickets">
                        Get Tickets →
                    </a>
                </section>
            </section>
            <section className="game-day-guide-section">
                <p className="guide-label">● GAME DAY LOGISTICS</p>

                <h2>Parking & Tailgating Guide</h2>

                <p className="guide-description">
                    Everything you need to plan your arrival and pre-game setup around
                    Williams-Brice.
                </p>

                <div className="guide-cards">
                    <article className="guide-card">
                        <img
                            src={parkingMap}
                            alt="Parking map for Williams-Brice Stadium"
                        />

                        <h3>Parking Map</h3>

                        <p>
                            Explore reserved lots, public parking garages, and shuttle
                            pickup routes around the fairgrounds.
                        </p>

                        <a className="guide-card-button" href="#parking">Explore Map</a>
                    </article>

                    <article className="guide-card">
                        <img
                            src={tailgatingZones}
                            alt="Map of Gamecock tailgating zones"
                        />

                        <h3>Tailgating Zones</h3>

                        <p>
                            Find the best tailgating areas, arrival tips, and game-day
                            atmosphere for your crew.
                        </p>

                        <a className="guide-card-button" href="#tailgating">Find Zones</a>
                    </article>

                    <article className="guide-card">
                        <img
                            src={tailgateSetup}
                            alt="Gamecock tailgating setup"
                        />

                        <h3>What To Bring</h3>

                        <p>
                            Review stadium policies, weather checklists, and essential
                            gear for the perfect Carolina tailgate.
                        </p>

                        <a className="guide-card-button" href="#checklist">Checklist</a>
                    </article>
                </div>
            </section>
            <section className="sandstorm-section">
                <div className="sandstorm-content">
                    <p className="sandstorm-label">● LEGENDARY TRADITION</p>

                    <h2>The Sandstorm<br />Tradition</h2>

                    <p>
                        Experience Williams-Brice Stadium erupting to Darude’s
                        “Sandstorm” as 80,000 screaming fans wave white rally towels.
                        Introduced in 2001, it remains one of the most electric intro
                        sequences and home-field advantages in college football.
                    </p>

                    <a className="sandstorm-button" href="#sandstorm">
                        Watch Video ▶
                    </a>
                </div>

                <img
                    className="sandstorm-image"
                    src={sandstormImage}
                    alt="Gamecock fans participating in the Sandstorm tradition"
                />
            </section>

            <section className="newsletter-section">
                <h2>Never Miss A Gameday</h2>

                <p>
                    Sign up for weekly email digests with parking updates, matchup
                    previews, and exclusive Gamecock fan content.
                </p>

                <div className="newsletter-signup">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        aria-label="Email address"
                    />

                    <button type="button">Subscribe</button>
                </div>
            </section>
        </main>
    );
        
};

export default Home;
