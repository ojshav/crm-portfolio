import React from 'react'
import HeroSection from './Components/Hero'
import OmnichannelEngagement from './Components/OmnichannelEngagement'
import OneSolution from './Components/OneSolution'

function Home() {
  return (
    <div>
      <HeroSection />
      <OmnichannelEngagement />
      <OneSolution />

      <div className='h-52'></div>
    </div>
  )
}

export default Home