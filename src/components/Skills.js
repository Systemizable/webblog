import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faReact, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDraftingCompass, faNetworkWired, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    const skills = [
        { id: 'css', name: 'CSS', level: 70, icon: faCss3Alt },
        { id: 'cpp', name: 'C++', level: 90, icon: faCode },
        { id: 'autocad', name: 'AutoCAD', level: 70, icon: faDraftingCompass },
        { id: 'cisco', name: 'Cisco', level: 40, icon: faNetworkWired },
        { id: 'java', name: 'Java', level: 45, icon: faJava },
        { id: 'javascript', name: 'JavaScript', level: 70, icon: faJs },
        { id: 'python', name: 'Python', level: 85, icon: faPython },
        { id: 'react', name: 'React', level: 50, icon: faReact },
        { id: 'html', name: 'HTML', level: 85, icon: faHtml5 },
        { id: 'mongodb', name: 'MongoDB', level: 55, icon: faDatabase },
    ];

    const [activeSkill, setActiveSkill] = useState(null);
    const skillRefs = useRef([]);

    useEffect(() => {
        const checkPosition = () => {
            let topmostIndex = -1;
            let topmostValue = Number.POSITIVE_INFINITY;

            skillRefs.current.forEach((ref, index) => {
                const rect = ref.getBoundingClientRect();
                const containerRect = ref.parentNode.getBoundingClientRect();

                // Calculate the distance to the top of the container
                const distanceToTop = rect.top - containerRect.top;

                if (distanceToTop < topmostValue) {
                    topmostValue = distanceToTop;
                    topmostIndex = index;
                }
            });

            // Reset all active classes
            skillRefs.current.forEach((ref, index) => {
                ref.classList.remove('active');
            });

            // Set active class to the topmost element
            if (topmostIndex >= 0) {
                skillRefs.current[topmostIndex].classList.add('active');
                setActiveSkill(skills[topmostIndex]);
            } else {
                setActiveSkill(null);
            }
        };

        const interval = setInterval(checkPosition, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <div className="skills-content">
                <div className="circle-container">
                    <div className="center-dot"></div> {/* Center dot */}
                    {skills.map((skill, index) => (
                        <div
                            key={skill.id}
                            className="skill-container"
                            style={{
                                animationDelay: `${(index / skills.length) * 25}s`
                            }}
                            ref={(el) => (skillRefs.current[index] = el)}
                        >
                            <div className="circle-bg">
                                <div className="circle-fill" style={{ '--skill-level': `${skill.level}%` }}></div>
                                <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                                <div className="skill-percent">{skill.level}%</div>
                            </div>
                        </div>
                    ))}
                </div>
                {activeSkill && (
                    <div className="active-skill-description">
                        <div className="skill-description">
                            <span className="skill-name">{activeSkill.name}</span>
                            <span className="skill-percent">{activeSkill.level}%</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Skills;
