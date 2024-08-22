import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faReact, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import {faCode, faDatabase, faCloudArrowDown, faMobile} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
    const skills = [
        { id: 'css', name: 'CSS', level: 70, icon: faCss3Alt },
        { id: 'cpp', name: 'C++', level: 90, icon: faCode },
        { id: 'api', name: 'API', level: 60, icon: faCloudArrowDown },
        { id: 'mobile', name: 'Mobile Development', level: 30, icon: faMobile },
        { id: 'java', name: 'Java', level: 45, icon: faJava },
        { id: 'javascript', name: 'JavaScript', level: 70, icon: faJs },
        { id: 'python', name: 'Python', level: 85, icon: faPython },
        { id: 'react', name: 'React', level: 50, icon: faReact },
        { id: 'html', name: 'HTML', level: 85, icon: faHtml5 },
        { id: 'mongodb', name: 'MongoDB', level: 55, icon: faDatabase },
    ];

    return (
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <div className="skills-content">
                <div className="circle">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.id}
                            className="skill-container"
                            style={{
                                transform: `rotate(${(index / skills.length) * 360}deg) translate(10em) rotate(${(-(index / skills.length) * 360)}deg)`
                            }}
                        >
                            <div className="skill">
                                <div className="circle-bg">
                                    <div className="circle-fill" style={{ '--skill-level': `${skill.level}%` }}></div>
                                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                                    <div className="skill-percent">{skill.level}%</div>
                                </div>
                                <div className="skill-description">
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;