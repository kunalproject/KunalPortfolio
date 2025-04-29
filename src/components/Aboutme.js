import React from 'react'
import {PortfolioContext} from '../context/PortfolioContext'
import { useContext } from 'react'
import styles from "./Aboutme.module.css";
const Aboutme = () => {
    const {portfolioData} = useContext(PortfolioContext);
    const {about, skills} = portfolioData;
  return (
    <div className={styles.aboutMe}>
      <h1>About Me</h1>

      {/* Render skills only if the array is not empty */}
      {skills && skills.length > 0 && (
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Render about only if it is not empty or undefined */}
      {about && <p className={styles.description}>{about}</p>}
    </div>
  );
}

export default Aboutme
