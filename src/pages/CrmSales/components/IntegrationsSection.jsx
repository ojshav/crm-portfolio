import React from 'react';
import { motion } from 'framer-motion';
import Sec2Img from '@/assets/crmsales/sec2.png'

const IntegrationsSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">



<div className="relative h-[50vh]">
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative w-full h-full"
  >
    <img
      src={Sec2Img}
      alt="Monday.com integrations with various tools"
      className="w-full h-full object-contain"
      onError={(e) => {
        e.target.src = "https://via.placeholder.com/600x400/f3f4f6/9ca3af?text=Integration+Tools";
      }}
    />

    {/* Optional floating animation */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="w-full h-full opacity-0"></div>
    </motion.div>
  </motion.div>
</div>

        
          <div className="space-y-8">
            {/* Small heading */}
            <div className="text-blue-500 text-sm font-semibold tracking-wide uppercase">
              Integrations
            </div>

            {/* Main heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Integrate in a snap with all your favorite tools
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Bring all of your essential processes and data into monday CRM for your smoothest workflows yet. Who said you can't have your apps and use them too?
            </p>

            {/* Button and Credit Card Text */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-lg"
              >
                Get Started
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </motion.button>

              <p className="text-sm text-gray-500">
                No credit card needed.
              </p>
            </div>
          </div>

    

        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;