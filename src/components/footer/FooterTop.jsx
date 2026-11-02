import { useState } from "react";
import "./FooterTop.css";


const Footer = () => {
    const [showMap, setShowMap] = useState(false);
    const toggleMap = () => {
        setShowMap(!showMap);
    };
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <section className="footer-brand">
                    <h2>GAMECOCK GAME<br />DAY GUIDE</h2>
                    <div className="footer-line"></div>
                    <p>
                        Your source for South Carolina football history,
                        traditions, and game-day planning.
                    </p>
                </section>

                <section className="footer-column">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#history">Team History</a></li>
                        <li><a href="#team">Current Team</a></li>
                        <li><a href="#schedule">Schedule & Results</a></li>
                        <li><a href="#gallery">Photo Gallery</a></li>
                    </ul>
                </section>

                <section className="footer-column">
                    <h3>Game Day</h3>
                    <ul>
                        <li><a href="#tickets">Tickets</a></li>
                        <li><a href="#parking">Parking</a></li>
                        <li><a href="#tailgating">Tailgating</a></li>
                        <li>
                            <button type="button" className="map-toggle" onClick={toggleMap}>
                                Williams-Brice Stadium
                            </button>
                        </li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>

                    {showMap && (
                        <iframe
                            className="stadium-map-frame"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7568598888424!2d-81.0217603242869!3d33.97308837318692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8baef1321f791%3A0x83f44871f4a3c265!2sWilliams-Brice%20Stadium!5e0!3m2!1sen!2sus!4v1791495533795!5m2!1sen!2sus"
                            title="Map showing Williams-Brice Stadium"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    )}
                </section>

                <section className="footer-connect">
                    <h3>Stay Connected</h3>
                    <p>Get game-day updates, traditions, and fan essentials.</p>

                    <div className="footer-signup">
                        <input
                            type="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                        />
                        <button type="button">SIGN UP</button>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;