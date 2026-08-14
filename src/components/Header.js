import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaInstagram, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const SECTIONS = [
    { id: 'hero', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);

            const scrollPosition = window.scrollY + 200;
            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(open => !open);
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-progress" style={{ width: `${progress}%` }} aria-hidden="true"></div>

            <div className="header-content">
                <div className="brand-logo">
                    <a href="#hero" onClick={handleLinkClick}>
                        <span className="brand-bracket">[</span>
                        <span className="brand-initial">J</span>
                        <span className="brand-name">Sfeir</span>
                        <span className="brand-bracket">]</span>
                    </a>
                </div>

                <div className="social-icons">
                    <a href="https://github.com/Systemizable" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/joseph-sfeir-416062261/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/josephsfeirrr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram />
                    </a>
                </div>

                <div className="nav-container">
                    <button
                        type="button"
                        className={`menu-icon ${menuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            {SECTIONS.map(section => (
                                <li key={section.id}>
                                    <a
                                        href={`#${section.id}`}
                                        onClick={handleLinkClick}
                                        className={activeSection === section.id ? 'active' : ''}
                                    >
                                        {section.label}
                                    </a>
                                </li>
                            ))}
                            <li className="resume-link">
                                <a
                                    href={`${process.env.PUBLIC_URL}/JosephSfeirCVLATEST.pdf`}
                                    download="JosephSfeirCV.pdf"
                                    onClick={handleLinkClick}
                                    className="resume-btn"
                                >
                                    Resume
                                    <FaDownload className="link-icon" />
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
