import "./Header.css";
import Nav from "../navigation/Nav";
import gamecockLogo from "./images/LogoImage.jpg";

const Header = () => {
    return (
        <header className="main-header">
            <a className="brand" href="#">
                <img
                    className="brand-logo"
                    src={gamecockLogo}
                    alt="Gamecock Game Day Guide logo"
                />

                <span className="brand-copy">
                    <span className="brand-title">GAMECOCK</span>
                    <span className="brand-subtitle">GAME DAY GUIDE</span>
                </span>
            </a>

            <Nav />

            <a className="tickets-button" href="#">
                Tickets <span>→</span>
            </a>
        </header>
    );
};

export default Header;