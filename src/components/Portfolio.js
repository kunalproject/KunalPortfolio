import React from 'react'
import Header from './Header'
import Aboutme from './Aboutme'
import Education from './Education'
import './Portfolio.css'
import Conntact from './Conntact'
import {PortfolioContext} from '../context/PortfolioContext'
import { useContext } from 'react'
// import DsaStats from './DsaStats'
import DSAStatsSection from './Dsa_section/DsaSection'
import Expereince from './Expereince/Expereince'
import AppContacts from './AppContact/AppContacts'
import ProjectsSection from './Projects/Projects'
const Portfolio = () => {
    const {dsa_stats} = useContext(PortfolioContext);
    const {portfolioData} = useContext(PortfolioContext);
  return (
    <div>
        <Header />
        {
         (portfolioData.about != null || portfolioData.skills.length>0) && <Aboutme />
        }
        
{    (portfolioData.experience!=null && portfolioData.experience.length>0) &&    <Expereince />}
        <Education/>
        <ProjectsSection projects={portfolioData.projects} />
        {dsa_stats!=null  && <DSAStatsSection  stats={dsa_stats}/>}

{ (portfolioData.twitter!=null || portfolioData.instagram!=null || portfolioData.linkedin!=null || portfolioData.github!=null)&&       <AppContacts />}
        <Conntact />
    </div>
  )
}

export default Portfolio
