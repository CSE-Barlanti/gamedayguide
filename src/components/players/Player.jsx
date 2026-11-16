import { useState } from "react";
import "./Player.css";
import { API_BASE_URL } from "../../config";
import PlayerDialog from "./PlayerDialog";

const Player = (props) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <article className="player-card" onClick={() => setShowDialog(true)}>
        <img src={`${API_BASE_URL}/images/${props.image}`} alt={props.name} />

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

      {showDialog && (
        <PlayerDialog {...props} close_dialog={() => setShowDialog(false)} />
      )}
    </>
  );
};

export default Player;