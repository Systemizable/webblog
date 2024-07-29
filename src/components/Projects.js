import React from 'react';
import './Projects.css';

const Projects = () => (
    <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="projects-content">
            <div className="project-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/math.png)` }}>
                <div className="project-header">
                    <div className="language">C++</div>
                    <h3>Math Menu Operations</h3>
                    <p>This is a simple project that represents my first ever coding project. Even though it's extremely basic, it holds a special place as the foundation of my programming journey.</p>
                </div>
                <div className="difficulty-circle beginner" title="Beginner"></div>
            </div>
            <div className="project-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/arduino.png)` }}>
                <div className="project-header">
                    <div className="language">Arduino</div>
                    <h3>Water Level Sensor</h3>
                    <p>This is an introduction to engineering project. We were tasked, in any shape or form, to create a water level sensor that gave out signals when it reached certain levels. We opted for an Arduino, LCD, and sonic sensor, and found major success! Earned a 91.</p>
                </div>
                <div className="difficulty-circle intermediate" title="Intermediate"></div>
            </div>
            <div className="project-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/car.png)` }}>
                <div className="project-header">
                    <div className="language">C++</div>
                    <h3>Car Renting Program</h3>
                    <p>This is a Programming 2 project. We were tasked to create in C++, a car rental program that would save user credentials, provide encryption for passwords, save rental details, and alter a PDF file containing rental info. We earned a 100.</p>
                </div>
                <div className="difficulty-circle advanced" title="Advanced"></div>
            </div>
            <div className="project-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/port.png)` }}>
                <div className="project-header">
                    <div className="language">JavaScript</div>
                    <h3>Portfolio Website</h3>
                    <p>This website will be added to my projects in the future, showcasing my skills and portfolio as a programmer.</p>
                </div>
                <div className="difficulty-circle intermediate" title="Intermediate"></div>
            </div>
        </div>
    </section>
);

export default Projects;
