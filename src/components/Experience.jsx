import { experience } from '../data/experience';
import useInView from '../hooks/useInView';
import './Experience.css';

export default function Experience() {
    const [ref, isVisible] = useInView();

    return (
        <section id="experience" className="section container">
            <div
                ref={ref}
                className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
            >
                <div className="section-heading">
                    <span className="number">04.</span>
                    <h3>Leadership & Experience</h3>
                    <span className="line"></span>
                </div>
                {experience.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <div className="experience-badge">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        </div>
                        <div className="experience-content">
                            <h4 className="experience-role">
                                {exp.role} <span className="experience-org">@ {exp.organization}</span>
                            </h4>
                            <p className="experience-period">{exp.period}</p>
                            <div className="experience-points">
                                {exp.points.map((point, i) => (
                                    <div key={i} className="experience-point">
                                        <span className="arrow">▸</span>
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
