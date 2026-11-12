import "./Player.css";

const Player = (props) => {
    return (
        <article className="player-card">
            <img src={`https://gamecock-server-alqe.onrender.com/images/${props.image}`} alt={props.name} />

            <div className="player-content">
                <p className="player-number">#{props.number}</p>
                <h2>{props.name}</h2>
                <p className="player-position">
                    {props.position} • {props.year}
                </p>
                <p>
                    {props.height} • {props.weight} lbs
                </p>
                <p>{props.hometown}</p>
            </div>
        </article>
    );
};

export default Player;

/*
const Player = (props) => {
    const showPlayerDetails = () => {
        setShowPlayers(true);
    }

    const hidePlayerDetails = () => {
        setShowPlayers(false);
    }

    return(
        <section className="player-card" onMouseEnter={showPlayerDetails} onMouseLeave={hidePlayerDetails}>
            <img src={`https://gamecock-server-alqe.onrender.com/images/${props.image}`} alt={props.name} />
            <h3>{props.name}</h3>
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
    )
}*/

