import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Users, 
  Settings, 
  Share2,
  ChevronRight
} from 'lucide-react';

import Step1Img from '@/assets/BookAppointment/step1.png';
import Step2Img from '@/assets/BookAppointment/step2.png';
import Step3Img from '@/assets/BookAppointment/step3.png';
import Step4Img from '@/assets/BookAppointment/step4.png';
import Step5Img from '@/assets/BookAppointment/step5.png';

export default function CustriaScheduling() {
  const [activeSection, setActiveSection] = useState(0);

  const sectionColors = [
    { color: 'sky', gradient: 'from-sky-100 via-sky-400 to-sky-200', bg: 'bg-sky-500' },
    { color: 'purple', gradient: 'from-purple-100 via-purple-400 to-purple-200', bg: 'bg-purple-500' },
    { color: 'pink', gradient: 'from-pink-100 via-pink-400 to-pink-200', bg: 'bg-pink-500' },
    { color: 'yellow', gradient: 'from-yellow-100 via-yellow-400 to-yellow-200', bg: 'bg-yellow-500' },
    { color: 'green', gradient: 'from-green-100 via-green-400 to-green-200', bg: 'bg-green-500' }
  ];

  const images = [
    Step1Img,
    Step2Img,
    Step3Img,
    Step4Img,
    Step5Img
  ];

  const sections = [
    {
      icon: Calendar,
      title: "Connect your calendars",
      description: "Sync all your calendars in one place for seamless scheduling across platforms."
    },
    {
      icon: Clock,
      title: "Add your availability",
      description: "Set your working hours and availability preferences to match your schedule."
    },
    {
      icon: Users,
      title: "Connect conferencing tools",
      description: "Sync your video conferencing tools and set preferences for in-person meetings or calls."
    },
    {
      icon: Settings,
      title: "Customize your event types",
      description: "Create different meeting types with custom durations and booking requirements."
    },
    {
      icon: Share2,
      title: "Share your scheduling link",
      description: "Send your personalized booking link to clients and let them book at their convenience."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const ProgressBar = ({ isActive, color }) => (
    <div className="w-full bg-gray-200 rounded-full h-1 mt-3 overflow-hidden">
      <motion.div
        className={`h-full bg-gradient-to-r ${color.gradient} rounded-full`}
        initial={{ width: 0 }}
        animate={{ width: isActive ? '100%' : '0%' }}
        transition={{ duration: 3, ease: 'linear' }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Custria makes scheduling simple
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Custria's easy enough for individual users, and powerful enough to meet the needs of 
            enterprise organizations — including 86% of the Fortune 500 companies.
          </p>

          <motion.button
            className="px-8 py-4 text-lg font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Sign up for free
          </motion.button>
        </motion.div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 lg:px-32 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Content */}
          <div className="space-y-6">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              const isActive = activeSection === index;
              const currentColor = sectionColors[index];
              
              return (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                    isActive 
                      ? 'border-gray-300 bg-gray-50' 
                      : 'border-transparent bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveSection(index)}
                  whileHover={{ scale: 1.02 }}
                  layout
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`p-3 rounded-xl ${isActive ? 'bg-white' : 'bg-gray-200'} transition-all duration-500`}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        backgroundColor: isActive ? '#ffffff' : '#e5e7eb'
                      }}
                    >
                      <IconComponent 
                        className={`w-6 h-6 transition-colors duration-500 ${
                          isActive 
                            ? currentColor.color === 'sky' ? 'text-sky-500' :
                              currentColor.color === 'purple' ? 'text-purple-500' :
                              currentColor.color === 'pink' ? 'text-pink-500' :
                              currentColor.color === 'yellow' ? 'text-yellow-500' :
                              'text-green-500'
                            : 'text-gray-600'
                        }`} 
                      />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.h3
                        className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                          isActive ? 'text-black' : 'text-gray-400'
                        }`}
                        animate={{ 
                          color: isActive ? '#000000' : '#9ca3af',
                        }}
                      >
                        {section.title}
                      </motion.h3>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-gray-600 leading-relaxed">
                              {section.description}
                            </p>
                            <ProgressBar isActive={isActive} color={currentColor} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Section - Image Container */}
          <div className="relative">
            <motion.div
              className={`pt-8 px-8 lg:px-12 rounded-3xl bg-gradient-to-br ${sectionColors[activeSection].gradient} transition-all duration-700`}
              animate={{ 
                background: `linear-gradient(135deg, ${sectionColors[activeSection].gradient.split(' ')[0].replace('from-', '')}, ${sectionColors[activeSection].gradient.split(' ')[1].replace('to-', '')})`
              }}
            >
              <motion.div
                className=""
                // style={{
                //   backdropFilter: 'blur(20px)',
                //   background: 'rgba(255, 255, 255, 0.2)',
                // }}
                // whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSection}
                      src={images[activeSection]}
                      alt={`Feature ${activeSection + 1}`}
                      className="w-full h-80 lg:h-[60vh] object-cover rounded-t-xl"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                  
                  {/* Overlay gradient */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" /> */}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}