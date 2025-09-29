import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    id: 1,
    question: "What makes your e-commerce CRM different from others?",
    answer: "Our CRM is specifically designed for e-commerce businesses with features like real-time inventory tracking, automated customer follow-ups, and AI-powered sales analytics. We combine everything you need in one intuitive platform, eliminating the need for multiple tools."
  },
  {
    id: 2,
    question: "How long does it take to set up the platform?",
    answer: "Most businesses are up and running within 24-48 hours. Our team provides complete onboarding support, data migration assistance, and training sessions to ensure a smooth transition. You can start seeing results from day one."
  },
  {
    id: 3,
    question: "Can I integrate with my existing tools?",
    answer: "Absolutely! We offer seamless integrations with popular platforms like Shopify, WooCommerce, payment gateways, shipping providers, and email marketing tools. Our API allows custom integrations for any specific needs."
  },
  {
    id: 4,
    question: "What kind of support do you provide?",
    answer: "We provide 24/7 customer support via live chat, email, and phone. Every plan includes dedicated account management, regular check-ins, training resources, and a comprehensive knowledge base. Premium plans get priority support with response times under 1 hour."
  },
  {
    id: 5,
    question: "Is my data secure and backed up?",
    answer: "Yes, security is our top priority. We use bank-level encryption (256-bit SSL), conduct regular security audits, and comply with GDPR and PCI DSS standards. Your data is automatically backed up daily with 99.9% uptime guaranteed."
  },
  {
    id: 6,
    question: "What are your pricing plans?",
    answer: "We offer flexible pricing based on your business size and needs, starting from $49/month. All plans include core CRM features, with advanced analytics and automation available in higher tiers. We also offer custom enterprise solutions. Contact us for a personalized quote."
  }
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Number Badge */}
      <div className="absolute -left-4 top-8 md:-left-8">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg scale-110' 
            : 'bg-white text-gray-400 border-2 border-gray-200'
        }`}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      {/* FAQ Card */}
      <div className={`ml-8 md:ml-12 bg-white rounded-2xl transition-all duration-300 ${
        isOpen ? 'shadow-2xl' : 'shadow-md hover:shadow-lg'
      }`}>
        <button
          onClick={onToggle}
          className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4"
        >
          <h3 className={`text-lg md:text-xl font-bold leading-tight transition-colors duration-300 ${
            isOpen 
              ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent' 
              : 'text-gray-900'
          }`}>
            {faq.question}
          </h3>
          
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
              isOpen
                ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <div className="pt-4 border-t-2 border-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-8">
      <div className="container mx-auto max-w-4xl">
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
              ❓ Frequently Asked Questions
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Got Questions?{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our e-commerce CRM platform.
          </p>
        </motion.div>

        {/* FAQ Items with Numbers */}
        <div className="space-y-6 mb-16">
          {faqData.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              index={index}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;