import "./PhotoGrid.css";
import PhotoCard from "../photocard/PhotoCard";
import Image1 from "../../../pages/gallery/images/image1.png";
import Image2 from "../../../pages/gallery/images/image2.png";
import Image3 from "../../../pages/gallery/images/image3.png";
import Image4 from "../../../pages/gallery/images/image4.png";
import Image5 from "../../../pages/gallery/images/image5.png";
import Image6 from "../../../pages/gallery/images/image6.png";

const PhotoGrid = () => {
    return(
        <section className="photo-gallery-section">
            <p className="gallery-label">GameCock Memories</p>

            <h2>Captured In Garnet</h2>

            <div className="gallery-heading-line"></div>

            <p className="gallery-description">
                From packed stadiums to pregame traditions, every photo tells part
                of the Gamecock story.
            </p>

            <div className="photo-grid">
                <PhotoCard image={Image1} alt="Williams-Brice Stadium during a Gamecock football game" caption="Saturday Night At Williams-Brice" />
                <PhotoCard image={Image2} alt="Fans watching a Gamecock football game" caption="The Student Section" />
                <PhotoCard image={Image3} alt="Gamecock fans participating in Sandstorm" caption="The Sandstorm Tradition" />
                <PhotoCard image={Image4} alt="Gamecock football players entering the field" caption="2001 Entrance" />
                <PhotoCard image={Image5} alt="Williams-Brice Stadium fireworks and smoke" caption="Fireworks Over The Stadium" />
                <PhotoCard image={Image6} alt="Aerial view of Williams-Brice Stadium" caption="Williams-Brice From Above" />
            </div>
        </section>
    );
};

export default PhotoGrid;