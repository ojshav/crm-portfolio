import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Cookie, Eye, Lock, Database, Globe, Mail, Phone } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          {...fadeInUp}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy & Cookie Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: December 2024
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-2 border border-white border-opacity-50 shadow-lg">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('privacy')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'privacy'
                    ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:bg-opacity-50'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </button>
              <button
                onClick={() => setActiveTab('cookies')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === 'cookies'
                    ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white hover:bg-opacity-50'
                }`}
              >
                <Cookie className="w-4 h-4" />
                <span>Cookie Policy</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content Container */}
        <motion.div
          className="bg-white bg-opacity-80 backdrop-blur-lg rounded-3xl border border-white border-opacity-50 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3)'
          }}
        >
          <div className="p-6 sm:p-8 lg:p-12">
            {/* Privacy Policy Content */}
            {activeTab === 'privacy' && (
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {/* Information We Collect */}
                <motion.section variants={fadeInUp} className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Information We Collect</h2>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                    </p>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-3">Personal Information includes:</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Name and contact information</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Account credentials and preferences</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Usage data and analytics</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Communication records</li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* How We Use Information */}
                <motion.section variants={fadeInUp} className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How We Use Your Information</h2>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      We use the information we collect to provide, maintain, and improve our CRM services, process transactions, and communicate with you.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                        <h4 className="font-semibold text-gray-900 mb-3">Service Delivery</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Provide and maintain our services</li>
                          <li>• Process your transactions</li>
                          <li>• Provide customer support</li>
                        </ul>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                        <h4 className="font-semibold text-gray-900 mb-3">Improvement & Analytics</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Analyze usage patterns</li>
                          <li>• Develop new features</li>
                          <li>• Enhance user experience</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Information Sharing */}
                <motion.section variants={fadeInUp} className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Information Sharing</h2>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                    </p>
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl p-6">
                      <h4 className="font-semibold text-red-900 mb-3">We may share information when:</h4>
                      <ul className="space-y-2 text-sm text-red-800">
                        <li>• Required by law or legal process</li>
                        <li>• To protect our rights and property</li>
                        <li>• With your explicit consent</li>
                        <li>• With trusted service providers under strict agreements</li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Data Security */}
                <motion.section variants={fadeInUp} className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Data Security</h2>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                        <div className="w-8 h-8 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <Lock className="w-4 h-4 text-white" />
                        </div>
                        <h5 className="font-semibold text-green-900 mb-2">Encryption</h5>
                        <p className="text-xs text-green-800">Data encrypted in transit and at rest</p>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <Shield className="w-4 h-4 text-white" />
                        </div>
                        <h5 className="font-semibold text-blue-900 mb-2">Access Control</h5>
                        <p className="text-xs text-blue-800">Strict access controls and authentication</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                        <div className="w-8 h-8 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <Eye className="w-4 h-4 text-white" />
                        </div>
                        <h5 className="font-semibold text-purple-900 mb-2">Monitoring</h5>
                        <p className="text-xs text-purple-800">Continuous security monitoring</p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Your Rights */}
                <motion.section variants={fadeInUp} className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Rights</h2>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      You have certain rights regarding your personal information, including the right to access, update, or delete your data.
                    </p>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                      <h4 className="font-semibold text-orange-900 mb-4">Your rights include:</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-sm text-orange-800">
                          <li>• Access your personal data</li>
                          <li>• Correct inaccurate information</li>
                          <li>• Delete your account and data</li>
                        </ul>
                        <ul className="space-y-2 text-sm text-orange-800">
                          <li>• Data portability</li>
                          <li>• Opt-out of marketing communications</li>
                          <li>• Object to data processing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.section>
              </motion.div>
            )}

            {/* Cookie Policy Content */}
            {activeTab === 'cookies' && (
              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {/* What Are Cookies */}
                <motion.section variants={fadeInUp} className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What Are Cookies</h2>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and improving our services.
                    </p>
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Cookies help us:</h4>
                      <ul className="space-y-2 text-sm text-yellow-800">
                        <li className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>Remember your login status</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Save your preferences and settings</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>Analyze website usage and performance</li>
                        <li className="flex items-center"><span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>Provide personalized content</li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Types of Cookies */}
                <motion.section variants={fadeInUp} className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Types of Cookies We Use</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-4">Essential Cookies</h4>
                      <p className="text-sm text-green-800 mb-3">
                        Required for the website to function properly. Cannot be disabled.
                      </p>
                      <ul className="space-y-1 text-xs text-green-700">
                        <li>• Authentication cookies</li>
                        <li>• Security cookies</li>
                        <li>• Load balancing cookies</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-4">Performance Cookies</h4>
                      <p className="text-sm text-blue-800 mb-3">
                        Help us understand how visitors interact with our website.
                      </p>
                      <ul className="space-y-1 text-xs text-blue-700">
                        <li>• Analytics cookies</li>
                        <li>• Usage tracking</li>
                        <li>• Performance monitoring</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-4">Functionality Cookies</h4>
                      <p className="text-sm text-purple-800 mb-3">
                        Remember your preferences and provide enhanced features.
                      </p>
                      <ul className="space-y-1 text-xs text-purple-700">
                        <li>• Language preferences</li>
                        <li>• Theme settings</li>
                        <li>• Regional settings</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-6 border border-pink-200">
                      <h4 className="font-semibold text-pink-900 mb-4">Marketing Cookies</h4>
                      <p className="text-sm text-pink-800 mb-3">
                        Track your activity to provide relevant advertisements.
                      </p>
                      <ul className="space-y-1 text-xs text-pink-700">
                        <li>• Advertising cookies</li>
                        <li>• Social media cookies</li>
                        <li>• Tracking pixels</li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Managing Cookies */}
                <motion.section variants={fadeInUp} className="mb-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Managing Your Cookie Preferences</h2>
                  </div>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience.
                    </p>
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                      <h4 className="font-semibold text-indigo-900 mb-4">Cookie Management Options:</h4>
                      <div className="space-y-3 text-sm text-indigo-800">
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></span>
                          <div>
                            <strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings preferences.
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                          <div>
                            <strong>Cookie Consent Manager:</strong> Use our cookie preference center to customize your settings.
                          </div>
                        </div>
                        <div className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></span>
                          <div>
                            <strong>Third-Party Opt-out:</strong> Visit third-party websites to opt-out of their cookies directly.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Cookie Consent */}
                <motion.section variants={fadeInUp}>
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">Cookie Consent</h3>
                    <p className="text-gray-300 mb-4">
                      By continuing to use our website, you consent to our use of cookies as described in this policy. 
                      You can withdraw your consent at any time by adjusting your browser settings or using our cookie preference center.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg text-white font-medium text-sm hover:shadow-lg transition-all">
                        Manage Preferences
                      </button>
                      <button className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 font-medium text-sm hover:border-gray-400 transition-all">
                        Accept All
                      </button>
                    </div>
                  </div>
                </motion.section>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="mt-12 text-center bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-50 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Privacy Policy?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:privacy@yourcrm.com" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>privacy@yourcrm.com</span>
            </a>
            <a 
              href="tel:+1-555-123-4567" 
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;