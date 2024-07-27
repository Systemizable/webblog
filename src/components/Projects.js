import React from 'react';
import './Projects.css';

const Projects = () => (
    <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="projects-content">
            <ul className="projects-list">
                <li>
                    <h3>Math Menu Operations</h3>
                    <p>This is a simple project that represents my first ever coding project. Even though it's extremely basic, it holds a special place as the foundation of my programming journey.</p>
                </li>
                <li>
                    <h3>Water Level Sensor</h3>
                    <p>This is an introduction to engineering project. We were tasked, in any shape or form, to create a water level sensor that gave out signals when it reached certain levels. We opted for an Arduino, LCD, and sonic sensor, and found major success! Earned a 91.</p>
                </li>
                <li>
                    <h3>Car Renting Program</h3>
                    <p>This is a Programming 2 project. We were tasked to create in C++, a car rental program that would save user credentials, provide encryption for passwords, save rental details, and alter a PDF file containing rental info. We earned a 100.</p>
                </li>
                <li>
                    <h3>Portfolio Website</h3>
                    <p>This website will be added to my projects in the future, showcasing my skills and portfolio as a programmer.</p>
                </li>
            </ul>
        </div>
    </section>
);

export default Projects;
