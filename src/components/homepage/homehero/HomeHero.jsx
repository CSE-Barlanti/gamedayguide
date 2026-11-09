import "./HomeHero.css";
import { useState } from "react";
import heroStadium from "../../../pages/home/images/willyBStadium.jpg";
import heroFireworks from "../../../pages/home/images/willyBfireworks.webp";
import heroSandstorm from "../../../pages/home/images/Sandstorm.webp";


const HomeHero = () => {
    const slides = [heroStadium, heroFireworks, heroSandstorm];
    const [slideIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        if (slideIndex === slides.length - 1) {
            setSlideIndex(0);
        } else {
            setSlideIndex(slideIndex + 1);
        }
    };

    const prevSlide = () => {
        if (slideIndex === 0) {
            setSlideIndex(slides.length - 1);
        } else {
            setSlideIndex(slideIndex - 1);
        }
    };

    
    return (
        <section className ="home-hero">

            <img
                className="hero-background-image"
                src={slides[slideIndex]}
                alt="Williams-Brice Stadium before a Gamecock football game"
            />

                
            <div className="hero-overlay"></div>

            <button className="hero-arrow hero-arrow-left" onClick={prevSlide}>‹</button>
            <button className="hero-arrow hero-arrow-right" onClick={nextSlide}>›</button>
                
            <div className ="hero-content">


                <p className="hero-label">The Ultimate Fan Portal</p>

                <h1>GameCock <br /> Game Day Guide</h1>
                <p className="hero-description">
                    Your Ultimate Guide to South Carolina Football
                    Saturdays. From Williams-Brice tailgate spots to the
                    legendary SandStorm.
                </p>

                <div className="hero-buttons">
                    <a className="hero-button" href="#gameday">
                        Explore Game Day →
                    </a>
                    <a className="hero-button" href="#schedule">
                        View Schedule
                    </a>
                </div>


            </div>
        </section>
    );
};
export default HomeHero;