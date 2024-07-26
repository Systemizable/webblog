import React from 'react';
import './Skills.css';

const Skills = () => (
    <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-content">
            <div className="web">
                <div className="web-circle web-circle-1"></div>
                <div className="web-circle web-circle-2"></div>
                <div className="web-circle web-circle-3"></div>
                <div className="web-circle web-circle-4"></div>
                <a href="#css" className="skill" style={{ top: '10%', left: '50%' }}>CSS</a>
                <a href="#advanced-cpp" className="skill" style={{ top: '20%', left: '70%' }}>Advanced C++</a>
                <a href="#problem-solving" className="skill" style={{ top: '40%', left: '90%' }}>Problem Solving</a>
                <a href="#debating" className="skill" style={{ top: '60%', left: '70%' }}>Debating</a>
                <a href="#java" className="skill" style={{ top: '80%', left: '50%' }}>Java</a>
                <a href="#javascript" className="skill" style={{ top: '60%', left: '30%' }}>JavaScript</a>
                <a href="#python" className="skill" style={{ top: '40%', left: '10%' }}>Python</a>
                <a href="#react" className="skill" style={{ top: '20%', left: '30%' }}>React</a>
                <a href="#html" className="skill" style={{ top: '50%', left: '50%' }}>HTML</a>
            </div>
        </div>
    </section>
);

export default Skills;
