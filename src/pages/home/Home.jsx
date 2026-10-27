import "./Home.css";
import heroStadium from "./images/willyBStadium.jpg";

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

        </main>
    );
        
};

export default Home;
