import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EmailAutomationSteps = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const autoPlayInterval = 4000;

  const features = [
    { 
      step: 'Step 1', 
      title: 'Connect Your Platform',
      content: 'Seamlessly integrate your e-commerce store with our email automation system in just a few clicks.', 
      image: 'https://res.cloudinary.com/monday-blogs/fl_lossy,f_auto,q_auto/wp-blog/2021/03/lead_score_mid_way-9-scaled.jpg' 
    },
    { 
      step: 'Step 2',
      title: 'Design Your Campaign',
      content: 'Choose from pre-built templates or create custom email campaigns with our drag-and-drop editor.',
      image: 'https://s3-ap-south-1.amazonaws.com/ind-cdn.freshdesk.com/data/helpdesk/attachments/production/1060032351744/original/x_xIcK-q5QzAguhfI2ASKSi0fmi41r5RCg.png?1740348975'
    },
    { 
      step: 'Step 3',
      title: 'Set Up Triggers',
      content: 'Configure behavioral triggers and conditions to send the right message at the perfect moment.',
      image: 'https://miro.medium.com/1*g0dO1Mfr9hbc3MnI39FaKQ.png'
    },
    { 
      step: 'Step 4',
      title: 'Launch & Monitor',
      content: 'Activate your campaigns and track performance in real-time with comprehensive analytics dashboard.',
      image: 'https://media.whatagraph.com/Custom_analytics_2554b01619.png?width=2000'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, features.length]);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-8">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              🚀 Quick Setup Process
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get Started in{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Launch your first automated email campaign in minutes, not hours. Our intuitive setup process makes it easy.
          </p>
        </motion.div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left Side - Steps */}
          <div className="order-2 md:order-1 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-6 cursor-pointer"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: index === currentFeature ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index);
                  setProgress(0);
                }}
              >
                {/* Step Number Circle */}
                <motion.div
                  className={`w-14 h-14 rounded-full flex items-center justify-center border-2 flex-shrink-0 transition-all duration-300 ${
                    index === currentFeature
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 border-purple-600 text-white scale-110 shadow-lg'
                      : index < currentFeature
                      ? 'bg-white border-green-500 text-green-500'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                >
                  {index < currentFeature ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <span className="text-xl font-bold">{index + 1}</span>
                  )}
                </motion.div>

                {/* Step Content */}
                <div className="flex-1 pt-2">
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    index === currentFeature 
                      ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent' 
                      : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {feature.content}
                  </p>
                  
                  {/* Progress Bar */}
                  {index === currentFeature && (
                    <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="order-1 md:order-2 relative h-[300px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-2xl overflow-hidden"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-purple-900/20 to-transparent" />
                      
                      {/* Step indicator on image */}
                      <div className="absolute top-6 left-6">
                        <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800 shadow-lg">
                          {feature.step}
                        </span>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Your First Campaign
          </button>
          <p className="text-gray-500 mt-4 text-sm">
            No credit card required • Free 14-day trial
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default EmailAutomationSteps;