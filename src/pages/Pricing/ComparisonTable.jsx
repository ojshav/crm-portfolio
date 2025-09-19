import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  DollarSign, 
  Check, 
  X,
  Users,
  Mail,
  BarChart3,
  Bot,
  Link,
  TrendingUp,
  Shield,
  Tag,
  MessageCircle,
  UserCheck,
  Sparkles
} from 'lucide-react';

const AnimatedCounter = ({ value, duration = 0.5 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startValue = displayValue;
    const endValue = value;
    const startTime = Date.now();

    const updateCounter = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(startValue + (endValue - startValue) * easeOutCubic);
      
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    updateCounter();
  }, [value, duration]);

  return <span>{displayValue}</span>;
};

const FeatureIcon = ({ included }) => {
  return (
    <div className="flex justify-center">
      <div 
        className="w-6 h-6 bg-gray-900 rounded-md relative flex items-center justify-center shadow-lg"
      >
        {included ? (
          <Check className="w-3 h-3 text-white" />
        ) : (
          <X className="w-3 h-3 text-white" />
        )}
      </div>
    </div>
  );
};

const ComparisonTable = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 49,
      yearlyPrice: 490,
      colorScheme: 'starter',
      isPopular: false
    },
    {
      name: 'Professional',
      monthlyPrice: 99,
      yearlyPrice: 990,
      colorScheme: 'professional',
      isPopular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: null,
      yearlyPrice: null,
      colorScheme: 'enterprise',
      isPopular: false,
      isCustom: true
    }
  ];

  const features = [
    {
      category: 'Core Features',
      items: [
        {
          name: 'Lead & Contact Management',
          icon: <Users className="w-4 h-4" />,
          starter: { included: true, value: 'Up to 2,000' },
          professional: { included: true, value: 'Unlimited' },
          enterprise: { included: true, value: 'Unlimited' }
        },
        {
          name: 'Email/SMS Notifications',
          icon: <Mail className="w-4 h-4" />,
          starter: { included: true, value: 'Basic' },
          professional: { included: true, value: 'Advanced' },
          enterprise: { included: true, value: 'Advanced + AI' }
        },
        {
          name: 'Sales Pipeline Tracking',
          icon: <BarChart3 className="w-4 h-4" />,
          starter: { included: false },
          professional: { included: true },
          enterprise: { included: true }
        },
        {
          name: 'Marketing Automation',
          icon: <Bot className="w-4 h-4" />,
          starter: { included: false },
          professional: { included: true },
          enterprise: { included: true, value: 'Advanced' }
        }
      ]
    },
    {
      category: 'Integration & Analytics',
      items: [
        {
          name: 'Integrations',
          icon: <Link className="w-4 h-4" />,
          starter: { included: true, value: '1 Integration' },
          professional: { included: true, value: 'Multiple' },
          enterprise: { included: true, value: 'Custom APIs' }
        },
        {
          name: 'Analytics & Reporting',
          icon: <TrendingUp className="w-4 h-4" />,
          starter: { included: true, value: 'Basic' },
          professional: { included: true, value: 'Standard' },
          enterprise: { included: true, value: 'Advanced (AI-driven)' }
        },
        {
          name: 'Team Collaboration',
          icon: <Users className="w-4 h-4" />,
          starter: { included: false },
          professional: { included: true },
          enterprise: { included: true }
        }
      ]
    },
    {
      category: 'Enterprise Features',
      items: [
        {
          name: 'Role-based Access',
          icon: <Shield className="w-4 h-4" />,
          starter: { included: false },
          professional: { included: false },
          enterprise: { included: true }
        },
        {
          name: 'White-label Branding',
          icon: <Tag className="w-4 h-4" />,
          starter: { included: false },
          professional: { included: false },
          enterprise: { included: true }
        },
        {
          name: 'Support',
          icon: <MessageCircle className="w-4 h-4" />,
          starter: { included: true, value: 'Standard' },
          professional: { included: true, value: 'Priority' },
          enterprise: { included: true, value: 'Premium 24/7' }
        },
        {
          name: 'Dedicated Account Manager',
          icon: <UserCheck className="w-4 h-4" />,
          starter: { included: false },
          professional: { included: false },
          enterprise: { included: true }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 px-6 relative overflow-hidden">
      {/* Background subtle patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(120,119,198,0.05),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(236,72,153,0.05),_transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Label with Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-100 to-purple-100 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span className="text-sm font-medium text-gray-700 uppercase tracking-wider">
              Comparison Table (Monthly & Yearly)
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Choose Your Perfect Plan
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Compare features across all plans and find the perfect fit for your business needs.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center bg-gray-100 rounded-lg p-1 mb-12"
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`relative px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {billingCycle === 'monthly' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-500 rounded-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Bill Monthly</span>
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                billingCycle === 'yearly'
                  ? 'text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {billingCycle === 'yearly' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-500 rounded-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Bill Annually</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/20"
        >
          {/* Table Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-b border-gray-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-6">
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold text-gray-900">Feature</h3>
              </div>
              {plans.map((plan, index) => (
                <div key={plan.name} className="text-center relative">
                  {plan.isPopular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                        POPULAR
                      </span>
                    </div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{plan.name}</h4>
                    {plan.isCustom ? (
                      <div className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                        Custom
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-900">$</span>
                        <span className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                          <AnimatedCounter 
                            value={billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice} 
                          />
                        </span>
                        <span className="text-gray-600 ml-1 text-sm">
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200/50">
            {features.map((category, categoryIndex) => (
              <div key={category.category}>
                {/* Category Header */}
                <div className="bg-gradient-to-r from-gray-25 to-gray-50/30 px-6 py-4">
                  <h5 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                    {category.category}
                  </h5>
                </div>
                
                {/* Category Items */}
                {category.items.map((feature, featureIndex) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.6 + categoryIndex * 0.1 + featureIndex * 0.05 
                    }}
                    className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-6 hover:bg-gray-50/50 transition-all duration-200"
                  >
                    <div className="lg:col-span-1 flex items-center gap-3 bg-gray-50/50 -mx-3 px-3 py-2 rounded-lg">
                      <span className="text-gray-600">{feature.icon}</span>
                      <span className="font-medium text-gray-900">{feature.name}</span>
                    </div>
                    
                    {/* Starter */}
                    <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-2">
                      {feature.starter.value ? (
                        <span className="text-sm text-gray-700 font-medium text-center lg:text-left">
                          {feature.starter.value}
                        </span>
                      ) : (
                        <FeatureIcon included={feature.starter.included} />
                      )}
                    </div>
                    
                    {/* Professional */}
                    <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-2 bg-gradient-to-r from-sky-50/30 via-purple-50/30 to-pink-50/30 -mx-3 px-3 py-2 rounded-lg">
                      {feature.professional.value ? (
                        <span className="text-sm text-gray-700 font-medium text-center lg:text-left">
                          {feature.professional.value}
                        </span>
                      ) : (
                        <FeatureIcon included={feature.professional.included} />
                      )}
                    </div>
                    
                    {/* Enterprise */}
                    <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-2">
                      {feature.enterprise.value ? (
                        <span className="text-sm text-gray-700 font-medium text-center lg:text-left">
                          {feature.enterprise.value}
                        </span>
                      ) : (
                        <FeatureIcon included={feature.enterprise.included} />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Table Footer with CTAs */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 border-t border-gray-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-6">
              <div className="lg:col-span-1"></div>
              {plans.map((plan, index) => (
                <div key={plan.name} className="text-center">
                  <motion.button
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
  className="w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 
             bg-black hover:bg-gray-900 shadow-lg hover:shadow-gray-500/25"
>
  {plan.isCustom ? 'Contact Sales' : 'Get Started'}
</motion.button>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600">
            All plans include a 14-day free trial • No setup fees • Cancel anytime
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComparisonTable;