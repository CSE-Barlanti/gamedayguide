import "./TeamHistory.css";
import WilliamBriceImage from "./images/HeroImageWillyB.webp";


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
        </main>
    );
};

export default TeamHistory;