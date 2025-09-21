import React, { useEffect } from 'react'
import ChatBotHero from './components/ChatBotHero'
import IntroVideo from './components/IntroVideo'
import FeatureShowcase from './components/FeatureShowcase'
import ChatbotEngage from './components/ChatbotEngage'
import OmnichannelChatbot from './components/OmnichannelChatbot'

const Chatbot = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

  return (
    <div>
        <ChatBotHero />
        <IntroVideo />
        <FeatureShowcase />
        <ChatbotEngage />
        <OmnichannelChatbot />
    </div>
  )
}

export default Chatbot