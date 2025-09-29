import React from 'react'
import HeroSection from './components/Hero'
import WhyChooseMeSection from './components/WhyChooseMeSection'
import CRMFeaturesSection from './components/CRMFeaturesSection'
import PortfolioSection from './components/PortfolioSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import PricingSection from './components/EPricing'

const Ecommerce = () => {
  return (
    <div>
      <HeroSection/>
      <WhyChooseMeSection/>
      <PricingSection/>
      <CRMFeaturesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}

export default Ecommerce
