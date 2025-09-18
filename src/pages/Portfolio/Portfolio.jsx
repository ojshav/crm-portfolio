import React from 'react'
import TimelineComponent from './components/TimelineComponent'
import HeroComponent from './components/Hero'
import DashboardTabs from './components/DashboardTabs'

const Portfolio = () => {
  return (
    <div>

      <HeroComponent />

        <TimelineComponent />

        <DashboardTabs />
    </div>
  )
}

export default Portfolio