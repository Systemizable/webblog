import React, { useState } from 'react';
import './Footer.css';
import emailjs from 'emailjs-com';

const Footer = () => {
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_4dwp0v7', 'template_1ul453b', e.target, 'brAuaqwjht9NEsAqb')
            .then((result) => {
                setLoading(false);
                setReady(true);
                setShowPopup(true);
                // No automatic closing
            }, (error) => {
                setLoading(false);
                alert('An error occurred, Please try again', error.text);
            });
    };

    return (
        <footer className="footer" id="contact">
            <h2>Contact</h2>
            <p>Contact me for projects, ideas and inquiries.</p>
            <div className="contact-info">
                <p><i className="fas fa-envelope"></i> josephssfeir@gmail.com</p>
                <p><i className="fas fa-map-marker-alt"></i> Lebanon</p>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
                <div className="input-group">
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <input type="text" name="subject" placeholder="Subject" required />
                <textarea name="message" placeholder="Message" required></textarea>
                <button
                    type="submit"
                    className={`${loading ? 'loading' : ''} ${ready ? 'ready' : ''}`}
                    disabled={loading || ready}
                >
                    {ready ? '' : 'SUBMIT'}
                </button>
            </form>
            {showPopup && (
                <div className="cd-popup is-visible">
                    <div className="cd-popup-container">
                        <p>Thank you! Your message has been sent successfully.</p>
                        <ul className="cd-buttons">
                            <li><a href="#" onClick={() => setShowPopup(false)}>Close</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
