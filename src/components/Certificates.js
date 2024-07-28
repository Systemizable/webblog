import React from 'react';
import './Certificates.css';

const Certificates = () => {
    const certificates = [
        { id: 1, src: `${process.env.PUBLIC_URL}/cisco.png`, alt: 'Cisco Certificate', info: 'Cisco Certificate - Introduction to Networks', type: 'image' },
        { id: 2, src: `${process.env.PUBLIC_URL}/certificate2.jpg`, alt: 'Certificate 2', info: 'Java Programming Certificate - Advanced Concepts', type: 'image' },
        { id: 3, src: `${process.env.PUBLIC_URL}/certificate3.jpg`, alt: 'Certificate 3', info: 'Web Development Certificate - HTML, CSS, JavaScript', type: 'image' },
        // Add more certificates as needed
    ];

    return (
        <section className="certificates" id="certificates">
            <h2>Certificates</h2>
            <div className="certificates-content">
                {certificates.map(cert => (
                    <div key={cert.id} className="certificate-item">
                        {cert.type === 'pdf' ? (
                            <a href={cert.src} target="_blank" rel="noopener noreferrer">
                                <div className="certificate-image pdf">
                                    <p>View PDF</p>
                                </div>
                            </a>
                        ) : (
                            <img src={cert.src} alt={cert.alt} className="certificate-image" />
                        )}
                        <div className="certificate-info">{cert.info}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;