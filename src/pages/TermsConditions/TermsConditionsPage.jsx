import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Scale, 
  Users, 
  CreditCard, 
  AlertTriangle, 
  Shield, 
  Globe, 
  Mail, 
  Phone,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

const TermsConditionsPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
              <Scale className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using our CRM services. By accessing our platform, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: December 2024
          </p>
        </motion.div>

        {/* Quick Overview */}
        <motion.div 
          className="mb-8 bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-50 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
            Quick Overview
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="text-center p-3 bg-green-50 rounded-xl border border-green-200">
              <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="font-semibold text-green-900">User Responsibilities</p>
              <p className="text-green-700">Use services lawfully and responsibly</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-200">
              <CreditCard className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="font-semibold text-blue-900">Payment Terms</p>
              <p className="text-blue-700">Clear billing and subscription policies</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-xl border border-purple-200">
              <Shield className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="font-semibold text-purple-900">Service Limits</p>
              <p className="text-purple-700">Fair use and availability terms</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Container */}
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
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Acceptance of Terms */}
              <motion.section variants={fadeInUp} className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    By accessing and using our CRM platform, you accept and agree to be bound by the terms and provision of this agreement. 
                    If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3">Agreement includes:</h4>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>These Terms and Conditions</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Our Privacy Policy</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Any additional terms for specific features</li>
                      <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Service Level Agreements (SLAs)</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Service Description */}
              <motion.section variants={fadeInUp} className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Service Description</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our CRM platform provides customer relationship management tools, including lead management, sales tracking, 
                    email automation, and analytics to help businesses manage their customer relationships effectively.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        Included Services
                      </h4>
                      <ul className="space-y-2 text-sm text-green-800">
                        <li>• Lead and contact management</li>
                        <li>• Sales pipeline tracking</li>
                        <li>• Email marketing automation</li>
                        <li>• Reporting and analytics</li>
                        <li>• Customer support tools</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                      <h4 className="font-semibold text-orange-900 mb-3 flex items-center">
                        <XCircle className="w-5 h-5 text-orange-600 mr-2" />
                        Service Limitations
                      </h4>
                      <ul className="space-y-2 text-sm text-orange-800">
                        <li>• Subject to fair use policies</li>
                        <li>• Storage limits per plan</li>
                        <li>• API rate limits apply</li>
                        <li>• Email sending limits</li>
                        <li>• Geographic restrictions may apply</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* User Accounts and Responsibilities */}
              <motion.section variants={fadeInUp} className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">User Accounts and Responsibilities</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
                  </p>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                    <h4 className="font-semibold text-indigo-900 mb-4">Account Requirements:</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-indigo-800 mb-2">You must:</h5>
                        <ul className="space-y-1 text-sm text-indigo-700">
                          <li>• Provide accurate information</li>
                          <li>• Keep account credentials secure</li>
                          <li>• Use services lawfully</li>
                          <li>• Respect other users</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-indigo-800 mb-2">You must not:</h5>
                        <ul className="space-y-1 text-sm text-indigo-700">
                          <li>• Share account credentials</li>
                          <li>• Use services for illegal activities</li>
                          <li>• Attempt to breach security</li>
                          <li>• Send spam or malicious content</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Payment and Billing */}
              <motion.section variants={fadeInUp} className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Payment and Billing</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Payment terms vary depending on your subscription plan. All prices are in USD unless otherwise specified.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200 text-center">
                      <div className="w-10 h-10 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <h5 className="font-semibold text-green-900 mb-2">Free Plan</h5>
                      <p className="text-xs text-green-800">No payment required</p>
                      <p className="text-xs text-green-700 mt-1">Basic features included</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200 text-center">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <h5 className="font-semibold text-blue-900 mb-2">Monthly Plans</h5>
                      <p className="text-xs text-blue-800">Billed monthly</p>
                      <p className="text-xs text-blue-700 mt-1">Cancel anytime</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200 text-center">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-white" />
                      </div>
                      <h5 className="font-semibold text-purple-900 mb-2">Annual Plans</h5>
                      <p className="text-xs text-purple-800">Billed annually</p>
                      <p className="text-xs text-purple-700 mt-1">Save up to 20%</p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                    <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                      Important Billing Information
                    </h4>
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li>• Automatic renewal unless cancelled</li>
                      <li>• Refunds available within 30 days</li>
                      <li>• Price changes with 30 days notice</li>
                      <li>• Failed payments may result in service suspension</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Intellectual Property */}
              <motion.section variants={fadeInUp} className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Intellectual Property</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The service and its original content, features, and functionality are and will remain the exclusive property of our company and its licensors.
                  </p>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                    <h4 className="font-semibold text-orange-900 mb-4">Ownership Rights:</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-orange-800 mb-2">Our Property:</h5>
                        <ul className="space-y-1 text-sm text-orange-700">
                          <li>• Platform software and code</li>
                          <li>• Trademarks and branding</li>
                          <li>• Documentation and guides</li>
                          <li>• Analytics and insights</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-orange-800 mb-2">Your Property:</h5>
                        <ul className="space-y-1 text-sm text-orange-700">
                          <li>• Your customer data</li>
                          <li>• Content you create</li>
                          <li>• Your business information</li>
                          <li>• Custom configurations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Termination */}
              <motion.section variants={fadeInUp} className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <XCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Termination</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
                    including without limitation if you breach the Terms.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                      <h4 className="font-semibold text-red-900 mb-3">Account Termination</h4>
                      <ul className="space-y-2 text-sm text-red-800">
                        <li>• You can cancel anytime</li>
                        <li>• We may suspend for violations</li>
                        <li>• Data export available for 30 days</li>
                        <li>• Refunds per cancellation policy</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3">Effect of Termination</h4>
                      <ul className="space-y-2 text-sm text-gray-800">
                        <li>• Immediate service cessation</li>
                        <li>• Data retention per policy</li>
                        <li>• Outstanding fees remain due</li>
                        <li>• Survival of certain clauses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Limitation of Liability */}
              <motion.section variants={fadeInUp} className="mb-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    In no event shall our company, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any 
                    indirect, incidental, special, consequential, or punitive damages.
                  </p>
                  <div className="bg-gray-100 rounded-xl p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Service Disclaimers:</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Services provided "as is" without warranties</li>
                      <li>• No guarantee of uninterrupted service</li>
                      <li>• User responsible for data backups</li>
                      <li>• Third-party integrations not under our control</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Governing Law */}
              <motion.section variants={fadeInUp}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Governing Law</h2>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    These Terms shall be interpreted and governed by the laws of the State of California, United States, 
                    without regard to its conflict of law provisions.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3">Legal Framework:</h4>
                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-blue-800">
                      <div>
                        <h5 className="font-medium mb-2">Dispute Resolution:</h5>
                        <ul className="space-y-1">
                          <li>• Binding arbitration preferred</li>
                          <li>• California state court jurisdiction</li>
                          <li>• Class action waiver applies</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Changes to Terms:</h5>
                        <ul className="space-y-1">
                          <li>• 30-day notice for material changes</li>
                          <li>• Continued use implies acceptance</li>
                          <li>• Historical versions available</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="mt-12 text-center bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-50 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you have any questions about these Terms and Conditions, please contact our legal team.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:legal@yourcrm.com" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>legal@yourcrm.com</span>
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

export default TermsConditionsPage;