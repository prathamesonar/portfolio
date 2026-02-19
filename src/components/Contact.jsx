import { useState } from 'react';
import useInView from '../hooks/useInView';
import './Contact.css';

export default function Contact() {
    const [ref, isVisible] = useInView();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { Accept: 'application/json' },
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const data = await response.json();
                if (data.errors) {
                    alert(data.errors.map((err) => err.message).join(', '));
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            }
        } catch {
            alert('Oops! There was a problem submitting your form.');
        }
    };

    return (
        <section id="contact" className="section container contact">
            <div
                ref={ref}
                className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
            >
                <p className="contact-heading-sub">What's Next?</p>
                <h2 className="contact-heading">Get In Touch</h2>
                <p className="contact-desc">
                    My inbox is always open. Whether you have a question or just want to
                    say hi, I'll try my best to get back to you!
                </p>

                <div className="contact-form-wrapper">
                    {!submitted ? (
                        <form
                            className="contact-form"
                            action="https://formsubmit.co/prathameshsonar170@gmail.com"
                            method="POST"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input
                                type="hidden"
                                name="_subject"
                                value="New message from your Portfolio Website!"
                            />

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="contact-name">Your Name</label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        name="name"
                                        required
                                        className="form-input"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-email">Your Email</label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        name="email"
                                        required
                                        className="form-input"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="contact-message">Your Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows="5"
                                    required
                                    className="form-input"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                        </form>
                    ) : (
                        <div className="thank-you">
                            <h3>Thank You! </h3>
                            <p>
                                Your message has been sent successfully. I will get back to you
                                shortly.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
