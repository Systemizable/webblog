import React from 'react';
import './Hero.css';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'; // Import the FontAwesome icons

const Hero = () => {
    return (
        <section className="hero">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
            <div className="circle-4"></div>
            <div className="hero-image">
                <img src={`${process.env.PUBLIC_URL}/sexy.jpeg`} alt="Sexy" />
            </div>
            <div className="hero-text">
                <h2>Check out my socials below!</h2>
                <p>Connect with me on the following:</p>
                <div className="social-icons">
                    <a href="https://www.instagram.com/josephsfeirrr/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/joseph-sfeir-416062261/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.facebook.com/joseph.sfeir.56" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
