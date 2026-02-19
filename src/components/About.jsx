import useInView from '../hooks/useInView';
import './About.css';

export default function About() {
    const [ref, isVisible] = useInView();

    return (
        <section id="about" className="section container">
            <div
                ref={ref}
                className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
            >
                <div className="section-heading">
                    <span className="number">01.</span>
                    <h3>About Me</h3>
                    <span className="line"></span>
                </div>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            Hello! I'm Prathamesh, a computer science and business systems student with a strong
                            passion for software development. My journey into tech started
                            with a curiosity for how things work, which quickly evolved into a
                            love for building applications that solve real-world problems.
                        </p>
                        <p>
                            I have hands-on experience with the full web development
                            lifecycle, from designing responsive front-end interfaces with
                            React to building robust back-end systems with Node.js and
                            managing databases.
                        </p>
                    </div>
                    <div className="about-image-wrapper">
                        <div className="about-image-bg"></div>
                        <img
                            src="/assets/profile.png"
                            alt="Prathamesh Sonar"
                            className="about-image"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
