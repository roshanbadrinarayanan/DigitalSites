import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./LOGO.jpg";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav-bar">
            <Link to="/">
                <img src={logo} alt="logo" id="logo" />
            </Link>
            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/services" onClick={toggleMenu}>Web Development</Link></li>
                <li><Link to="/digital-marketing" onClick={toggleMenu}>Digital Marketing</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;