import React from 'react';
import { motion } from 'framer-motion';

export default function ClickUpLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Hero Section */}
      <div className="text-center pt-20 pb-12 px-4">
        {/* Main Heading */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The everything app, <span className="">for work.</span>
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-medium leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          One app for projects, knowledge, conversations, and more.<br />
          Get more done faster—together.
        </motion.p>
        
        {/* CTA Button */}
        <motion.button 
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get started. It's FREE!
        </motion.button>
        
        {/* Free Forever Text */}
        <motion.p 
          className="text-gray-500 text-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Free Forever. No Credit Card.
        </motion.p>
      </div>

      {/* Main Container with Glassmorphism Cards */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Background Blur Effects */}
        <div className="absolute inset-0 -z-10">
          {/* Purple blur */}
          <div className="absolute top-10 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
          {/* Blue blur */}
          <div className="absolute top-40 right-32 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
          {/* Additional purple blur */}
          <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="relative">
          {/* Left Container - CRM Interface */}
          <motion.div 
            className="bg-blue-300 bg-opacity-50 backdrop-blur-md border border-white border-opacity-30 rounded-2xl shadow-2xl p-8 mb-8 max-w-4xl relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* CRM Interface Mock with Background Shadow */}
            <div className="relative">
              {/* Huge spread shadow behind CRM */}
              <div className="absolute -inset-62 bg-gradient-to-br from-purple-400 via-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 -z-10"></div>
              <div className="absolute -inset-80 bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-10 -z-10"></div>
              <div className="absolute -inset-16 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-full blur-xl opacity-20 -z-10"></div>
              
              <div className="bg-white bg-opacity-80 rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-600 text-xl">CRM INTERFACE IMAGE AREA</span>
                {/* Bottom Fade Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Right Container - Workspace Setup (Overlapping) */}
          <motion.div 
            className="absolute -top-8 right-0 w-96 bg-purple-300 bg-opacity-50 backdrop-blur-md border border-white border-opacity-30 rounded-2xl shadow-2xl p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Workspace Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              {/* Card Header */}
              <div className="bg-gray-200 h-16 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-600">CARD HEADING</span>
              </div>
              
              {/* Card Description */}
              <div className="bg-gray-100 h-12 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-600 text-sm">CARD DESCRIPTION</span>
              </div>
              
              {/* Grid of Services */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Array.from({ length: 9 }, (_, i) => (
                  <div key={i} className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg h-20 flex flex-col items-center justify-center hover:border-blue-400 cursor-pointer transition-colors">
                    <div className="w-6 h-6 bg-gray-300 rounded mb-1"></div>
                    <span className="text-xs text-gray-500">Item {i + 1}</span>
                  </div>
                ))}
              </div>
              
              {/* Get Started Button */}
              <div className="bg-blue-200 h-12 rounded flex items-center justify-center">
                <span className="text-gray-600">GET STARTED BTN</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Text at Bottom */}
        <div className="text-center pt-20 pb-8">
          <div className="bg-gray-200 h-8 w-80 mx-auto rounded flex items-center justify-center">
            <span className="text-gray-600 text-sm">TRUST TEXT</span>
          </div>
        </div>
      </div>
    </div>
  );
}