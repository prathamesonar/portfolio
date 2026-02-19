import { useState } from 'react';
import projects from '../data/projects';
import useInView from '../hooks/useInView';
import ProjectModal from './ProjectModal';
import './Projects.css';

function GitHubLogo() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
    );
}

function ExternalLinkIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z" />
        </svg>
    );
}

function CodeIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    );
}

export default function Projects() {
    const [ref, isVisible] = useInView();
    const [modalIndex, setModalIndex] = useState(null);

    const openModal = (index) => setModalIndex(index);
    const closeModal = () => setModalIndex(null);
    const prevProject = () => setModalIndex((i) => (i - 1 + projects.length) % projects.length);
    const nextProject = () => setModalIndex((i) => (i + 1) % projects.length);

    return (
        <section id="projects" className="section container">
            <div
                ref={ref}
                className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}
            >
                <div className="section-heading">
                    <span className="number">03.</span>
                    <h3>Things I've Built</h3>
                    <span className="line"></span>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            onClick={() => openModal(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && openModal(index)}
                        >
                            {/* Screenshot / Image area */}
                            <div className="project-image-wrapper">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} screenshot`}
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="project-image-placeholder">
                                        <CodeIcon />
                                    </div>
                                )}
                            </div>

                            {/* Card body */}
                            <div className="project-card-body">
                                <div className="project-card-header">
                                    <h4 className="project-title">{project.title}</h4>
                                    <div className="project-links" onClick={(e) => e.stopPropagation()}>
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.title} GitHub`}
                                                className="project-link-github"
                                            >
                                                <GitHubLogo />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${project.title} Live Demo`}
                                                className="project-link-live"
                                            >
                                                <ExternalLinkIcon />
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.techStack.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {modalIndex !== null && (
                <ProjectModal
                    projects={projects}
                    activeIndex={modalIndex}
                    onClose={closeModal}
                    onPrev={prevProject}
                    onNext={nextProject}
                />
            )}
        </section>
    );
}
