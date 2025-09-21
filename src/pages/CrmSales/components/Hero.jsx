import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SalesCrmHero = () => {
  const [currentTypeIndex, setCurrentTypeIndex] = useState(0);
  const [activeSpanIndex, setActiveSpanIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const dynamicTexts = ['Marketing', 'Sales', 'Purchase', 'Field', 'Support', 'Growth'];
  
  const features = [
    {
      name: 'Workflow Automation',
      image: 'https://capsulecrm.com/static/workflow-automation-15f674ba98a9feeb4a3c7ed3c80200e4.png'
    },
    {
      name: 'Contact Management',
      image: 'https://capsulecrm.com/static/contact-management-0a833c83f3611b9e61f7a4dfd9372abe.png'
    },
    {
      name: 'Sales Pipeline',
      image: 'https://capsulecrm.com/static/sales-pipeline-f691e61844b7bb448ce4616ef862bb40.png'
    },
    {
      name: 'Email Marketing',
      image: 'https://capsulecrm.com/static/email-marketing-ff71e027ced153169fd4a4159d0795d7.png'
    },
    {
      name: 'Sales Analytics',
      image: 'https://capsulecrm.com/static/sales-analytics-83b717aa7f25638cfaa36f1aea71a692.png'
    },
    {
      name: 'Projects',
      image: 'https://capsulecrm.com/static/projects-9994a6067a7bfae9292633415c47b3eb.png'
    }
  ];

  // Dynamic typing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTypeIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpanIndex((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to center active span
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeSpan = container.children[activeSpanIndex];
      if (activeSpan) {
        const containerWidth = container.offsetWidth;
        const spanLeft = activeSpan.offsetLeft;
        const spanWidth = activeSpan.offsetWidth;
        const scrollLeft = spanLeft - (containerWidth - spanWidth) / 2;
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSpanIndex]);

  const handleSpanClick = (index) => {
    setActiveSpanIndex(index);
  };

  return (
    <div className="bg-gradient-to-br from-sky-100 via-purple-50 to-pink-100 pt-16 lg:pt-28">
      {/* Text Content Section - 50vh */}
      <div className="flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              The Sales CRM<br />
              for high-performing{' '}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentTypeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                  >
                    {dynamicTexts[currentTypeIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{' '}
              teams
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Empower your team with the most intuitive CRM that grows with your business. 
              From lead generation to deal closure, streamline every step of your sales process.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold text-lg rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-lg"
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
          </div>
        </div>

        {/* Features and Image Section - 50vh */}
        <div className="flex-1 flex flex-col px-4 sm:px-6 lg:px-8">
          {/* Feature Spans - 40vw center container */}
          {/* <div className="flex justify-center mb-8">
            <div 
              ref={scrollContainerRef}
              className="w-[40vw] overflow-x-hidden whitespace-nowrap scrollbar-hide"
            >
              <div className="flex space-x-6 py-4">
                {features.map((feature, index) => (
                  <motion.span
                    key={index}
                    onClick={() => handleSpanClick(index)}
                    className={`inline-block px-6 py-3 rounded-full cursor-pointer transition-all duration-300 text-lg font-medium whitespace-nowrap ${
                      activeSpanIndex === index 
                        ? 'bg-black text-white shadow-lg' 
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                    whileHover={{ scale: activeSpanIndex === index ? 1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {feature.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div> */}

          {/* Image Container with Glassmorphism */}
          <div className="flex-1 flex items-center justify-center pb-12 pt-8">
            <motion.div
              key={activeSpanIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative max-w-4xl w-full"
            >
              {/* Glassmorphism container */}
              <div className="relative backdrop-blur-lg bg-white/20 rounded-3xl p-8 shadow-2xl border border-white/30">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
                
                {/* Image */}
                <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeSpanIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      src={features[activeSpanIndex].image}
                      alt={features[activeSpanIndex].name}
                      className="w-full h-auto object-contain rounded-2xl shadow-lg"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/800x500/f3f4f6/9ca3af?text=CRM+Feature";
                      }}
                    />
                  </AnimatePresence>
                </div>

                {/* Floating elements for extra glassmorphism effect */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-purple-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCrmHero;