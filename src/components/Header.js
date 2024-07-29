import React, { useState } from 'react';
import './Header.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import the FontAwesome icons

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="social-icons">
                <a href="https://www.instagram.com/josephsfeirrr/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/in/joseph-sfeir-416062261/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Systemizable" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
            <div className="nav-container">
                <div className="menu-icon" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#hero" onClick={handleLinkClick}>About Me</a></li>
                        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                        <li><a href="#about" onClick={handleLinkClick}>Services</a></li>
                        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                        <li><a href="#resume" onClick={handleLinkClick}>Resume</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
