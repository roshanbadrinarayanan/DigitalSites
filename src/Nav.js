import React from "react";
import { Link } from 'react-router-dom';
import logo from "./LOGO.jpg";

function Nav() {
    return (
        <nav className="nav-bar">
            <img src={logo} alt="logo" id="logo" />
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Web Development</Link></li>
                <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
