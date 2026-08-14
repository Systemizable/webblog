import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useReveal } from '../hooks/useCustomHooks';
import { skillGroups } from '../data/skills';

const Skills = () => {
    const revealRef = useReveal();

    return (
        <section className="skills" id="skills">
            <div className="skills-inner reveal" ref={revealRef}>
                <div className="skills-header reveal-item" style={{ '--i': 0 }}>
                    <span className="section-eyebrow">Toolkit</span>
                    <h2 className="section-title">
                        Skills &amp; <em>Stack</em>
                    </h2>
                </div>

                <div className="skills-groups">
                    {skillGroups.map((group, groupIndex) => (
                        <div
                            className="skill-group reveal-item"
                            key={group.id}
                            style={{ '--i': groupIndex + 1 }}
                        >
                            <h3 className="skill-group__label">
                                <span className="skill-group__index">
                                    {String(groupIndex + 1).padStart(2, '0')}
                                </span>
                                {group.label}
                            </h3>
                            <ul className="skill-list">
                                {group.skills.map(skill => (
                                    <li className="skill-tile" key={skill.id}>
                                        <FontAwesomeIcon
                                            icon={skill.icon}
                                            className="skill-tile__icon"
                                            aria-hidden="true"
                                        />
                                        <span className="skill-tile__name">{skill.name}</span>
                                    </li>
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
