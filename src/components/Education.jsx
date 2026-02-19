import { education, certifications } from '../data/experience';
import useInView from '../hooks/useInView';
import './Education.css';

function GradCapIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 4 3 6 3s6-1 6-3v-5" /></svg>
    );
}

function CertIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>
    );
}

export default function Education() {
    const [ref, isVisible] = useInView();

    return (
        <section id="education" className="section container">
            <div
                ref={ref}
                className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
            >
                <div className="education-grid">
                    {/* Education Column */}
                    <div className="education-column">
                        <div className="education-column-header">
                            <div className="col-icon education-icon">
                                <GradCapIcon />
                            </div>
                            <div>
                                <span className="col-number">05.</span>
                                <h3>Education</h3>
                            </div>
                        </div>
                        <div className="education-items">
                            {education.map((item, index) => (
                                <div key={index} className="edu-card">
                                    <div className="edu-card-accent"></div>
                                    <div className="edu-card-content">
                                        <h4>{item.degree}</h4>
                                        <p className="edu-institution">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                            {item.institution}
                                        </p>
                                        <div className="edu-meta">
                                            <span className="edu-period">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                                                {item.period}
                                            </span>
                                            {item.grade && (
                                                <span className="edu-grade">{item.grade}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div className="education-column">
                        <div className="education-column-header">
                            <div className="col-icon cert-icon">
                                <CertIcon />
                            </div>
                            <div>
                                <span className="col-number">06.</span>
                                <h3>Certifications</h3>
                            </div>
                        </div>
                        <div className="education-items">
                            {certifications.map((cert, index) => (
                                <div key={index} className="cert-card">
                                    <div className="cert-badge">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div className="cert-content">
                                        <h4>{cert.title}</h4>
                                        <p className="cert-issuer">{cert.issuer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
