import React from 'react';
import './Git.css';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon from react-icons

const Git = () => (
    <section className="git" id="git">
        <h2>GitHub</h2>
        <div className="git-content">
            <a href="https://github.com/Systemizable" target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub className="github-icon" /> Visit my GitHub Profile
            </a>
            <ul className="projects-list">
                <li><a href="https://github.com/Systemizable/waterlevelsensor" target="_blank" rel="noopener noreferrer">Water Level Sensor</a></li>
                <li><a href="https://github.com/Systemizable/carrentingprogram" target="_blank" rel="noopener noreferrer">Car Renting Program</a></li>
                <li><a href="https://github.com/Systemizable/math-operations-menu" target="_blank" rel="noopener noreferrer">Math Operations Menu</a></li>
                <li><a href="https://github.com/Systemizable?tab=repositories" target="_blank" rel="noopener noreferrer">And More...</a></li>
            </ul>
        </div>
    </section>
);

export default Git;