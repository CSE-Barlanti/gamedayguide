import "./GuideCard.css";

const GuideCard = (props) => {
    return (
        <article className="guide-card">
            <img src={props.image} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a className="guide-card-button" href={props.link}>{props.buttonText}</a>
        </article>
    );
};

export default GuideCard;