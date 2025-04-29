import React, { useState, useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioContext";
import styles from "./Projects.module.css"; // Import CSS Module

const ProjectsSection = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which dropdown is open
  const { portfolioData } = useContext(PortfolioContext);
  const { projects } = portfolioData;

  // Don't render if projects array is empty or undefined
  if (!projects || projects.length === 0) {
    return null;
  }

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle dropdown
  };

  return (
    <div className={styles.projectsSection}>
      <h1>Projects</h1>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <div
              className={styles.projectHeader}
              onClick={() => toggleDropdown(index)}
            >
              <div className={styles.projectInfo}>
                <img
                  src={project.imageUrl || "https://res.cloudinary.com/dmmwlsock/image/upload/v1742555588/portfolio/go2x0zwitrst7vtnp1ne.png"}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <h2>{project.title}</h2>
              </div>
              <span
                className={`${styles.toggleButton} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                ▼
              </span>
            </div>
            {openIndex === index && (
              <div className={styles.projectDescription}>
                <p>{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    View Project
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;