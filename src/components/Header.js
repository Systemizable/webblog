import React from 'react';
import './Header.css';

const Header = () => (
    <header className="header">
        <div className="header-content">
            <h1>Joseph Sfeir</h1>
            <p className="subheading">aspiring programmer</p>
            <p className="subheading">engaged public speaker</p>
            <p className="subheading">avid learner</p>
            <p className="subheading">fierce competitor</p>
        </div>
        <nav className="nav-links">
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#skills">Skills & Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
