import "./FooterTop.css";

const Footer = () => {
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
                        <li><a href="#stadium">Williams-Brice Stadium</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
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