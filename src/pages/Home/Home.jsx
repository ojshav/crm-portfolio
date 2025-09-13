import React from 'react'
import HeroSection from './Components/Hero'
import OmnichannelEngagement from './Components/OmnichannelEngagement'
import OneSolution from './Components/OneSolution'
import DummyImg from "@/assets/dummy.png"
import FeaturesSection from './Components/FeaturesSection'
import ClickUpHeroPrototype from './Components/ClickUpHeroPrototype'

function Home() {
  return (
    <div>
      <HeroSection />
      <OmnichannelEngagement />
      <OneSolution />
      <FeaturesSection />
      <ClickUpHeroPrototype />
      {/* <img src={DummyImg} alt=""  className='w-full h-full'/> */}
    </div>
  )
}

export default Home