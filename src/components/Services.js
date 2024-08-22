import React from 'react';
import './Services.css';

const Services = () => (
    <section className="services" id="services">
        <h2>Services</h2>
        <div className="projects-content">
            <div className="project-card">
                <div className="project-card__background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/net.jpg)` }}></div>
                <div className="project-card__content">
                    <span className="project-card__category">Web Design</span>
                    <h3 className="project-card__heading">Web Design</h3>
                    <p className="project-card__description">
                        I offer services in web design, drawing from my experience in web development. I can assist with designing, implementing, and managing websites to ensure reliable and engaging user experiences tailored to your business needs.
                    </p>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card__background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/auto.png)` }}></div>
                <div className="project-card__content">
                    <span className="project-card__category">API Implementation</span>
                    <h3 className="project-card__heading">API Implementation</h3>
                    <p className="project-card__description">
                        Intermediate in API development, I design and implement robust APIs, mainly using Postman, that facilitate seamless communication between applications.
                    </p>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card__background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/webs.jpg)` }}></div>
                <div className="project-card__content">
                    <span className="project-card__category">Web Development</span>
                    <h3 className="project-card__heading">Web Development</h3>
                    <p className="project-card__description">
                        I create engaging and functional websites tailored to your needs. My web development services include designing responsive websites, developing interactive features, and ensuring a seamless user experience across all devices.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Services;
