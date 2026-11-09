import "./Countdown.css";

const Countdown = () => {
    return(
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
    )
}

export default Countdown;