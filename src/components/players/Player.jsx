import "./Player.css";

const Player = (props) => {
    return (
        <article className="player-card">
            <img src={`${process.env.PUBLIC_URL}/${props.image}`} alt={props.name} />

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