import React, { useState } from "react";
import "../assets/styles/components/ProjectCard.css";

const ProjectCard = ({
    title, image, alt, legend, description,
    subheading1, subcontent1,
    subheading2, subcontent2,
    subheading3, subcontent3,
    subheading4, subcontent4,
    summary, techStack
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`project-card ${isExpanded ? "expanded" : ""}`}>
            <h3>{title}</h3>
            <img src={image} alt={alt} />
            <legend>{legend}</legend>

            <button className="toggle-button" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Show Less ▲" : "Show More ▼"}
            </button>

            {isExpanded && (
                <div className="project-details">
                    <p className="justified-text">{description}</p>

                    {[
                        { heading: subheading1, content: subcontent1 },
                        { heading: subheading2, content: subcontent2 },
                        { heading: subheading3, content: subcontent3 },
                        { heading: subheading4, content: subcontent4 }
                    ].map((section, index) => (
                        section.heading && section.content ? (
                            <div key={index}>
                                <h4>{section.heading}</h4>
                                {Array.isArray(section.content) ? (
                                    <ul className="subcontent-list">
                                        {section.content.map((item, idx) => <li key={idx}>{item}</li>)}
                                    </ul>
                                ) : (
                                    <p>{section.content}</p>
                                )}
                            </div>
                        ) : null
                    ))}
                    <p className="justified-text">{summary}</p>
                    {techStack.length > 0 && (
                        <>
                            <h4>Tech Stack</h4>
                            <ul className="tech-stack">
                                {techStack.map((tech, index) => (
                                    <li key={index}>{tech}</li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
