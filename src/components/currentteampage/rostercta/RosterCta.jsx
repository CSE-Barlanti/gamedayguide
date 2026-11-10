import "./RosterCta.css";
import { HashLink } from "react-router-hash-link";
import fullTeam from "../../../pages/current-team/images/fullTeam.webp";

const RosterCta = () => {
    return(
        <section className="roster-cta-section">
            <div className="roster-cta-content">
                <p className="roster-cta-label">GAMECOCK FOOTBALL</p>

                <h2>Ready For Saturday</h2>

                <p className="roster-cta-description">
                    Meet the players, follow the season, and experience the
                    energy that makes every Gamecock game day unforgettable.
                </p>

                <HashLink className="roster-cta-link" smooth to="/current-team#players">
                    View The Roster
                </HashLink>
            </div>

            <img
                className="roster-cta-image"
                src={fullTeam}
                alt="South Carolina Gamecock football team"
            />
        </section>
    );
};

export default RosterCta;