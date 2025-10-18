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

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // -10 to 10 degrees
        const rotateY = ((x - centerX) / centerX) * 10; // -10 to 10 degrees

        card.style.transform = `scale(1.1) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        if (!card) return;
        card.style.transform = 'scale(1) perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    return (
        <section className="services" id="services">
            <h2>Services</h2>
            <div className="projects-content">
                <div
                    className="project-card"
                    ref={el => cardRefs.current[0] = el}
                    onMouseMove={(e) => handleMouseMove(e, 0)}
                    onMouseLeave={() => handleMouseLeave(0)}
                >
                    <div className="project-card__background"
                         style={{backgroundImage: `url(${process.env.PUBLIC_URL}/net.jpg)`}}></div>
                    <div className="project-card__content">
                        <span className="project-card__category">Web Design</span>
                        <h3 className="project-card__heading">Web Design</h3>
                        <p className="project-card__description">
                            I offer services in web design, drawing from my experience in web development. I can assist with
                            designing, implementing, and managing websites to ensure reliable and engaging user experiences
                            tailored to your business needs.
                        </p>
                    </div>
                </div>
                <div
                    className="project-card"
                    ref={el => cardRefs.current[1] = el}
                    onMouseMove={(e) => handleMouseMove(e, 1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                >
                    <div className="project-card__background"
                         style={{backgroundImage: `url(${process.env.PUBLIC_URL}/auto.png)`}}></div>
                    <div className="project-card__content">
                        <span className="project-card__category">API Implementation</span>
                        <h3 className="project-card__heading">API Implementation</h3>
                        <p className="project-card__description">
                            Intermediate in API development, I design and implement robust APIs, mainly using Postman, that
                            facilitate seamless communication between applications.
                        </p>
                    </div>
                </div>
                <div
                    className="project-card"
                    ref={el => cardRefs.current[2] = el}
                    onMouseMove={(e) => handleMouseMove(e, 2)}
                    onMouseLeave={() => handleMouseLeave(2)}
                >
                    <div className="project-card__background"
                         style={{backgroundImage: `url(${process.env.PUBLIC_URL}/webs.jpg)`}}></div>
                    <div className="project-card__content">
                        <span className="project-card__category">Backend Development</span>
                        <h3 className="project-card__heading">Backend Development</h3>
                        <p className="project-card__description">
                            I create engaging and functional websites tailored to your needs. My backend development services
                            include designing clean cores, developing fast response, and ensuring a seamless
                            user experience across all devices.
                        </p>
                    </div>
                </div>
                <div
                    className="project-card"
                    ref={el => cardRefs.current[3] = el}
                    onMouseMove={(e) => handleMouseMove(e, 3)}
                    onMouseLeave={() => handleMouseLeave(3)}
                >
                    <div className="project-card__background"
                         style={{backgroundImage: `url(${process.env.PUBLIC_URL}/database.jpg)`}}></div>
                    <div className="project-card__content">
                        <span className="project-card__category">Database Implementation</span>
                        <h3 className="project-card__heading">Database Implementation</h3>
                        <p className="project-card__description">
                            Intermediate in database development, proficient in designing and implementing databases, such as MongoDB, MySQL
                            and PostgreSQL, that ensure efficient data storage and retrieval for your applications.
                        </p>
                    </div>
                </div>
                <div
                    className="project-card"
                    ref={el => cardRefs.current[4] = el}
                    onMouseMove={(e) => handleMouseMove(e, 4)}
                    onMouseLeave={() => handleMouseLeave(4)}
                >
                    <div className="project-card__background"
                         style={{backgroundImage: `url(${process.env.PUBLIC_URL}/java.png)`}}></div>
                    <div className="project-card__content">
                        <span className="project-card__category">Java Development</span>
                        <h3 className="project-card__heading">Java Development</h3>
                        <p className="project-card__description">
                            Professional in Java development, I've specialized in creating robust applications using Java,
                            from Minecraft plugins to complex backend systems.
                        </p>
                    </div>
                </div>
                <div
                    className="project-card"
                    ref={el => cardRefs.current[5] = el}
                    onMouseMove={(e) => handleMouseMove(e, 5)}
                    onMouseLeave={() => handleMouseLeave(5)}
                >
                    <div className="project-card__background"
                         style={{backgroundImage: `url(${process.env.PUBLIC_URL}/sql.jpg)`}}></div>
                    <div className="project-card__content">
                        <span className="project-card__category">SQL Development</span>
                        <h3 className="project-card__heading">SQL Development</h3>
                        <p className="project-card__description">
                            Intermediate in SQL development, using PL/SQL to create efficient and scalable database solutions.
                            I can help you design, implement, and optimize SQL databases for your applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
