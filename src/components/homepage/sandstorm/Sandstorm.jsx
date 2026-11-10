import "./Sandstorm.css";
import sandstormImage from "../../../pages/home/images/Sandstorm2.webp";

const Sandstorm = () => {
    return(
        <section className="sandstorm-section">
            <div className="sandstorm-content">
                <p className="sandstorm-label">● LEGENDARY TRADITION</p>

                <h2>The Sandstorm<br />Tradition</h2>

                <p>
                    Experience Williams-Brice Stadium erupting to Darude’s
                    “Sandstorm” as 80,000 screaming fans wave white rally towels.
                    Introduced in 2001, it remains one of the most electric intro
                    sequences and home-field advantages in college football.
                </p>

                <a className="sandstorm-button" href="#sandstorm">
                    Watch Video ▶
                </a>
            </div>

            <img
                className="sandstorm-image"
                src={sandstormImage}
                alt="Gamecock fans participating in the Sandstorm tradition"
            />
        </section>
    )
}

export default Sandstorm;