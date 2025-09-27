import React from 'react';
import { motion } from 'framer-motion';

import BannerImg from '@/assets/about/crm.jpg';


const GlassmorphismImageCard = () => {
  return (
    <div className="min-h-screen sm:min-h-[80vh] bg-white flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Background spreading gradient - Responsive sizes */}
      <div className="absolute inset-0 opacity-15 sm:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full blur-xl sm:blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-sky-300 to-cyan-400 rounded-full blur-xl sm:blur-2xl"></div>
      </div>
      
      {/* Glassmorphism card - Responsive dimensions */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl rounded-xl sm:rounded-2xl overflow-hidden"
        style={{
          height: '50vh',
          minHeight: '300px',
          maxHeight: '400px',
          '@media (min-width: 640px)': {
            height: '55vh',
            maxHeight: '600px',
          },
          '@media (min-width: 1024px)': {
            height: '60vh',
            maxHeight: '800px',
          },
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)', // Safari support
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
        }}
      >
        {/* Inner glow effect */}
        <div 
          className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-50 sm:opacity-60"
          style={{
            background: 'linear-gradient(135deg, rgba(135,206,250,0.25) 0%, rgba(147,51,234,0.25) 35%, rgba(236,72,153,0.25) 70%, rgba(135,206,250,0.25) 100%)',
          }}
        ></div>
        
        {/* Image container - Responsive padding */}
        <div className="relative w-full h-full p-2 sm:p-3 md:p-4 flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            src={BannerImg}
            alt="Featured Content"
            className="w-full h-full object-fit rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
            style={{
              filter: 'brightness(1.05) contrast(1.02)',
            }}
            loading="lazy"
          />
          
          {/* Subtle inner border glow - Responsive positioning */}
          <div 
            className="absolute inset-2 sm:inset-3 md:inset-4 rounded-lg sm:rounded-xl pointer-events-none"
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.04) 100%)',
            }}
          ></div>
        </div>
        
        {/* Additional light reflections - Responsive height */}
        <div 
          className="absolute top-0 left-0 w-full h-1/4 sm:h-1/3 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)',
          }}
        ></div>
        
        {/* Corner accent lights - Hidden on very small screens */}
        <div className="hidden sm:block absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm"></div>
        <div className="hidden md:block absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-tr from-white/15 to-transparent rounded-full blur-sm"></div>
      </motion.div>
      
      {/* Floating particles effect - Only on larger screens */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GlassmorphismImageCard;