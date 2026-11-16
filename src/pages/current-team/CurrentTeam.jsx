import { useEffect, useState } from "react";
import "./CurrentTeam.css";
import Player from "../../components/players/Player";
import AddPlayer from "../../components/players/AddPlayer";
import TeamHero from "../../components/currentteampage/teamhero/TeamHero";
import TeamGlance from "../../components/currentteampage/teamglance/TeamGlance";
import RosterCta from "../../components/currentteampage/rostercta/RosterCta";
import axios from "axios";
import { API_BASE_URL } from "../../config";




const CurrentTeam = () => {
    const [players, setPlayers] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const addPlayerToList = (player) => {
        setPlayers((players) => [...players, player]);
    };

    useEffect(() => {
        const loadPlayers = async () => {
            const response = await axios.get(`${API_BASE_URL}/api/players`);
            setPlayers(response.data);
        };
        loadPlayers();
    }, []);

    return (

        <main>
            <TeamHero />
            <TeamGlance />


            <section className="superstars-section" id="players">
                <p className="superstars-label">CURRENT GAMECOCKS</p>

                <h2>Gamecock Superstars</h2>

                <p className="superstars-intro">
                    The leaders and playmakers driving South Carolina football today.
                </p>

                <button className="add-player-button" onClick={() => setShowAddDialog(true)}>
                    + Add Player
                </button>

                {showAddDialog && (
                    <AddPlayer
                        close_dialog={() => setShowAddDialog(false)}
                        add_player_to_list={addPlayerToList}
                    />
                )}

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

            <RosterCta />
        </main>
    );
};

export default CurrentTeam;