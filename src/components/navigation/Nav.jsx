import "./Nav.css";
import {useState} from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <nav id="main-nav">
            <a id="toggle-nav" onClick={toggleNav} href="#">
                {menuOpen ? <p>&#8963;</p> : <p>&#9776;</p>}
            </a>
            <ul className={menuOpen? "":"hide-small"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/team-history">Team History</Link>
                </li>
                <li>
                    <Link to="/current-team">Current Team</Link>
                </li>
                <li>
                    <Link to="/schedule&results">Schedule & Results</Link>
                </li>
                <li>
                    <Link to="/Gallery">Photo Gallery</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
