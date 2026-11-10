import "./MilestoneCard.css";
const MilestoneCard = (props) => {
    return(
        <article className="milestone-card">
            <h3>{props.year}</h3>
            <p>{props.title}</p>
        </article>
    );
};
export default MilestoneCard;