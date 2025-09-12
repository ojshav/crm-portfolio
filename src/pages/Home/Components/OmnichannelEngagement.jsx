import React from 'react';
import { motion } from 'framer-motion';
import Omni1Img from '@/assets/home/omni1.png';
import Omni2Img from '@/assets/home/omni2.png';
import Omni3Img from '@/assets/home/omni3.png';
import Omni4Img from '@/assets/home/omni4.png';
import Omni5Img from '@/assets/home/omni5.png';

export default function OmnichannelEngagement() {
  // Container animation with stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"                // <-- triggers when in viewport
        viewport={{ once: true, amount: 0.3 }} // 30% visible triggers animation
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          variants={itemVariants}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Omnichannel Engagement From One Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Delight your customers across channels, in just a few clicks.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-auto items-end">
          
          {/* Section 1 - Email Automation */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="bg-gray-100 bg-opacity-50 backdrop-blur-md border border-gray-200 border-opacity-50 rounded-2xl p-2 shadow-xl">
              <img src={Omni1Img} alt="Email Automation Dashboard" className="w-full h-auto rounded-xl object-cover"/>
            </div>
          </motion.div>

          {/* Section 2 - CRM & Sales */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="bg-gray-100 bg-opacity-50 backdrop-blur-md border border-gray-200 border-opacity-50 rounded-2xl p-2 shadow-xl">
              <img src={Omni2Img} alt="CRM Sales Dashboard" className="w-full h-auto rounded-xl object-cover"/>
            </div>
          </motion.div>

          {/* Section 3 - Book Appointments & Help Desk */}
          <motion.div className="lg:col-span-1 space-y-4" variants={itemVariants}>
            <div className="bg-gray-100 bg-opacity-50 backdrop-blur-md border border-gray-200 border-opacity-50 rounded-2xl p-2 shadow-xl">
              <img src={Omni3Img} alt="Book Appointments" className="w-full h-auto rounded-xl object-cover"/>
            </div>
            <div className="bg-gray-100 bg-opacity-50 backdrop-blur-md border border-gray-200 border-opacity-50 rounded-2xl p-2 shadow-xl">
              <img src={Omni4Img} alt="Help Desk" className="w-full h-auto rounded-xl object-cover"/>
            </div>
          </motion.div>

          {/* Section 4 - AI-powered Chatbot */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="bg-gray-100 bg-opacity-50 backdrop-blur-md border border-gray-200 border-opacity-50 rounded-2xl p-2 shadow-xl">
              <img src={Omni5Img} alt="AI Chatbot Interface" className="w-full h-auto rounded-xl object-cover"/>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
