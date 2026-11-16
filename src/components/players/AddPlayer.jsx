import { useState} from "react";
import "./AddPlayer.css";
import { API_BASE_URL } from "../../config";

const AddPlayer = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        setResult("Sending...");

        const formData = new FormData(e.target);

        const response = await fetch(`${API_BASE_URL}/api/players`, {
            method: "POST",
            body: formData,
        });

        if(response.status === 200) {
            setResult("Player added successfully!");
            props.add_player_to_list(await response.json());
            e.target.reset();
        }else {
            setResult("Error: " + (await response.text()));
        }
    }
    return (
    <div className="add-player-overlay" onClick={props.close_dialog}>
      <form className="add-player-form" onSubmit={onSubmit} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="add-player-close" onClick={props.close_dialog}>&times;</button>
        <h2>Add a Gamecock</h2>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required minLength="3" />
        <div className="add-player-row">
          <div>
            <label htmlFor="number">Jersey #</label>
            <input type="number" id="number" name="number" required min="0" max="99" />
          </div>
          <div>
            <label htmlFor="position">Position</label>
            <input type="text" id="position" name="position" required minLength="3" />
          </div>
        </div>
        <div className="add-player-row">
          <div>
            <label htmlFor="height">Height</label>
            <input type="text" id="height" name="height" required placeholder={`6'2"`} />
          </div>
          <div>
            <label htmlFor="weight">Weight (lbs)</label>
            <input type="number" id="weight" name="weight" required min="100" max="400" />
          </div>
        </div>
        <div className="add-player-row">
          <div>
            <label htmlFor="year">Year</label>
            <select id="year" name="year" required>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
              <option value="Redshirt Senior">Redshirt Senior</option>
            </select>
          </div>
          <div>
            <label htmlFor="hometown">Hometown</label>
            <input type="text" id="hometown" name="hometown" required minLength="3" />
          </div>
        </div>
        <label htmlFor="img">Player Photo</label>
        <input type="file" id="img" name="img" accept="image/*" />
        <button type="submit" className="add-player-submit">Add Player</button>
        <p className="add-player-status">{result}</p>
      </form>
    </div>
    );
}

export default AddPlayer;