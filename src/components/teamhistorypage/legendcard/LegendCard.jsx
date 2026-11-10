import "./LegendCard.css";

const LegendCard = (props) => {
    return(
        <article className="legend-card">
            <img
                className="legend-image"
                src={props.image}
                alt={props.alt}
            />

            <div className="legend-card-content">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </article>
    );
};

export default LegendCard;