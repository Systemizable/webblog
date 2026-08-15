import React from 'react';
import './Projects.css';
import { useReveal } from '../hooks/useCustomHooks';
import { projects, archive } from '../data/projects';

const usesSkill = (stack, activeSkill) =>
    Boolean(activeSkill) && stack.some(tech => activeSkill.matches.includes(tech));

const Projects = ({ activeSkill, onClearSkill }) => {
    const revealRef = useReveal(0.06);

    // Highlight rather than filter: nothing is ever removed, so this cannot
    // land the visitor on an empty section.
    const matchCount = activeSkill
        ? [...projects, ...archive].filter(item => usesSkill(item.stack, activeSkill)).length
        : 0;

    const dimClass = stack =>
        activeSkill && !usesSkill(stack, activeSkill) ? ' is-dimmed' : '';

    const markClass = stack =>
        activeSkill && usesSkill(stack, activeSkill) ? ' is-marked' : '';

    return (
        <section className="projects" id="projects">
            <div className="projects-inner reveal" ref={revealRef}>
                <div className="projects-header reveal-item" style={{ '--i': 0 }}>
                    <span className="section-eyebrow">Build log</span>
                    <h2 className="section-title">
                        Selected <em>systems</em>
                    </h2>
                </div>

                <div className="projects-status" aria-live="polite">
                    {activeSkill && (
                        <div className="projects-filter">
                            <span className="projects-filter__text">
                                Highlighting <strong>{activeSkill.name}</strong> &middot;{' '}
                                {matchCount} {matchCount === 1 ? 'project' : 'projects'}
                            </span>
                            <button
                                type="button"
                                className="projects-filter__clear"
                                onClick={onClearSkill}
                            >
                                Clear
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    )}
                </div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <article
                            className={`project-card reveal-item${dimClass(project.stack)}${markClass(project.stack)}`}
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
                            </div>

                            <div className="project-card__body">
                                <span className="project-card__year">{project.year}</span>

                                <h3 className="project-card__title">{project.title}</h3>

                                <p className="project-card__tagline">{project.tagline}</p>

                                <p className="project-card__description">{project.description}</p>

                                <ul className="project-card__stack">
                                    {project.stack.map(tech => (
                                        <li
                                            key={tech}
                                            className={
                                                activeSkill && activeSkill.matches.includes(tech)
                                                    ? 'is-matched'
                                                    : undefined
                                            }
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>

                                <div className="project-card__links">
                                    {project.links.map(link => (
                                        <a
                                            key={link.href}
                                            className="project-card__link"
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.label}
                                            <span className="project-card__arrow" aria-hidden="true">↗</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="projects-archive reveal-item" style={{ '--i': projects.length + 1 }}>
                    <h3 className="projects-archive__label">Also built</h3>
                    <ul className="projects-archive__list">
                        {archive.map(item => (
                            <li
                                key={item.id}
                                className={`${dimClass(item.stack)}${markClass(item.stack)}`.trim()}
                            >
                                <a href={item.href} target="_blank" rel="noopener noreferrer">
                                    {item.title}
                                    <span aria-hidden="true">↗</span>
                                </a>
                                <span className="projects-archive__note">{item.note}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Projects;
