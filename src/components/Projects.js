import React from 'react';
import './Projects.css';
import { useReveal } from '../hooks/useCustomHooks';
import { projects } from '../data/projects';

const Projects = () => {
    const revealRef = useReveal(0.06);

    return (
        <section className="projects" id="projects">
            <div className="projects-inner reveal" ref={revealRef}>
                <div className="projects-header reveal-item" style={{ '--i': 0 }}>
                    <span className="section-eyebrow">Selected Work</span>
                    <h2 className="section-title">
                        Projects<em>.</em>
                    </h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article
                            className="project-card reveal-item"
                            key={project.id}
                            style={{ '--i': index + 1 }}
                        >
                            <div className="project-card__media">
                                <img
                                    src={`${process.env.PUBLIC_URL}/${project.image}`}
                                    alt={`Screenshot of ${project.title}`}
                                    className="project-card__image"
                                    loading="lazy"
                                />
                                <span className={`project-card__level ${project.difficulty.toLowerCase()}`}>
                                    {project.difficulty}
                                </span>
                            </div>

                            <div className="project-card__body">
                                <h3 className="project-card__title">{project.title}</h3>

                                <ul className="project-card__stack">
                                    {project.stack.map(tech => (
                                        <li key={tech}>{tech}</li>
                                    ))}
                                </ul>

                                <p className="project-card__description">{project.description}</p>

                                {project.link && (
                                    <a
                                        className="project-card__link"
                                        href={project.link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.link.label}
                                        <span className="project-card__arrow" aria-hidden="true">→</span>
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
