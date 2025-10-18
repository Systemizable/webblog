import React, { useState } from 'react';
import './Footer.css';
import emailjs from 'emailjs-com';

const Footer = () => {
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [focused, setFocused] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
            case 'subject':
                return value.trim().length < 3 ? 'Subject must be at least 3 characters' : '';
            case 'message':
                return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (touched[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setFocused(prev => ({ ...prev, [name]: false }));

        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleFocus = (e) => {
        const { name } = e.target;
        setFocused(prev => ({ ...prev, [name]: true }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate all fields
        const newErrors = {};
        Object.keys(formData).forEach(key => {
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
                // Reset form
                setFormData({ name: '', email: '', subject: '', message: '' });
                setErrors({});
                setTouched({});
                e.target.reset();

                // Auto-close popup after 5 seconds
                setTimeout(() => {
                    setShowPopup(false);
                }, 5000);
            }, (error) => {
                setLoading(false);
                setShowPopup(true);
                setErrors({ submit: 'Failed to send message. Please try again later.' });
                console.error('Email send error:', error);
            });
    };

    const closePopup = () => {
        setShowPopup(false);
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors.submit;
            return newErrors;
        });
    };

    const isFormValid = Object.values(formData).every(val => val.trim().length > 0) &&
                        Object.values(errors).every(err => !err);

    return (
        <footer className="footer" id="contact">
            <div className="contact-header">
                <h2>Let's Work Together</h2>
                <p>Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="info-text">
                            <h4>Email</h4>
                            <a href="mailto:josephssfeir@gmail.com">josephssfeir@gmail.com</a>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info-text">
                            <h4>Location</h4>
                            <p>Lebanon</p>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="info-text">
                            <h4>Response Time</h4>
                            <p>Within 24 hours</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={sendEmail} noValidate>
                    <div className="form-row">
                        <div className={`form-field ${focused.name || formData.name ? 'focused' : ''} ${errors.name && touched.name ? 'error' : ''} ${formData.name && !errors.name ? 'valid' : ''}`}>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required
                                autoComplete="name"
                            />
                            <label htmlFor="name">Full Name</label>
                            {errors.name && touched.name && <span className="error-message">{errors.name}</span>}
                            {formData.name && !errors.name && <i className="fas fa-check-circle field-valid-icon"></i>}
                        </div>

                        <div className={`form-field ${focused.email || formData.email ? 'focused' : ''} ${errors.email && touched.email ? 'error' : ''} ${formData.email && !errors.email ? 'valid' : ''}`}>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                required
                                autoComplete="email"
                            />
                            <label htmlFor="email">Email Address</label>
                            {errors.email && touched.email && <span className="error-message">{errors.email}</span>}
                            {formData.email && !errors.email && <i className="fas fa-check-circle field-valid-icon"></i>}
                        </div>
                    </div>

                    <div className={`form-field ${focused.subject || formData.subject ? 'focused' : ''} ${errors.subject && touched.subject ? 'error' : ''} ${formData.subject && !errors.subject ? 'valid' : ''}`}>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                            autoComplete="off"
                        />
                        <label htmlFor="subject">Subject</label>
                        {errors.subject && touched.subject && <span className="error-message">{errors.subject}</span>}
                        {formData.subject && !errors.subject && <i className="fas fa-check-circle field-valid-icon"></i>}
                    </div>

                    <div className={`form-field ${focused.message || formData.message ? 'focused' : ''} ${errors.message && touched.message ? 'error' : ''} ${formData.message && !errors.message ? 'valid' : ''}`}>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            required
                            rows="5"
                        ></textarea>
                        <label htmlFor="message">Your Message</label>
                        {errors.message && touched.message && <span className="error-message">{errors.message}</span>}
                        {formData.message && !errors.message && <i className="fas fa-check-circle field-valid-icon"></i>}
                    </div>

                    <button
                        type="submit"
                        className={`submit-btn ${loading ? 'loading' : ''} ${!isFormValid ? 'disabled' : ''}`}
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
                                <i className="fas fa-paper-plane"></i>
                            </>
                        )}
                    </button>
                </form>
            </div>

            {showPopup && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        {errors.submit ? (
                            <>
                                <div className="popup-icon error-icon">
                                    <i className="fas fa-exclamation-circle"></i>
                                </div>
                                <h3>Oops!</h3>
                                <p>{errors.submit}</p>
                            </>
                        ) : (
                            <>
                                <div className="popup-icon success-icon">
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <h3>Message Sent!</h3>
                                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                            </>
                        )}
                        <button className="popup-close-btn" onClick={closePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default Footer;
