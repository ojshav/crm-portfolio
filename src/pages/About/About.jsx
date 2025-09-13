import React from 'react'
import AboutHeroSection from './components/AboutHeroSection'
import { MissionSectionAlt } from './components/MissionSectionAlt'
import WhyDifferentSection from './components/WhyDifferentSection'

const About = () => {
  return (
    <div>
        <AboutHeroSection />
        <MissionSectionAlt />
        <WhyDifferentSection />
    </div>
  )
}

export default About