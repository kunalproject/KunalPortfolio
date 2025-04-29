import React, { useState } from "react";
import styles from "./DSAStatsSection.module.css"; // Import CSS Module

const DSAStatsSection = ({ stats }) => {
  // Don't render if stats object is null or undefined


  const { easy, medium, hard } = stats;
  const total = easy + medium + hard;

  // Calculate percentages for each difficulty level
  let easyPercentage = (easy / total) * 100;
  let mediumPercentage = (medium / total) * 100;
  let hardPercentage = (hard / total) * 100;
   easyPercentage = Math.round(easyPercentage*10 )/10;
  mediumPercentage = Math.round(mediumPercentage*10 )/10;
  hardPercentage = Math.round(hardPercentage*10 )/10;

  // State to track hovered section
  const [hoveredSection, setHoveredSection] = useState(null);
  if (!stats) {
    return null;
  }
  return (
    <div className={styles.dsaStatsSection}>
      <h1>DSA Stats</h1>
      <div className={styles.statsContainer}>
        {/* Circular Progress Chart */}
        <div className={styles.circularChart}>
          <div
            className={`${styles.circle} ${styles.easy}`}
            style={{
              background: `conic-gradient(
                #06d6a0 ${easyPercentage}%,
                #ffd166 ${easyPercentage}% ${easyPercentage + mediumPercentage}%,
                #ff6b6b ${easyPercentage + mediumPercentage}% 100%
              )`,
            }}
          ></div>
          <div className={styles.circleBackground}></div>
          <div className={styles.circleText}>
            {hoveredSection === "easy" && (
              <span onMouseEnter={() => setHoveredSection("easy")} onMouseLeave={() => setHoveredSection(null)}>
                Easy: <strong>{(easyPercentage)}%</strong>
              </span>
            )}
            {hoveredSection === "medium" && (
              <span onMouseEnter={() => setHoveredSection("medium")} onMouseLeave={() => setHoveredSection(null)}>
                Medium: <strong>{mediumPercentage}%</strong>
              </span>
            )}
            {hoveredSection === "hard" && (
              <span>
                Hard: <strong>{hardPercentage}%</strong>
              </span>
            )}
            {!hoveredSection && (
              <>
                <span>{total}</span>
                <span>Total</span>
              </>
            )}
          </div>
        </div>

        {/* Stats Labels */}
        <div className={styles.statsLabels}>
          <div className={styles.label}>
            <span className={`${styles.dot} ${styles.easy}`}></span>
            <span  onMouseEnter={() => setHoveredSection("easy")} onMouseLeave={() => setHoveredSection(null)}>Easy: {easy}</span>
          </div>
          <div className={styles.label}>
            <span className={`${styles.dot} ${styles.medium}`}></span>
            <span  onMouseEnter={() => setHoveredSection("medium")} onMouseLeave={() => setHoveredSection(null)}>Medium: {medium}</span>
          </div>
          <div className={styles.label}>
            <span className={`${styles.dot} ${styles.hard}`}></span>
            <span  onMouseEnter={() => setHoveredSection("hard")} onMouseLeave={() => setHoveredSection(null)}>Hard: {hard}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSAStatsSection;