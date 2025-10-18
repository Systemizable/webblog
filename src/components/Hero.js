import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <h2 className="about-me-title">About Me</h2>
            <div className="hero-content">
                <div className="hero-image-container">
                    <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Profile" />
                </div>
                <div className="hero-text">
                    <h3>Hey, I'm Joseph</h3>
                    <p>
                        I am a Computer and Communications Engineering student at Antonine University, specializing in programming and software development. I have a solid foundation in both theoretical and practical aspects of engineering, with proficiency in game development, software engineering, and project management. My goal is to leverage my technical skills and passion for innovation to contribute to impactful projects in software development and engineering.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
