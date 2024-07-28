import React from 'react';
import './Header.css';

const Header = () => (
    <header className="header">
        <div className="header-content">

            <div className="subheadings">
            </div>
        </div>
        <nav className="nav-links">
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#git">GitHub</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
