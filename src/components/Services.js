import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faPlug, faServer, faDatabase, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { useReveal } from '../hooks/useCustomHooks';

const services = [
    {
        id: 'web-design',
        title: 'Web Design',
        icon: faPalette,
        description: 'I offer services in web design, drawing from my experience in web development. I can assist with designing, implementing, and managing websites to ensure reliable and engaging user experiences tailored to your business needs.',
    },
    {
        id: 'api',
        title: 'API Implementation',
        icon: faPlug,
        description: 'Intermediate in API development, I design and implement robust APIs, mainly using Postman, that facilitate seamless communication between applications.',
    },
    {
        id: 'backend',
        title: 'Backend Development',
        icon: faServer,
        description: 'I build the server side of an application: authentication, data models, and the endpoints your frontend talks to. Most of my backend work is in Java with Spring Boot, backed by MongoDB or a SQL database.',
    },
    {
        id: 'database',
        title: 'Database Implementation',
        icon: faDatabase,
        description: 'Intermediate in database development, proficient in designing and implementing databases, such as MongoDB, MySQL and PostgreSQL, that ensure efficient data storage and retrieval for your applications.',
    },
    {
        id: 'java',
        title: 'Java Development',
        icon: faJava,
        description: "Professional in Java development, I've specialized in creating robust applications using Java, from Minecraft plugins to complex backend systems.",
    },
    {
        id: 'sql',
        title: 'SQL Development',
        icon: faTableColumns,
        description: 'Intermediate in SQL development, using PL/SQL to create efficient and scalable database solutions. I can help you design, implement, and optimize SQL databases for your applications.',
    },
];

const Services = () => {
    const revealRef = useReveal(0.08);

    return (
        <section className="services" id="services">
            <div className="services-inner reveal" ref={revealRef}>
                <div className="services-header reveal-item" style={{ '--i': 0 }}>
                    <span className="section-eyebrow">Services</span>
                    <h2 className="section-title">
                        What I can <em>build</em>
                    </h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <article
                            className="service-card reveal-item"
                            key={service.id}
                            style={{ '--i': index + 1 }}
                        >
                            <div className="service-card__head">
                                <FontAwesomeIcon
                                    icon={service.icon}
                                    className="service-card__icon"
                                    aria-hidden="true"
                                />
                                <h3 className="service-card__title">{service.title}</h3>
                            </div>
                            <p className="service-card__description">{service.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
