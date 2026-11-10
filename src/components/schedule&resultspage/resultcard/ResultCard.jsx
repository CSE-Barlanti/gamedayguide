import "./ResultCard.css";

const ResultCard = (props) => {
    return(
        <article className="result-card">
            <div>
                <p>{props.date}</p>
                <h3>{props.score}</h3>
            </div>

            <span className={props.outcome}>{props.letter}</span>
        </article>
    );
};

export default ResultCard;