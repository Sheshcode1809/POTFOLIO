
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container contact-container">
                <h2 className="section-title center">04. Get In Touch</h2>
                <p className="contact-text">
                    Although I'm not currently looking for any new opportunities, my inbox
                    is always open. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <input type="text" placeholder="Name" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <textarea
                            placeholder="Message"
                            className="form-input form-textarea"
                            rows="5"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline">
                        Say Hello
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
