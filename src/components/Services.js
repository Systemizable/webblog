import React, { useRef } from 'react';
import './Services.css';

const Services = () => {
    const cardRefs = useRef([]);

    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set CSS variables for glow effect
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        // Calculate rotation based on mouse position
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -15; // -15 to 15 degrees
        const rotateY = ((x - centerX) / centerX) * 15; // -15 to 15 degrees

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        if (!card) return;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    const services = [
        {
            category: "Web Design",
            title: "Web Design",
            description: "I offer services in web design, drawing from my experience in web development. I can assist with designing, implementing, and managing websites to ensure reliable and engaging user experiences tailored to your business needs.",
            image: "net.jpg",
            icon: "🎨"
        },
        {
            category: "API Implementation",
            title: "API Implementation",
            description: "Intermediate in API development, I design and implement robust APIs, mainly using Postman, that facilitate seamless communication between applications.",
            image: "auto.png",
            icon: "🔌"
        },
        {
            category: "Backend Development",
            title: "Backend Development",
            description: "I create engaging and functional websites tailored to your needs. My backend development services include designing clean cores, developing fast response, and ensuring a seamless user experience across all devices.",
            image: "webs.jpg",
            icon: "⚙️"
        },
        {
            category: "Database Implementation",
            title: "Database Implementation",
            description: "Intermediate in database development, proficient in designing and implementing databases, such as MongoDB, MySQL and PostgreSQL, that ensure efficient data storage and retrieval for your applications.",
            image: "database.jpg",
            icon: "💾"
        },
        {
            category: "Java Development",
            title: "Java Development",
            description: "Professional in Java development, I've specialized in creating robust applications using Java, from Minecraft plugins to complex backend systems.",
            image: "java.png",
            icon: "☕"
        },
        {
            category: "SQL Development",
            title: "SQL Development",
            description: "Intermediate in SQL development, using PL/SQL to create efficient and scalable database solutions. I can help you design, implement, and optimize SQL databases for your applications.",
            image: "sql.jpg",
            icon: "🗄️"
        }
    ];

    return (
        <section className="services" id="services">
            <div className="services-header">
                <h2>Services</h2>
                <p className="services-subtitle">Crafting Digital Solutions with Precision & Innovation</p>
            </div>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="service-card"
                        ref={el => cardRefs.current[index] = el}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div className="service-card__glow"></div>
                        <div className="service-card__background"
                             style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${service.image})`}}></div>
                        <div className="service-card__overlay"></div>
                        <div className="service-card__content">
                            <div className="service-card__icon">{service.icon}</div>
                            <span className="service-card__category">{service.category}</span>
                            <h3 className="service-card__title">{service.title}</h3>
                            <p className="service-card__description">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
