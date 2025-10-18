import React, { useState, useEffect } from 'react';
import './Header.css';
import {FaInstagram, FaLinkedin, FaGithub, FaLink} from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Detect active section
            const sections = ['hero', 'skills', 'projects', 'services'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-content">
                <div className="brand-logo">
                    <a href="#hero" onClick={handleLinkClick}>
                        <span className="brand-initial">J</span>
                        <span className="brand-name">oseph <span className="brand-s">S</span>feir</span>
                    </a>
                </div>

                <div className="social-icons">
                    <a href="https://www.instagram.com/josephsfeirrr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/joseph-sfeir-416062261/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Systemizable" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                </div>

                <div className="nav-container">
                    <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><a href="#hero" onClick={handleLinkClick} className={activeSection === 'hero' ? 'active' : ''}>About Me</a></li>
                            <li><a href="#skills" onClick={handleLinkClick} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
                            <li><a href="#projects" onClick={handleLinkClick} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
                            <li><a href="#services" onClick={handleLinkClick} className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
                            <li className="resume-link">
                                <a
                                    href={`${process.env.PUBLIC_URL}/JosephSfeirCV.pdf`}
                                    download="JosephSfeirCV.pdf"
                                    onClick={handleLinkClick}
                                    className="resume-btn"
                                >
                                    Resume
                                    <FaLink className="link-icon"/>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
