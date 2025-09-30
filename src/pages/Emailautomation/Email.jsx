import React from 'react'
import HeroHeader from './Components/Hero'
import Statssection from './Components/StatsSection'
import Steps from './Components/Steps'
import MovingIconsSection from './Components/Marquee'
import Fourthcomponent from './Components/Fourth'
import Fifth from './Components/5th'
import TestimonialsSection from '../Home/Components/TestimonialsSection'
import EmailAutomationFeatures from './Components/EmailAutomationFeatures'
import { EmailAutomationBouncyCards } from './Components/EmailAutomationBouncyCards'
import EmailFeatureSection from './Components/EmailFeatureSection'

function Emailautomation() {
  return (
    <div>
      <HeroHeader />
      <EmailAutomationFeatures />
      {/* <EmailAutomationBouncyCards /> */}
      {/* <Statssection/> */}
      <Steps/>
      {/* <Fourthcomponent/> */}
      <Fifth/>
      <EmailFeatureSection />
      <TestimonialsSection/>
      {/* <MovingIconsSection/> */}
    </div>
  )
}

export default Emailautomation