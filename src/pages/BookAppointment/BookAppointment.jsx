import React, { useEffect } from 'react'
import BookAppointmentHero from './components/BookAppointmentHero'
import CustriaScheduling from './components/CustriaScheduling'
import CalendlyIntegrations from './components/CalendlyIntegrations'
import CalendlyFeatures from './components/CalendlyFeatures'

const BookAppointment = () => {

      useEffect(() => {
          window.scrollTo(0, 0);
      })

  return (
    <div>
        <BookAppointmentHero />
        <CustriaScheduling />
        <CalendlyFeatures />
        <CalendlyIntegrations />
    </div>
  )
}

export default BookAppointment