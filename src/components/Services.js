import React from 'react';
import './Services.css';

const Services = () => (
    <section className="services" id="services">
        <h2>Services</h2>
        <div className="projects-content">
            <div className="project-card">
                <div className="project-card__background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/net.jpg)` }}></div>
                <div className="project-card__content">
                    <span className="project-card__category">Cisco Networking</span>
                    <h3 className="project-card__heading">Cisco Networking</h3>
                    <p className="project-card__description">
                        I offer comprehensive services in Cisco networking. With expertise in designing, implementing, and managing complex network infrastructures, I ensure robust and secure connectivity solutions tailored to your business needs.
                    </p>
                </div>
            </div>
            <div className="project-card">
                <div className="project-card__background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/auto.jpg)` }}></div>
                <div className="project-card__content">
                    <span className="project-card__category">AutoCAD Design</span>
                    <h3 className="project-card__heading">AutoCAD Design</h3>
                    <p className="project-card__description">
                        Specializing in AutoCAD, I provide detailed and precise design services. From architectural plans to engineering blueprints, I deliver high-quality CAD drawings that meet industry standards and client specifications.
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
