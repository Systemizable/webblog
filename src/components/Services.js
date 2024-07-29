import React from 'react';
import './Services.css';

const Services = () => (
    <section className="services" id="services">
        <h2>Services</h2>
        <div className="projects-content">
            <div className="project-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/net.jpg)` }}>
                <div className="project-header">
                    <span className="language">Cisco Networking</span>
                    <h3>Cisco Networking</h3>
                </div>
                <p>
                    I offer comprehensive services in Cisco networking. With expertise in designing, implementing, and managing complex network infrastructures, I ensure robust and secure connectivity solutions tailored to your business needs.
                </p>
            </div>
            <div className="project-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/auto.jpg)` }}>
                <div className="project-header">
                    <span className="language">AutoCAD Design</span>
                    <h3>AutoCAD Design</h3>
                </div>
                <p>
                    Specializing in AutoCAD, I provide detailed and precise design services. From architectural plans to engineering blueprints, I deliver high-quality CAD drawings that meet industry standards and client specifications.
                </p>
            </div>
            <div className="project-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/webs.jpg)` }}>
                <div className="project-header">
                    <span className="language">Web Development</span>
                    <h3>Web Development</h3>
                </div>
                <p>
                    I create engaging and functional websites tailored to your needs. My web development services include designing responsive websites, developing interactive features, and ensuring a seamless user experience across all devices.
                </p>
            </div>
        </div>
    </section>
);

export default Services;
