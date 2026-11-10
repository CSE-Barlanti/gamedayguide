import "./GameDayCta.css";
import { Link } from "react-router-dom";
import GameDay from "../../../pages/schedule&results/images/gamedayimage.webp";

const GameDayCta = () => {
    return(
        <section className="game-day-cta-section">
            <div className="game-day-cta-content">
                <p className="gameday-cta-label">GAME DAY GUIDE</p>

                <h2>Plan Your Perfect Saturday</h2>

                <p>
                    Find parking, tailgating information, stadium details,
                    and everything else you need before kickoff.
                </p>

                <Link to="/">Explore Game Day →</Link>
            </div>

            <img
                className="game-day-cta-image"
                src={GameDay}
                alt="Gamecock football game day at Williams-Brice Stadium"
            />
        </section>
    );
};

export default GameDayCta;