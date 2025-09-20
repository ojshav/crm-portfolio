import React from 'react'
import HeroHeader from './Components/Hero'
import Statssection from './Components/StatsSection'
import Steps from './Components/Steps'
import MovingIconsSection from './Components/Marquee'
import Fourthcomponent from './Components/Fourth'
import Fifth from './Components/5th'
import TestimonialsSection from '../Home/Components/TestimonialsSection'

function Emailautomation() {
  return (
    <div>
      <HeroHeader />
      <Statssection/>
      <Steps/>
      <Fourthcomponent/>
      <Fifth/>
      <TestimonialsSection/>
      <MovingIconsSection/>
    </div>
  )
}

export default Emailautomation