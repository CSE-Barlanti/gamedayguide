import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./CurrentTeam.css";
import Player from "../../components/players/Player";

import teamGlanceLeft from "./images/22d028e7-f6v82qjxiaam4uk.webp";
import teamGlanceRight from "./images/CUrrentTeamImage.webp";
import fullTeam from "./images/fullTeam.webp";

const CurrentTeam = () => {
    const [players, setPlayers] = useState([]);

    const getPlayers = async () => {
        const response = await fetch(
            `${process.env.PUBLIC_URL}/players.json`
        );

        return response.json();
    };

    const showPlayers = async () => {
        const playerData = await getPlayers();
        setPlayers(playerData);
    };

    useEffect(() => {
        showPlayers();
    }, []);

    return (
        <main>
            <section className="current-team-hero">
                <div className="current-team-banner">
                    <div className="current-team-emblem">C</div>

                    <div className="current-team-intro">
                        <h1>Meet The Gamecocks</h1>

                        <p>
                            Explore the athletes, leaders, and coaches who bring
                            energy to every Saturday in Columbia.
                        </p>
                    </div>
                </div>
            </section>

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

            <section className="superstars-section" id="players">
                <p className="superstars-label">CURRENT GAMECOCKS</p>

                <h2>Gamecock Superstars</h2>

                <p className="superstars-intro">
                    The leaders and playmakers driving South Carolina football today.
                </p>

                <div className="players-list">
                    {players.map((player) => (
                        <Player
                            key={player._id}
                            name={player.name}
                            number={player.number}
                            position={player.position}
                            height={player.height}
                            weight={player.weight}
                            year={player.year}
                            hometown={player.hometown}
                            image={player.image}
                        />
                    ))}
                </div>
            </section>

            <section className="roster-cta-section">
                <div className="roster-cta-content">
                    <p className="roster-cta-label">GAMECOCK FOOTBALL</p>

                    <h2>Ready For Saturday</h2>

                    <p className="roster-cta-description">
                        Meet the players, follow the season, and experience the
                        energy that makes every Gamecock game day unforgettable.
                    </p>

                    <HashLink className="team-glance-button" smooth to="/current-team#players">
                        View The Roster
                    </HashLink>
                </div>

                <img
                    className="roster-cta-image"
                    src={fullTeam}
                    alt="South Carolina Gamecock football team"
                />
            </section>
        </main>
    );
};

export default CurrentTeam;