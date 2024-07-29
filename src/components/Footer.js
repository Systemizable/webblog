import React from 'react';
import './Footer.css';

const Footer = () => (
    <footer className="footer" id="contact">
        <h2>Contact</h2>
        <p>Contact me for projects, ideas.</p>
        <div className="contact-info">
            <p><i className="fas fa-envelope"></i> josephssfeir@gmail.com</p>
            <p><i className="fas fa-map-marker-alt"></i> Lebanon</p>
        </div>
        <form className="contact-form">
            <div className="input-group">
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">SUBMIT</button>
        </form>
    </footer>
);

export default Footer;
