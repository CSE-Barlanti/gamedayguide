import "./gallery.css";
import Image1 from "./images/image1.png";
import Image2 from "./images/image2.png";
import Image3 from "./images/image3.png";
import Image4 from "./images/image4.png";
import Image5 from "./images/image5.png";
import Image6 from "./images/image6.png";


const Gallery = () => {
    return(
        <main>
            <section className="gallery-hero">
                <div className="gallery-hero-content">
                    <h1>Photo Gallery</h1>
                    <p>
                        Relive the energy, traditions, and unforgettable moments of
                        Gamecock football.
                    </p>
                </div>
            </section>
            <section className="photo-gallery-section">
                <p className="gallery-label">GameCock Memories</p>

                <h2>Captured In Garnet</h2>

                <div className="gallery-heading-line"></div>

                <p className="gallery-description">
                    From packed stadiums to pregame traditions, every photo tells part
                    of the Gamecock story.
                </p>

                <div className="photo-grid">
                    <img src={Image1} alt="Williams-Brice Stadium during a Gamecock football game" />
                    <img src={Image2} alt="Fans watching a Gamecock football game" />
                    <img src={Image3} alt="Gamecock fans participating in Sandstorm" />
                    <img src={Image4} alt="Gamecock football players entering the field" />
                    <img src={Image5} alt="Williams-Brice Stadium fireworks and smoke" />
                    <img src={Image6} alt="Aerial view of Williams-Brice Stadium" />                   
                </div>
            </section>
        </main>
    );
};

export default Gallery;