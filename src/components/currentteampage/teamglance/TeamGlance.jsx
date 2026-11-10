import "./TeamGlance.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import teamGlanceLeft from "../../../pages/current-team/images/22d028e7-f6v82qjxiaam4uk.webp";
import teamGlanceRight from "../../../pages/current-team/images/CUrrentTeamImage.webp";

const TeamGlance = () => {
    return(
        <section className="team-glance-section">
            <img
                className="team-glance-image"
                src={teamGlanceLeft}
                alt="Gamecock football player"
            />

            <div className="team-glance-content">
                <h2>Team At A Glance</h2>

                <p>
                    A balanced roster built around leadership, depth, and
                    game-day energy.
                </p>

                <div className="team-glance-buttons">
                    <HashLink className="team-glance-button" smooth to="/current-team#players">
                        View The Roster
                    </HashLink>

                    <Link className="team-glance-button" to="/schedule&results">
                        See The Schedule
                    </Link>
                </div>
            </div>

            <img
                className="team-glance-image"
                src={teamGlanceRight}
                alt="Gamecock football player"
            />
        </section>
    );
};

export default TeamGlance;