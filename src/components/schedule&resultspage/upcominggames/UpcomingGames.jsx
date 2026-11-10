import "./UpcomingGames.css";
import GameCard from "../gamecard/GameCard";

const UpcomingGames = () => {
    return(
        <section className="upcoming-games-section">
            <p className="upcoming-label">UP NEXT</p>
            <h2>Upcoming Games</h2>

            <div className="game-cards">
                <GameCard
                    date="September 26, 2026"
                    title="South Carolina vs. Alabama"
                    location="Bryant-Denny Stadium · Tuscaloosa, AL"
                />
                <GameCard
                    date="October 3, 2026"
                    title="South Carolina vs. Georgia"
                    location="Williams-Brice Stadium · Columbia, SC"
                />
                <GameCard
                    date="October 10, 2026"
                    title="South Carolina vs. Tennessee"
                    location="Williams-Brice Stadium · Columbia, SC"
                />
            </div>
        </section>
    );
};

export default UpcomingGames;