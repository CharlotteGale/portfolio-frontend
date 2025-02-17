import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>

                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills & Technologies</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar