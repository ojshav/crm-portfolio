import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MondayAISection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqItems = [
    {
      title: "Automated task generation",
      description: "Generate tasks automatically based on your project needs and requirements. Our AI analyzes your workflow and creates relevant tasks to keep your projects on track.",
      image: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DafnaGlik/AI/Automated_task_generation.png"
    },
    {
      title: "Email composition and rephrasing",
      description: "Craft professional emails and rephrase existing content with AI assistance. Improve your communication with smart suggestions and tone adjustments.",
      image: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DafnaGlik/AI/Email_composition_and_rephrasing.png"
    },
    {
      title: "Content generation and summarizing",
      description: "Create polished content for every step of the sales cycle or summarize anything from a call transcript to meeting notes.",
      image: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DafnaGlik/AI/Content_summarizing.png"
    },
    {
      title: "Formula building",
      description: "Build complex formulas with AI assistance. Our intelligent system helps you create powerful calculations and automations without the complexity.",
      image: "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/DafnaGlik/AI/Formula_builder.png"
    }
  ];

  // Auto-cycle through items every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % faqItems.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [faqItems.length]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Stay one step ahead<br />
            with AI
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => handleItemClick(index)}
                  className="w-full text-left focus:outline-none group"
                >
                  <div className="flex items-center justify-between py-4">
                    <h3 className={`text-lg font-medium transition-colors duration-300 ${
                      activeIndex === index 
                        ? 'text-sky-500' 
                        : 'text-gray-600 group-hover:text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`transition-colors duration-300 ${
                        activeIndex === index ? 'text-sky-500' : 'text-gray-400'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 pb-4 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="sticky top-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={faqItems[activeIndex].image}
                    alt={faqItems[activeIndex].title}
                    className="w-full h-96 object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400/f3f4f6/9ca3af?text=AI+Feature+Image";
                    }}
                  />
                  
                  {/* Gradient overlay for better visual appeal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                </motion.div>
              </AnimatePresence>

              {/* Progress indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {faqItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleItemClick(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-sky-500 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MondayAISection;