import "./PlayerDialog.css";
import { API_BASE_URL } from "../../config";

const PlayerDialog = (props) => {
  return (
    <div className="player-dialog-overlay" onClick={props.close_dialog}>
      <div className="player-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="player-dialog-close" onClick={props.close_dialog}>&times;</button>
        <img src={`${API_BASE_URL}/images/${props.image}`} alt={props.name} />
        <div className="player-dialog-info">
          <p className="player-dialog-number">#{props.number}</p>
          <h2>{props.name}</h2>
          <p><strong>Position:</strong> {props.position}</p>
          <p><strong>Year:</strong> {props.year}</p>
          <p><strong>Height:</strong> {props.height}</p>
          <p><strong>Weight:</strong> {props.weight} lbs</p>
          <p><strong>Hometown:</strong> {props.hometown}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerDialog;