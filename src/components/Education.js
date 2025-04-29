import React from 'react'
import {PortfolioContext} from '../context/PortfolioContext'
import { useContext ,useState ,useRef, useEffect} from 'react'
import styles from './Education.module.css'
const Education = () => {
  const {portfolioData} = useContext(PortfolioContext);
  const [activeIndex, setActiveIndex] = useState(0); // Track active education item
  const educationRefs = useRef([]); // Refs for each education item
  let {education} = portfolioData;
  // Sort education array by startDate (most recent first)
  const sortedEducation = education
    .slice()
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  // Handle scroll to update active index
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport
      for (let i = 0; i < sortedEducation.length; i++) {
        const ref = educationRefs.current[i];
        if (ref && ref.offsetTop <= scrollPosition) {
          setActiveIndex(i);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sortedEducation]);

  // Don't render if education array is empty
  if (education.length === 0) {
    return null;
  }


  return (
    <div className={styles.educationSection}>
      <h1>Education</h1>
      <div className={styles.educationList}>
        {sortedEducation.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <div className={styles.imageContainer}>
              <img
               src={edu.imageUrl || "https://res.cloudinary.com/dmmwlsock/image/upload/v1742704062/portfolio/dntqohn5gtm8k7qcutmj.jpg"} 
                alt={edu.institution}
                className={styles.image}
              />
            </div>
            <div className={styles.details}>
              <div className={styles.degreeDuration}>
                <h2>{edu.degree}</h2>
                <p>
                  {new Date(edu.startDate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {edu.endDate
                    ? new Date(edu.endDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })
                    : "Present"}
                </p>
              </div>
              <div className={styles.instituteMarks}>
                <p>{edu.institution}</p>
                {/* Only display marks if available */}
                {edu.marks && <p>{edu.marks}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
