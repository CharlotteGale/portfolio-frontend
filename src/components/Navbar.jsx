import React from 'react';
import '../assets/styles/components/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#languages">Languages</a></li>
                <li><a href="#tools&tech">Tools</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar