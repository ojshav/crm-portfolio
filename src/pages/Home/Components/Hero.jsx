import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckSquare, 
  Hash, 
  Sparkles, 
  Play, 
  Clock, 
  Calendar, 
  FileText, 
  Target, 
  BarChart3, 
  PenTool, 
  FileEdit, 
  Zap 
} from 'lucide-react';

import heroCrm1Img from '@/assets/hero-crm1.png';
import heroCrm2Img from '@/assets/hero-crm2.png';
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

export default function ClickUpLayout() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const workspaceItems = [
    { icon: CheckSquare, label: 'Tasks', image: heroCrm1Img },
    { icon: Hash, label: 'Chat', image: heroCrm2Img },
    { icon: Sparkles, label: 'AI', image: heroCrm3Img },
    { icon: Play, label: 'Sprints', image: heroCrm4Img },
    { icon: Clock, label: 'Time Tracking', image: heroCrm5Img },
    { icon: Calendar, label: 'Calendar', image: heroCrm6Img },
    { icon: FileText, label: 'Docs', image: heroCrm7Img },
    { icon: Target, label: 'Goals', image: heroCrm8Img },
    { icon: BarChart3, label: 'Dashboards', image: heroCrm9Img },
    { icon: PenTool, label: 'Whiteboards', image: heroCrm10Img },
    { icon: FileEdit, label: 'Forms', image: heroCrm11Img },
    { icon: Zap, label: 'Automations', image: heroCrm12Img }
  ];

  // Auto-cycle through items every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItemIndex((prevIndex) => (prevIndex + 1) % workspaceItems.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [workspaceItems.length]);

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      {/* Hero Section */}
      <div className="text-center pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12 px-4">
        {/* Main Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight font-sans"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The everything CRM, <span className="">for work.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 font-medium leading-relaxed font-sans px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          One app for projects, knowledge, conversations, and more.<br className="hidden sm:block" />
          Get more done faster—together.
        </motion.p>

        {/* CTA Button */}
        <motion.button
        onClick={handleScroll}
          className="relative overflow-hidden z-20 bg-[linear-gradient(to_right,_#00d5ff,_#1d4ed8,_#6112ff,_#ec4899,_#ec4899)] text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 font-sans">Get started. It's FREE!</span>

          {/* Shiny effect overlay */}
          <span className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
            <span className="absolute -top-1 -left-1 w-1/3 h-[200%] bg-white/40 rotate-12 transform translate-x-[-120%] hover:translate-x-[300%] transition-transform duration-700 ease-in-out"></span>
          </span>
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
          <div className="absolute top-10 left-4 sm:left-10 lg:left-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
          {/* Blue blur */}
          <div className="absolute top-20 sm:top-40 right-4 sm:right-16 lg:right-32 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
          {/* Additional purple blur */}
          <div className="absolute bottom-10 left-1/4 sm:left-1/3 w-36 sm:w-54 lg:w-72 h-36 sm:h-54 lg:h-72 bg-purple-500 rounded-full blur-3xl opacity-15"></div>
        </div>

        <div className="relative">
          {/* Mobile Layout - Stack vertically */}
          <div className="block lg:hidden space-y-6">
            {/* Left Container - CRM Interface (Mobile) */}
            <motion.div
              className="bg-white bg-opacity-50 backdrop-blur-md border-2 border-white border-opacity-100 rounded-2xl shadow-2xl p-3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* CRM Interface Mock with Background Shadow */}
              <div className="relative">
                {/* Mobile optimized blur effects */}
                <div className="absolute -inset-20 sm:-inset-32 bg-gradient-to-br from-purple-400 via-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 -z-10"></div>
                <div className="absolute -inset-40 sm:-inset-60 bg-gradient-to-br from-blue-500 via-blue-500 to-purple-600 rounded-full blur-3xl opacity-10 -z-10"></div>
                <div className="absolute -inset-8 sm:-inset-16 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-full blur-xl opacity-20 -z-10"></div>

                <div className="bg-white bg-opacity-80 rounded-xl h-[30vh] sm:h-[40vh] flex items-center justify-center relative overflow-hidden">
                  {/* Images with smooth transitions */}
                  {workspaceItems.map((item, index) => (
                    <motion.img
                      key={index}
                      src={item.image}
                      alt={`${item.label} CRM Background`}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: index === activeItemIndex ? 1 : 0 
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Container - Workspace Setup (Mobile) */}
            <motion.div
              className="bg-white bg-opacity-30 backdrop-blur-md border border-white border-opacity-30 rounded-2xl shadow-2xl p-3"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute -inset-20 bg-gradient-to-br from-purple-400 via-blue-400 to-purple-500 rounded-full blur-xl opacity-10 md:opacity-80 -z-10"></div>
              <div className="absolute -inset-8 bg-gradient-to-br from-blue-500 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-10 -z-10"></div>
              <div className="absolute -inset-32  bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-full blur-xl opacity-10 -z-10"></div>
              
              {/* Workspace Card */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                {/* Card Header */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Set up your Workspace</h3>
                  <p className="text-sm sm:text-base text-gray-600">Start with what you need, customize as you go.</p>
                </div>

                {/* Grid of Services - Responsive */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {workspaceItems.map((item, i) => {
                    const IconComponent = item.icon;
                    const isActive = i === activeItemIndex;
                    return (
                      <motion.div 
                        key={i} 
                        className={`relative border-2 rounded-lg h-16 sm:h-20 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ease-in-out ${
                          isActive 
                            ? 'border-gray-200 bg-gray-50' 
                            : 'border-gray-200 bg-gray-50'
                        }`}
                        animate={{
                          boxShadow: isActive 
                            ? '0 8px 25px -5px rgba(147, 51, 234, 0.3)' 
                            : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {/* Checkbox */}
                        <motion.div 
                          className={`absolute top-1.5 sm:top-2 right-1.5 sm:right-2 w-3 sm:w-4 h-3 sm:h-4 rounded border-2 flex items-center justify-center ${
                            isActive 
                              ? 'bg-black border-black' 
                              : 'bg-white border-gray-300'
                          }`}
                          animate={{
                            scale: isActive ? 1.1 : 1,
                            backgroundColor: isActive ? '#000000' : '#ffffff'
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <motion.svg 
                            className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isActive ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </motion.svg>
                        </motion.div>
                        
                        <motion.div
                          animate={{
                            color: isActive ? '#7c3aed' : '#9ca3af'
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <IconComponent className="w-4 sm:w-6 h-4 sm:h-6 mb-1" />
                        </motion.div>
                        <motion.span 
                          className="text-xs font-medium text-center px-1"
                          animate={{
                            color: isActive ? '#111827' : '#6b7280'
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {item.label}
                        </motion.span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Get Started Button */}
                <button className="w-full bg-[linear-gradient(to_right,_#00d5ff,_#1d4ed8,_#6112ff,_#ec4899,_#ec4899)] text-white font-semibold py-2.5 sm:py-3 rounded-lg text-base sm:text-lg hover:shadow-lg">
                  Get started
                </button>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout - Original overlapping design */}
          <div className="hidden lg:block">
            {/* Left Container - CRM Interface */}
            <motion.div
              className="bg-white bg-opacity-50 backdrop-blur-md border-2 border-white border-opacity-100 rounded-2xl shadow-2xl p-3 mb-8 max-w-4xl relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* CRM Interface Mock with Background Shadow */}
              <div className="relative">
                {/* Huge spread shadow behind CRM (removed from bottom) */}
                <div className="absolute -inset-x-62 -inset-t-62 bg-gradient-to-br from-purple-400 via-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 -z-10"></div>

                <div className="absolute -inset-80 bg-gradient-to-br from-blue-500 via-blue-500 to-purple-600 rounded-full blur-3xl opacity-10 -z-10"></div>
                <div className="absolute -inset-16 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-full blur-xl opacity-20 -z-10"></div>

                <div className="bg-white bg-opacity-80 rounded-xl h-[50vh] flex items-center justify-center relative overflow-hidden">
                  {/* Images with smooth transitions */}
                  {workspaceItems.map((item, index) => (
                    <motion.img
                      key={index}
                      src={item.image}
                      alt={`${item.label} CRM Background`}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: index === activeItemIndex ? 1 : 0 
                      }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Container - Workspace Setup (Overlapping) */}
            <motion.div
              className="absolute -top-8 right-10 w-96 bg-white bg-opacity-30 backdrop-blur-md border border-white border-opacity-30 rounded-2xl shadow-2xl p-3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute -inset-42 bg-gradient-to-br from-purple-400 via-blue-400 to-purple-500 rounded-full blur-xl opacity-80 -z-10"></div>
              <div className="absolute -inset-16 bg-gradient-to-br from-blue-500 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-10 -z-10"></div>
              <div className="absolute -inset-66 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-full blur-xl opacity-10 -z-10"></div>
              
              {/* Workspace Card */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                {/* Card Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Set up your Workspace</h3>
                  <p className="text-gray-600">Start with what you need, customize as you go.</p>
                </div>

                {/* Grid of Services */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {workspaceItems.map((item, i) => {
                    const IconComponent = item.icon;
                    const isActive = i === activeItemIndex;
                    return (
                      <motion.div 
                        key={i} 
                        className={`relative border-2 rounded-lg h-20 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ease-in-out ${
                          isActive 
                            ? 'border-gray-200 bg-gray-50' 
                            : 'border-gray-200 bg-gray-50'
                        }`}
                        animate={{
                          boxShadow: isActive 
                            ? '0 8px 25px -5px rgba(147, 51, 234, 0.3)' 
                            : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {/* Checkbox */}
                        <motion.div 
                          className={`absolute top-2 right-2 w-4 h-4 rounded border-2 flex items-center justify-center ${
                            isActive 
                              ? 'bg-black border-black' 
                              : 'bg-white border-gray-300'
                          }`}
                          animate={{
                            scale: isActive ? 1.1 : 1,
                            backgroundColor: isActive ? '#000000' : '#ffffff'
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <motion.svg 
                            className="w-2.5 h-2.5 text-white" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isActive ? 1 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </motion.svg>
                        </motion.div>
                        
                        <motion.div
                          animate={{
                            color: isActive ? '#7c3aed' : '#9ca3af'
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <IconComponent className="w-6 h-6 mb-1" />
                        </motion.div>
                        <motion.span 
                          className="text-xs font-medium"
                          animate={{
                            color: isActive ? '#111827' : '#6b7280'
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          {item.label}
                        </motion.span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Get Started Button */}
                <button className="w-full bg-[linear-gradient(to_right,_#00d5ff,_#1d4ed8,_#6112ff,_#ec4899,_#ec4899)] text-white font-semibold py-3 rounded-lg text-lg hover:shadow-lg">
                  Get started
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Text at Bottom */}
        <div className="text-center pt-12 sm:pt-16 lg:pt-20 pb-8">
          {/* Placeholder for trust text if needed */}
        </div>
      </div>

      {/* White Fade at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
    </div>
  );
}