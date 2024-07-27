import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
    const [activeSkill, setActiveSkill] = useState(null);

    const skills = [
        { id: 'css', name: 'CSS', years: 3, style: { top: '10%', left: '50%' } },
        { id: 'advanced-cpp', name: 'Advanced C++', years: 4, style: { top: '20%', left: '70%' } },
        { id: 'problem-solving', name: 'Problem Solving', years: 5, style: { top: '40%', left: '90%' } },
        { id: 'debating', name: 'Debating', years: 2, style: { top: '60%', left: '70%' } },
        { id: 'java', name: 'Java', years: 3, style: { top: '80%', left: '50%' } },
        { id: 'javascript', name: 'JavaScript', years: 4, style: { top: '60%', left: '30%' } },
        { id: 'python', name: 'Python', years: 2, style: { top: '40%', left: '10%' } },
        { id: 'react', name: 'React', years: 3, style: { top: '20%', left: '30%' } },
        { id: 'html', name: 'HTML', years: 4, style: { top: '50%', left: '50%' } },
    ];

    return (
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <div className="skills-content">
                <div className="web">
                    <div className="web-circle web-circle-1"></div>
                    <div className="web-circle web-circle-2"></div>
                    <div className="web-circle web-circle-3"></div>
                    <div className="web-circle web-circle-4"></div>
                    {skills.map(skill => (
                        <div
                            key={skill.id}
                            className="skill-container"
                            style={skill.style}
                            onMouseEnter={() => setActiveSkill(skill.id)}
                            onMouseLeave={() => setActiveSkill(null)}
                        >
                            <a href={`#${skill.id}`} className="skill">{skill.name}</a>
                            {activeSkill === skill.id && (
                                <div className="skill-description">{skill.years} years</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
