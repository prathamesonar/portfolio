import skills from '../data/skills';
import useInView from '../hooks/useInView';
import './Skills.css';

export default function Skills() {
    const [ref, isVisible] = useInView();

    return (
        <section id="skills" className="section container">
            <div
                ref={ref}
                className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
            >
                <div className="section-heading">
                    <span className="number">02.</span>
                    <h3>My Skillset</h3>
                    <span className="line"></span>
                </div>
                <div className="skills-grid">
                    {skills.map((group) => (
                        <div key={group.category} className="skill-category">
                            <h4>{group.category}</h4>
                            <div className="skill-tags">
                                {group.items.map((skill) => (
                                    <span key={skill.name} className="skill-tag">
                                        {skill.icon && (
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="skill-icon"
                                                width="18"
                                                height="18"
                                                loading="lazy"
                                            />
                                        )}
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
