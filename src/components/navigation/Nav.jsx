import "./Nav.css";
import {useState} from "react";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <nav id="main-nav">
            <a id="toggle-nav" onCLick={toggleNav} href="#">
                {menuOpen?(<p>&#8963;</p>):(<p>&#8963;</p>)}
            </a>
            <ul className={menuOpen? "":"hide-small"}>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="">Team History</a>
                </li>
                <li>
                    <a href="#">Current Team</a>
                </li>
                <li>
                    <a href="#">Schedule & Results</a>
                </li>
                <li>
                    <a href="#">Photo Gallery</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
