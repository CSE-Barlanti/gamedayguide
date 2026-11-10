import "./PhotoCard.css";

const PhotoCard = (props) => {
    return(
        <figure className="photo-card">
            <img src={props.image} alt={props.alt} />
            <figcaption>{props.caption}</figcaption>
        </figure>
    );
};

export default PhotoCard;