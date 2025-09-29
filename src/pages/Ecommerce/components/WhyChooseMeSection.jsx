import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChooseMeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

 const faqItems = [
  {
    title: "User-Friendly Shopping Experience",
    description:
      "I design intuitive, clean, and modern interfaces that make shopping enjoyable. Customers can easily browse, filter, and purchase without frustration, which increases sales and retention.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Secure Payments Integration",
    description:
      "I implement trusted payment gateways like Stripe, PayPal, and Razorpay with advanced encryption to ensure safe and seamless transactions. Your customers’ data is always protected.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Mobile-Optimized Design",
    description:
      "With mobile-first design, your store will look and perform perfectly on any device. I ensure responsive layouts, quick loading times, and smooth checkout experiences for mobile shoppers.",
    image:
      "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Scalable for Growth",
    description:
      "As your business grows, your e-commerce platform will scale with you. From adding products to integrating advanced features, I build stores that evolve alongside your business.",
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Me
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
                    <h3
                      className={`text-lg font-medium transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-sky-500"
                          : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`transition-colors duration-300 ${
                        activeIndex === index ? "text-sky-500" : "text-gray-400"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
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
                      e.target.src =
                        "https://via.placeholder.com/600x400/f3f4f6/9ca3af?text=E-commerce+Feature";
                    }}
                  />

                  {/* Gradient overlay */}
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
                        ? "bg-sky-500 w-8"
                        : "bg-gray-300 hover:bg-gray-400"
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

export default WhyChooseMeSection;
