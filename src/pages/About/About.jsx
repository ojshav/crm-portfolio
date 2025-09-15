import React from 'react'
import AboutHeroSection from './components/AboutHeroSection'
import MissionSectionAlt  from './components/MissionSectionAlt'
import WhyDifferentSection from './components/WhyDifferentSection'
import GlassmorphismImageCard from './components/GlassmorphismImageCard'

const About = () => {
  return (
    <div>
        <AboutHeroSection />
        <MissionSectionAlt />
        <WhyDifferentSection />
        <GlassmorphismImageCard />
    </div>
  )
}

export default About