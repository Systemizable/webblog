import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useReveal, useTypewriter, useMagnetic, useCountUp } from '../hooks/useCustomHooks';
import { projects } from '../data/projects';
import { skillCount } from '../data/skills';

const Stat = ({ value, label }) => {
    const [count, ref] = useCountUp(value);
    return (
        <div className="hero-stat" ref={ref}>
            <span className="hero-stat__value">{count}</span>
            <span className="hero-stat__label">{label}</span>
        </div>
    );
};

const Hero = () => {
    const revealRef = useReveal();
    const { output, done } = useTypewriter("Hey, I'm Joseph");
    const cvRef = useMagnetic(0.22);

    const liveCount = projects.filter(project => project.link).length;

    return (
        <section id="hero" className="hero">
            <div className="hero-inner reveal" ref={revealRef}>
                <div className="hero-heading reveal-item" style={{ '--i': 0 }}>
                    <span className="section-eyebrow">About Me</span>
                </div>

                <div className="hero-content">
                    <div className="hero-image-container reveal-item" style={{ '--i': 1 }}>
                        <div className="hero-image-glow" aria-hidden="true"></div>
                        <img src={`${process.env.PUBLIC_URL}/formalpicture.webp`} alt="Joseph Sfeir" />
                        <span className="hero-image-corner hero-image-corner--tl" aria-hidden="true"></span>
                        <span className="hero-image-corner hero-image-corner--br" aria-hidden="true"></span>
                    </div>

                    <div className="hero-text">
                        <h3 className="hero-name reveal-item" style={{ '--i': 2 }}>
                            {output}
                            <span className={`hero-caret ${done ? 'is-idle' : ''}`} aria-hidden="true"></span>
                        </h3>

                        <p className="hero-role reveal-item" style={{ '--i': 3 }}>
                            <span className="hero-role__prompt">&gt;</span>
                            Computer &amp; Communications Engineering &middot; Antonine University
                        </p>

                        <p className="hero-bio reveal-item" style={{ '--i': 4 }}>
                            I specialize in programming and software development, with a solid foundation in
                            both the theoretical and practical aspects of engineering, and proficiency in game
                            development, software engineering, and project management. My goal is to leverage my
                            technical skills and passion for innovation to contribute to impactful projects in
                            software development and engineering.
                        </p>

                        <div className="hero-stats reveal-item" style={{ '--i': 5 }}>
                            <Stat value={projects.length} label="Projects" />
                            <Stat value={skillCount} label="Technologies" />
                            <Stat value={liveCount} label="Live deploys" />
                        </div>

                        <div className="hero-actions reveal-item" style={{ '--i': 6 }}>
                            <a
                                ref={cvRef}
                                className="hero-btn hero-btn--primary"
                                href={`${process.env.PUBLIC_URL}/JosephSfeirCVLATEST.pdf`}
                                download="JosephSfeirCV.pdf"
                            >
                                <FontAwesomeIcon icon={faDownload} aria-hidden="true" />
                                Download CV
                            </a>
                            <a
                                className="hero-btn"
                                href="https://github.com/Systemizable"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} aria-hidden="true" />
                                GitHub
                            </a>
                            <a className="hero-btn" href="#contact">
                                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                                Get in touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
