import React, { useEffect } from 'react'
import Hero from "./components/Hero"
import Hero2 from './components/Hero2';
import Third from './components/3rd';
import Fourthcomponent from './components/4th';

const Helpdesk = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

  return (
    <div>
     {/* <Hero/> */}
     <Hero2/>
     <Third/>
     <Fourthcomponent/>
    </div>
  )
}

export default Helpdesk