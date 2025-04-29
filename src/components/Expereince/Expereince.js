import React from 'react'
import {PortfolioContext} from '../../context/PortfolioContext'
import { useContext ,useState} from 'react'
import './expereince.css'
const Expereince = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which dropdown is open
  const formatDate = (dateString) => {
    if (!dateString) return "Present"; // Handle ongoing roles
    const date = new Date(dateString);
    return date.toLocaleString("default", { month: "short", year: "numeric" });
  };
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle dropdown
  };
   const {portfolioData} = useContext(PortfolioContext);
   let {experience} = portfolioData;
     experience = experience.sort((a, b) => {
    const dateA = new Date(a.startDate);
    const dateB = new Date(b.startDate);
    return dateB - dateA;
  });
  return (
    <div className="experience-section">
      <h1>Experience</h1>
      <div className="experience-list">
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div
              className="experience-header"
              onClick={() => toggleDropdown(index)}
            >
              <div className="company-info">
                <img
                   src={exp.imageUrl || "https://res.cloudinary.com/dmmwlsock/image/upload/v1742704323/portfolio/sbt1ebmtvim89f5qcjwl.jpg"}
                  alt={`${exp.company} logo`}
                  className="company-logo"
                />
                <div>
                  <h2>{exp.company}</h2>
                  <p>
                    {exp.role} | {formatDate(exp.startDate)} -{" "}
                    {formatDate(exp.endDate)}
                  </p>
                </div>
              </div>
              <span
                className={`toggle-button ${openIndex === index ? "open" : ""}`}
              >
                ▼
              </span>
            </div>
            {openIndex === index && (
              <div className="experience-description">
                <p>{exp.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Expereince
