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

const ROLE = 'Full-Stack Software Engineer · Simly';

const Hero = () => {
    const revealRef = useReveal();
    const { output, done } = useTypewriter(ROLE, 26, 500);
    const cvRef = useMagnetic(0.22);

    const liveCount = projects.filter(project =>
        project.links.some(link => link.label === 'Live site')
    ).length;

    return (
        <section id="hero" className="hero">
            <div className="hero-inner reveal" ref={revealRef}>
                <div className="hero-heading reveal-item" style={{ '--i': 0 }}>
                    <span className="section-eyebrow">About Me</span>
                    <span className="hero-availability">
                        <span className="hero-availability__dot" aria-hidden="true"></span>
                        Available for part-time &amp; freelance work
                    </span>
                </div>

                <div className="hero-content">
                    <div className="hero-image-container reveal-item" style={{ '--i': 1 }}>
                        <div className="hero-image-glow" aria-hidden="true"></div>
                        <img
                            src="/formalpicture.webp"
                            alt="Portrait of Joseph Sfeir"
                            width="720"
                            height="1280"
                            fetchpriority="high"
                        />
                        <span className="hero-image-corner hero-image-corner--tl" aria-hidden="true"></span>
                        <span className="hero-image-corner hero-image-corner--br" aria-hidden="true"></span>
                    </div>

                    <div className="hero-text">
                        <h1 className="hero-name reveal-item" style={{ '--i': 2 }}>
                            {/* The space keeps the name two words in the HTML; flex drops it visually. */}
                            <span className="hero-name__first">Joseph</span>{' '}
                            <span className="hero-name__last">Sfeir.</span>
                        </h1>

                        {/* The typed copy starts empty, so the full role sits alongside it
                            for screen readers and for crawlers reading the prerendered HTML. */}
                        <p className="hero-role reveal-item" style={{ '--i': 3 }}>
                            <span className="hero-role__prompt" aria-hidden="true">&gt;</span>
                            <span className="visually-hidden">{ROLE}</span>
                            <span aria-hidden="true">{output}</span>
                            <span className={`hero-caret ${done ? 'is-idle' : ''}`} aria-hidden="true"></span>
                        </p>

                        <p className="hero-bio reveal-item" style={{ '--i': 4 }}>
                            I'm a full-stack software engineer at Simly, where I build the systems behind its
                            eSIM business: a pipeline that ingests usage records from five eSIM providers and
                            turns them into cost, margin and usage analytics, a rebuilt customer-care platform,
                            and a real-time sync of WhatsApp support chats over webhooks and GraphQL. I'm also
                            studying Computer &amp; Communications Engineering at Antonine University in Lebanon.
                            Most of my work is in Java and Spring Boot on the backend and React on the frontend.
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
                                href="/JosephSfeirCVLATEST.pdf"
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
