import React from 'react';
import './Footer.css';
import emailjs from 'emailjs-com';

const Footer = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4dwp0v7', 'template_1ul453b', e.target, 'brAuaqwjht9NEsAqb')
            .then((result) => {
                alert('Message Sent, We will get back to you shortly', result.text);
            }, (error) => {
                alert('An error occurred, Please try again', error.text);
            });
    };

    return (
        <footer className="footer" id="contact">
            <h2>Contact</h2>
            <p>Contact me for projects, ideas, and inquiries</p>
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
                <button type="submit">SUBMIT</button>
            </form>
        </footer>
    );
};

export default Footer;
