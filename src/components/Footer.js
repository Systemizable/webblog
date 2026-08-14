import React, { useState } from 'react';
import './Footer.css';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faLocationDot,
    faClock,
    faCircleCheck,
    faCircleExclamation,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { useReveal } from '../hooks/useCustomHooks';

const FIELDS = ['name', 'email', 'subject', 'message'];

const INFO = [
    { id: 'email', icon: faEnvelope, label: 'Email', value: 'josephssfeir@gmail.com', href: 'mailto:josephssfeir@gmail.com' },
    { id: 'location', icon: faLocationDot, label: 'Location', value: 'Lebanon' },
    { id: 'response', icon: faClock, label: 'Response Time', value: 'Within 24 hours' },
];

const Footer = () => {
    const revealRef = useReveal(0.08);
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [focused, setFocused] = useState({});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
            case 'email': {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
            }
            case 'subject':
                return value.trim().length < 3 ? 'Subject must be at least 3 characters' : '';
            case 'message':
                return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
            default:
                return '';
        }
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (touched[name]) {
            setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
        }
    };

    const handleBlur = e => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setFocused(prev => ({ ...prev, [name]: false }));
        setErrors(prev => ({ ...prev, [name]: validateField(name, value) }));
    };

    const handleFocus = e => {
        const { name } = e.target;
        setFocused(prev => ({ ...prev, [name]: true }));
    };

    const sendEmail = e => {
        e.preventDefault();

        const newErrors = {};
        FIELDS.forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setTouched({ name: true, email: true, subject: true, message: true });
            return;
        }

        setLoading(true);

        emailjs.sendForm('service_4dwp0v7', 'template_1ul453b', e.target, 'brAuaqwjht9NEsAqb')
            .then(() => {
                setLoading(false);
                setShowPopup(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setErrors({});
                setTouched({});
                e.target.reset();
                setTimeout(() => setShowPopup(false), 5000);
            }, error => {
                setLoading(false);
                setShowPopup(true);
                setErrors({ submit: 'Failed to send message. Please try again later.' });
                console.error('Email send error:', error);
            });
    };

    const closePopup = () => {
        setShowPopup(false);
        setErrors(prev => {
            const next = { ...prev };
            delete next.submit;
            return next;
        });
    };

    // Valid when the data itself passes — not gated on the user having blurred
    // every field, which used to leave the button dead after a paste-and-submit.
    const isFormValid = FIELDS.every(key => !validateField(key, formData[key]));

    const fieldClass = name =>
        [
            'form-field',
            focused[name] || formData[name] ? 'focused' : '',
            errors[name] && touched[name] ? 'error' : '',
            formData[name] && !errors[name] ? 'valid' : '',
        ].filter(Boolean).join(' ');

    return (
        <footer className="footer" id="contact">
            <div className="footer-inner reveal" ref={revealRef}>
                <div className="contact-header reveal-item" style={{ '--i': 0 }}>
                    <span className="section-eyebrow">Contact</span>
                    <h2 className="section-title">
                        Let's work <em>together</em>
                    </h2>
                    <p className="contact-lede">
                        Have a project in mind? Drop me a message and I'll get back to you.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info reveal-item" style={{ '--i': 1 }}>
                        {INFO.map(item => (
                            <div className="info-card" key={item.id}>
                                <span className="info-icon">
                                    <FontAwesomeIcon icon={item.icon} aria-hidden="true" />
                                </span>
                                <div className="info-text">
                                    <h4>{item.label}</h4>
                                    {item.href
                                        ? <a href={item.href}>{item.value}</a>
                                        : <p>{item.value}</p>}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form className="contact-form reveal-item" style={{ '--i': 2 }} onSubmit={sendEmail} noValidate>
                        <div className="form-row">
                            <div className={fieldClass('name')}>
                                <input
                                    type="text" name="name" id="name"
                                    value={formData.name}
                                    onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
                                    required autoComplete="name"
                                />
                                <label htmlFor="name">Full Name</label>
                                {errors.name && touched.name && <span className="error-message">{errors.name}</span>}
                            </div>

                            <div className={fieldClass('email')}>
                                <input
                                    type="email" name="email" id="email"
                                    value={formData.email}
                                    onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
                                    required autoComplete="email"
                                />
                                <label htmlFor="email">Email Address</label>
                                {errors.email && touched.email && <span className="error-message">{errors.email}</span>}
                            </div>
                        </div>

                        <div className={fieldClass('subject')}>
                            <input
                                type="text" name="subject" id="subject"
                                value={formData.subject}
                                onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
                                required autoComplete="off"
                            />
                            <label htmlFor="subject">Subject</label>
                            {errors.subject && touched.subject && <span className="error-message">{errors.subject}</span>}
                        </div>

                        <div className={fieldClass('message')}>
                            <textarea
                                name="message" id="message" rows="5"
                                value={formData.message}
                                onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
                                required
                            ></textarea>
                            <label htmlFor="message">Your Message</label>
                            {errors.message && touched.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className={`submit-btn ${loading ? 'loading' : ''}`}
                            disabled={loading || !isFormValid}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner"></span>
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <div className="footer-bottom">
                    <span>© {new Date().getFullYear()} Joseph Sfeir</span>
                    <span className="footer-built">Built with React</span>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay" onClick={closePopup} role="presentation">
                    <div
                        className="popup-content"
                        onClick={e => e.stopPropagation()}
                        role="alertdialog"
                        aria-modal="true"
                        aria-labelledby="popup-title"
                    >
                        <div className={`popup-icon ${errors.submit ? 'error-icon' : 'success-icon'}`}>
                            <FontAwesomeIcon
                                icon={errors.submit ? faCircleExclamation : faCircleCheck}
                                aria-hidden="true"
                            />
                        </div>
                        <h3 id="popup-title">{errors.submit ? 'Oops!' : 'Message Sent!'}</h3>
                        <p>
                            {errors.submit
                                ? errors.submit
                                : "Thank you for reaching out. I'll get back to you as soon as possible."}
                        </p>
                        <button className="popup-close-btn" onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
