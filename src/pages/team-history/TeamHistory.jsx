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
        </main>
    );
};

export default TeamHistory;