import React from "react";
import {  FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons
import "./AppContacts.css"; // Import the CSS file
import {PortfolioContext} from '../../context/PortfolioContext'
import { useContext } from 'react'
const AppContacts = () => {
  const {portfolioData} = useContext(PortfolioContext);
  let apps = [
    { name: "Twitter", icon: <FaTwitter />, link: portfolioData.twitter },
    { name: "Instagram", icon: <FaInstagram />, link: portfolioData.instagram },
    { name: "LinkedIn", icon: <FaLinkedin />, link: portfolioData.linkedin },
    { name: "GitHub", icon: <FaGithub />, link: portfolioData.github },
  ];
  apps=apps.filter(app=>app.link!=null);
  return (
    <div className="app-contacts">
      <div className="app-icons">
        {apps.map((app, index) => (
          <a
            key={index}
            href={app.link}
            target="_blank"
            rel="noopener noreferrer"
            className="app-icon"
          >
            {app.icon}
          </a>
        ))}
      </div>
    </div>
  );
  
};

export default AppContacts;