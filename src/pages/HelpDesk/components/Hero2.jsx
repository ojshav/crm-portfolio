import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import heroCrm1Img from '../../../assets/Helpdesk/h1.png';
import heroCrm2Img from '../../../assets/Helpdesk/h2.png';
import heroCrm3Img from '@/assets/hero-crm3.png';
import heroCrm4Img from '@/assets/hero-crm4.png';
import heroCrm5Img from '@/assets/hero-crm5.png';
import heroCrm6Img from '@/assets/hero-crm6.png';
import heroCrm7Img from '@/assets/hero-crm7.png';
import heroCrm8Img from '@/assets/hero-crm8.png';
import heroCrm9Img from '@/assets/hero-crm9.png';
import heroCrm10Img from '@/assets/hero-crm10.png';
import heroCrm11Img from '@/assets/hero-crm11.png';
import heroCrm12Img from '@/assets/hero-crm12.png';

export default function Hero2() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const workspaceItems = [
    { image: heroCrm1Img },
    { image: heroCrm2Img },
    { image: heroCrm3Img },
    { image: heroCrm4Img },
    { image: heroCrm5Img },
    { image: heroCrm6Img },
    { image: heroCrm7Img },
    { image: heroCrm8Img },
    { image: heroCrm9Img },
    { image: heroCrm10Img },
    { image: heroCrm11Img },
    { image: heroCrm12Img }
  ];

  // Auto-cycle through items every 1.8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItemIndex((prevIndex) => (prevIndex + 1) % workspaceItems.length);
    }, 1800);
    return () => clearInterval(interval);
  }, [workspaceItems.length]);

  return (
    <div className="min-h-screen relative bg-bg-gradient-to-br from-pink-50 via-cyan-50 to-blue-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Background Blurs */}
        <div className="absolute inset-0 -z-10">
           </div>

        <div className="relative">
          {/* Single Full Width Card */}
          <motion.div
            className="bg-white bg-opacity-50 backdrop-blur-md border-2 border-white border-opacity-100 rounded-2xl shadow-2xl p-3 w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              boxShadow:
                '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            <div className="relative">
              <div className="absolute -inset-20 sm:-inset-32 bg-gradient-to-br from-purple-400 via-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 -z-10"></div>
              <div className="absolute -inset-40 sm:-inset-60 bg-gradient-to-br from-blue-500 via-blue-500 to-purple-600 rounded-full blur-3xl opacity-10 -z-10"></div>
              <div className="absolute -inset-8 sm:-inset-16 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-full blur-xl opacity-20 -z-10"></div>

              <div className="bg-white bg-opacity-80 rounded-xl h-[40vh] lg:h-[50vh] flex items-center justify-center relative overflow-hidden">
                {workspaceItems.map((item, index) => (
                  <motion.img
                    key={index}
                    src={item.image}
                    alt={`CRM Background ${index}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: index === activeItemIndex ? 1 : 0
                    }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Added Heading, Subheading & Button */}
        <div className="text-center pt-12 sm:pt-16 lg:pt-20 pb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            24/7 Help Desk Support for Your CRM Needs
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Fast, reliable, and personalized support for all your CRM platforms and services.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500    text-white font-medium rounded-full shadow-lg transition">
              Contact Our Support Team
            </button>
            {/* or second button */}
            {/* <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg transition">
              Submit a Ticket
            </button> */}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
