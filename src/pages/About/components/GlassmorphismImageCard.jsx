import React from 'react';
import { motion } from 'framer-motion';

import BannerImg from '@/assets/about/crm.jpg';

const GlassmorphismImageCard = () => {
  return (
    <div className="min-[80vh] bg-white flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background spreading gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-sky-300 to-cyan-400 rounded-full blur-2xl"></div>
      </div>
      
      {/* Glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-6xl rounded-2xl overflow-hidden"
        style={{
          height: '60vh',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
      >
        {/* Inner glow effect */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-60"
          style={{
            background: 'linear-gradient(135deg, rgba(135,206,250,0.3) 0%, rgba(147,51,234,0.3) 35%, rgba(236,72,153,0.3) 70%, rgba(135,206,250,0.3) 100%)',
          }}
        ></div>
        
        {/* Image container */}
        <div className="relative w-full h-full p-4 flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            src={BannerImg}
            alt="Featured Content"
            className="w-full h-full object-cover rounded-xl shadow-lg"
            style={{
              filter: 'brightness(1.1) contrast(1.05)',
            }}
          />
          
          {/* Subtle inner border glow */}
          <div 
            className="absolute inset-4 rounded-xl pointer-events-none"
            style={{
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)',
            }}
          ></div>
        </div>
        
        {/* Additional light reflections */}
        <div 
          className="absolute top-0 left-0 w-full h-1/3 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
          }}
        ></div>
      </motion.div>
    </div>
  );
};

export default GlassmorphismImageCard;