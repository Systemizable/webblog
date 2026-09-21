import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useReveal } from '../hooks/useCustomHooks';
import { skillGroups } from '../data/skills';

const SkillTile = ({ skill, isActive, onToggle }) => {
    const count = skill.evidence.length;
    const panelId = `skill-evidence-${skill.id}`;

    // Nothing to prove it yet -- render as a plain, quieter entry rather than
    // a control that expands to an empty list.
    if (count === 0) {
        return (
            <li className="skill-tile skill-tile--bare">
                <FontAwesomeIcon icon={skill.icon} className="skill-tile__icon" aria-hidden="true" />
                <span className="skill-tile__name">{skill.name}</span>
            </li>
        );
    }

    return (
        <li className={`skill-tile ${isActive ? 'is-open' : ''}`}>
            <button
                type="button"
                className="skill-tile__toggle"
                onClick={() => onToggle(isActive ? null : skill)}
                aria-expanded={isActive}
                aria-controls={panelId}
            >
                <FontAwesomeIcon icon={skill.icon} className="skill-tile__icon" aria-hidden="true" />
                <span className="skill-tile__name">{skill.name}</span>
                <span className="skill-tile__count">
                    {count}
                    <span className="visually-hidden"> projects use this</span>
                </span>
            </button>

            <div className="skill-tile__evidence" id={panelId} hidden={!isActive}>
                <ul>
                    {skill.evidence.map(work => (
                        <li key={work.id}>
                            {work.href ? (
                                <a href={work.href} target="_blank" rel="noopener noreferrer">
                                    {work.title}
                                    <span aria-hidden="true">↗</span>
                                </a>
                            ) : (
                                <span>{work.title}</span>
                            )}
                        </li>
                    ))}
                </ul>
                <a className="skill-tile__jump" href="#projects">
                    Trace it through the build log
                    <span aria-hidden="true">↓</span>
                </a>
            </div>
        </li>
    );
};

const Skills = ({ activeSkill, onSkillToggle }) => {
    const revealRef = useReveal();

    return (
        <section className="skills" id="skills">
            <div className="skills-inner reveal" ref={revealRef}>
                <div className="skills-header reveal-item" style={{ '--i': 0 }}>
                    <span className="section-eyebrow">Current toolbox</span>
                    <h2 className="section-title">
                        Skills, with the <em>receipts</em>
                    </h2>
                    <p className="skills-lede">
                        Each one counts the projects that actually use it. Open a skill to see
                        them, and the build log below highlights the same set.
                    </p>
                </div>

                <div className="skills-groups">
                    {skillGroups.map((group, groupIndex) => (
                        <div
                            className="skill-group reveal-item"
                            key={group.id}
                            style={{ '--i': groupIndex + 1 }}
                        >
                            <h3 className="skill-group__label">{group.label}</h3>
                            <ul className="skill-list">
                                {group.skills.map(skill => (
                                    <SkillTile
                                        skill={skill}
                                        key={skill.id}
                                        isActive={Boolean(activeSkill) && activeSkill.id === skill.id}
                                        onToggle={onSkillToggle}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
