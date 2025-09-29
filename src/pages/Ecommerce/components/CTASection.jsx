import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Animated Background Patterns */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white text-sm font-semibold">
                    🚀 Start Your Journey Today
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Ready to Transform Your E-Commerce Business?
                </h2>

                <p className="text-lg text-white/90 leading-relaxed">
                  Join hundreds of businesses already growing with our powerful CRM platform. Get started in minutes with no credit card required.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white border border-white/30">
                    ✓ 14-Day Free Trial
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white border border-white/30">
                    ✓ No Credit Card
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white border border-white/30">
                    ✓ Setup in 24 Hours
                  </span>
                </div>
              </motion.div>

              {/* Right Side - CTA Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Started Now
                </h3>

                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Start Free Trial
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By signing up, you agree to our Terms & Privacy Policy
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>GDPR</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Wave Decoration */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-50" />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;