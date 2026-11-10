import "./GameCard.css";

const GameCard = (props) => {
    return(
        <article className="game-card">
            <p className="game-date">{props.date}</p>
            <h3>{props.title}</h3>
            <p>{props.location}</p>
            <a
                href="https://gamecocksonline.com/tickets/"
                target="_blank"
                rel="noreferrer"
            >
                Get Tickets →
            </a>
        </article>
    );
};

export default GameCard;