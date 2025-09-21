// import React, { useState, useEffect } from 'react';
// import { MessageCircle, Headphones, Clock, Users, Zap, Shield, Search, BookOpen } from 'lucide-react';

// const HelpDeskFeatures = () => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const features = [
//     {
//       icon: <MessageCircle className="w-8 h-8" />,
//       title: "24/7 Live Chat Support",
//       description: "Connect with our expert support team instantly through live chat. Get real-time assistance for any technical issues, account problems, or general inquiries.",
//       gradient: "from-pink-100 to-cyan-100",
//       accentColor: "text-pink-600",
//       borderColor: "border-pink-200"
//     },
//     {
//       icon: <Headphones className="w-8 h-8" />,
//       title: "Voice & Video Support",
//       description: "Schedule voice or video calls with our technical specialists. Perfect for complex issues that require screen sharing and detailed troubleshooting.",
//       gradient: "from-blue-100 to-gray-100",
//       accentColor: "text-blue-600",
//       borderColor: "border-blue-200"
//     },
//     {
//       icon: <Clock className="w-8 h-8" />,
//       title: "Instant Ticket Resolution",
//       description: "Submit support tickets and track their progress in real-time. Our AI-powered system prioritizes urgent issues and provides automated solutions.",
//       gradient: "from-cyan-100 to-pink-100",
//       accentColor: "text-cyan-600",
//       borderColor: "border-cyan-200"
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Team Collaboration Tools",
//       description: "Enable your team to collaborate on support issues with shared workspaces, internal notes, and seamless handoff between agents.",
//       gradient: "from-gray-100 to-blue-100",
//       accentColor: "text-gray-600",
//       borderColor: "border-gray-200"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-cyan-50 to-blue-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
//         {/* Hero Section */}
//         <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-200 to-cyan-200 text-gray-700 text-sm font-medium mb-6">
//             <Zap className="w-4 h-4 mr-2" />
//             Powered by AI & Human Expertise
//           </div>
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight mb-6">
//             Transform Your Support Experience
//           </h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Deliver exceptional customer support with our comprehensive help desk solution.
//             Streamline tickets, enable real-time communication, and delight your customers with lightning-fast resolutions.
//           </p>
//         </div>

//         {/* Main Feature Card */}
//         <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-16 mb-12 shadow-xl border border-pink-100 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="flex items-center space-x-3">
//                 <div className="p-3 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white">
//                   <Shield className="w-8 h-8" />
//                 </div>
//                 <span className="text-pink-600 font-semibold text-lg">Enterprise-Grade Security</span>
//               </div>
//               <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
//                 Secure, Scalable Help Desk Solution
//               </h2>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 Built with enterprise-grade security and compliance in mind. Our platform ensures your customer data
//                 remains protected while providing seamless support experiences across all channels and devices.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <div className="flex items-center space-x-2 text-gray-600">
//                   <div className="w-2 h-2 rounded-full bg-pink-500"></div>
//                   <span>SOC 2 Compliant</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-gray-600">
//                   <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
//                   <span>GDPR Ready</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-gray-600">
//                   <div className="w-2 h-2 rounded-full bg-blue-500"></div>
//                   <span>99.9% Uptime</span>
//                 </div>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-3xl transform rotate-3 opacity-20"></div>
//               <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
//                     <div className="text-gray-600 text-sm">Customer Satisfaction</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-cyan-600 mb-2">2.5m</div>
//                     <div className="text-gray-600 text-sm">Tickets Resolved</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-blue-600 mb-2">15s</div>
//                     <div className="text-gray-600 text-sm">Avg Response Time</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-gray-600 mb-2">24/7</div>
//                     <div className="text-gray-600 text-sm">Support Available</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Feature Cards Grid */}
//         <div className="grid md:grid-cols-2 gap-8 mb-12">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className={`group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border ${feature.borderColor} cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
//               style={{ transitionDelay: `${400 + index * 100}ms` }}
//               onMouseEnter={() => setActiveCard(index)}
//               onMouseLeave={() => setActiveCard(null)}
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-50 rounded-3xl transition-opacity duration-300`}></div>
//               <div className="relative z-10">
//                 <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 transform transition-transform duration-300 group-hover:scale-110`}>
//                   <div className={feature.accentColor}>
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
//                   {feature.description}
//                 </p>
//                 <div className={`mt-6 flex items-center ${feature.accentColor} font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2`}>
//                   Learn More
//                   <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Knowledge Base Section */}
//         <div className={`bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 lg:p-16 text-white transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-6">
//               <div className="flex items-center space-x-3">
//                 <BookOpen className="w-8 h-8" />
//                 <span className="text-cyan-200 font-semibold">Knowledge Base</span>
//               </div>
//               <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
//                 Self-Service Support Hub
//               </h2>
//               <p className="text-cyan-100 text-lg leading-relaxed">
//                 Empower your customers with a comprehensive knowledge base featuring articles, tutorials,
//                 FAQs, and video guides. Reduce support tickets while improving customer satisfaction.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <button className="px-6 py-3 bg-white text-blue-600 rounded-2xl font-semibold hover:bg-cyan-50 transition-colors transform hover:scale-105">
//                   Browse Articles
//                 </button>
//                 <button className="px-6 py-3 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
//                   Watch Tutorials
//                 </button>
//               </div>
//             </div>
//             <div className="relative">
//               <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
//                 <div className="flex items-center space-x-4 mb-6">
//                   <Search className="w-6 h-6 text-cyan-200" />
//                   <div className="flex-1 h-12 bg-white/20 rounded-2xl flex items-center px-4">
//                     <span className="text-cyan-200">Search our knowledge base...</span>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl">
//                     <div className="w-2 h-2 rounded-full bg-pink-400"></div>
//                     <span className="text-sm">Getting Started Guide</span>
//                   </div>
//                   <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl">
//                     <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
//                     <span className="text-sm">Account Management</span>
//                   </div>
//                   <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl">
//                     <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
//                     <span className="text-sm">Troubleshooting Tips</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className={`text-center mt-16 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//           <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-pink-100">
//             <h3 className="text-3xl font-bold text-gray-800 mb-4">
//               Ready to Transform Your Support?
//             </h3>
//             <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
//               Join thousands of companies delivering exceptional customer support with our help desk solution.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
//                 Start Free Trial
//               </button>
//               <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-pink-300 hover:text-pink-600 transition-all transform hover:scale-105">
//                 Schedule Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HelpDeskFeatures;

import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Headphones,
  Clock,
  Users,
  Zap,
  Shield,
  Search,
  BookOpen,
  Star,
  Trophy,
  TrendingUp,
  BarChart3,
  Play,
  CheckCircle,
  ArrowRight,
  Globe,
  Smartphone,
  Monitor,
} from "lucide-react";

const HelpDeskFeatures = () => {


    
  const [activeCard, setActiveCard] = useState(null);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [animatedNumbers, setAnimatedNumbers] = useState({
    satisfaction: 0,
    tickets: 0,
    responseTime: 0,
    uptime: 0,
  });

  const sectionRefs = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.1, rootMargin: "-50px" }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (visibleSections.has(0)) {
      const targets = {
        satisfaction: 98,
        tickets: 2500000,
        responseTime: 15,
        uptime: 99.9,
      };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      Object.keys(targets).forEach((key) => {
        let current = 0;
        const target = targets[key];
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }

          setAnimatedNumbers((prev) => ({
            ...prev,
            [key]:
              key === "tickets"
                ? Math.floor(current)
                : key === "uptime"
                ? current.toFixed(1)
                : Math.floor(current),
          }));
        }, stepTime);
      });
    }
  }, [visibleSections]);

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "24/7 Live Chat Support",
      description:
        "Connect with our expert support team instantly through live chat. Get real-time assistance for any technical issues, account problems, or general inquiries.",
      gradient: "from-pink-100 to-cyan-100",
      accentColor: "text-pink-600",
      borderColor: "border-pink-200",
       images: [
      "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBkYXNoYm9hcmQlMjBhbmQlMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D",
      "/images/chat2.jpg",
      "/images/chat3.jpg"
    ]
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Voice & Video Support",
      description:
        "Schedule voice or video calls with our technical specialists. Perfect for complex issues that require screen sharing and detailed troubleshooting.",
      gradient: "from-blue-100 to-gray-100",
      accentColor: "text-blue-600",
      borderColor: "border-blue-200",
        images: [
      "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBkYXNoYm9hcmQlMjBhbmQlMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D",
      "/images/chat2.jpg",
      "/images/chat3.jpg"
    ]},
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Ticket Resolution",
      description:
        "Submit support tickets and track their progress in real-time. Our AI-powered system prioritizes urgent issues and provides automated solutions.",
      gradient: "from-cyan-100 to-pink-100",
      accentColor: "text-cyan-600",
      borderColor: "border-cyan-200",
       images: [
      "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBkYXNoYm9hcmQlMjBhbmQlMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D",
      "/images/chat2.jpg",
      "/images/chat3.jpg"
    ] },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration Tools",
      description:
        "Enable your team to collaborate on support issues with shared workspaces, internal notes, and seamless handoff between agents.",
      gradient: "from-gray-100 to-blue-100",
      accentColor: "text-gray-600",
      borderColor: "border-gray-200",
       images: [
      "https://images.unsplash.com/photo-1686061592689-312bbfb5c055?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBkYXNoYm9hcmQlMjBhbmQlMjBhbmFseXRpY3N8ZW58MHx8MHx8fDA%3D",
      "/images/chat2.jpg",
      "/images/chat3.jpg"
    ] },
  ];
const [currentIndexes, setCurrentIndexes] = useState(
  Array(features.length).fill(0)
);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndexes(prev =>
      prev.map((idx, i) =>
        (idx + 1) % features[i].images.length
      )
    );
  }, 2000); // change every 2s
  return () => clearInterval(interval);
}, []);

  const integrations = [
    { name: "Slack", icon: "💬", color: "bg-purple-100 text-purple-600" },
    { name: "Teams", icon: "👥", color: "bg-blue-100 text-blue-600" },
    { name: "Jira", icon: "🎯", color: "bg-cyan-100 text-cyan-600" },
    { name: "Salesforce", icon: "☁️", color: "bg-pink-100 text-pink-600" },
    { name: "Zendesk", icon: "🎧", color: "bg-green-100 text-green-600" },
    { name: "Hubspot", icon: "🚀", color: "bg-orange-100 text-orange-600" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Support Manager",
      company: "TechCorp",
      rating: 5,
      text: "This help desk solution transformed our customer support experience completely.",
      avatar: "👩‍💼",
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "Innovation Labs",
      rating: 5,
      text: "The AI-powered ticketing system reduced our response times by 70%.",
      avatar: "👨‍💻",
    },
    {
      name: "Emma Davis",
      role: "Customer Success",
      company: "StartupXYZ",
      rating: 5,
      text: "Our customer satisfaction scores have never been higher!",
      avatar: "👩‍🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-cyan-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            visibleSections.has(0)
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-200 to-cyan-200 text-gray-700 text-sm font-medium mb-6 animate-pulse">
            <Zap className="w-4 h-4 mr-2 animate-bounce" />
            Powered by AI & Human Expertise
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent leading-tight mb-6">
            Transform Your Support Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Deliver exceptional customer support with our comprehensive help
            desk solution. Streamline tickets, enable real-time communication,
            and delight your customers with lightning-fast resolutions.
          </p>
        </div>

        {/* Main Feature Card with Animated Stats */}
        <div
          ref={(el) => (sectionRefs.current[1] = el)}
          className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-16 mb-12 shadow-xl border border-pink-100 transform transition-all duration-1000 delay-200 ${
            visibleSections.has(1)
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-20 opacity-0 scale-95"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-pink-500 to-cyan-500 text-white animate-pulse">
                  <Shield className="w-8 h-8" />
                </div>
                <span className="text-pink-600 font-semibold text-lg">
                  Enterprise-Grade Security
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Secure, Scalable Help Desk Solution
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Built with enterprise-grade security and compliance in mind. Our
                platform ensures your customer data remains protected while
                providing seamless support experiences across all channels and
                devices.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-pink-500 animate-ping"></div>
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-ping"></div>
                  <span>GDPR Ready</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                  <span>99.9% Uptime</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-3xl transform rotate-3 opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-pink-600 mb-2 tabular-nums">
                      {animatedNumbers.satisfaction}%
                    </div>
                    <div className="text-gray-600 text-sm">
                      Customer Satisfaction
                    </div>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-cyan-600 mb-2 tabular-nums">
                      {(animatedNumbers.tickets / 1000000).toFixed(1)}M
                    </div>
                    <div className="text-gray-600 text-sm">
                      Tickets Resolved
                    </div>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-blue-600 mb-2 tabular-nums">
                      {animatedNumbers.responseTime}s
                    </div>
                    <div className="text-gray-600 text-sm">
                      Avg Response Time
                    </div>
                  </div>
                  <div className="text-center transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-gray-600 mb-2 tabular-nums">
                      {animatedNumbers.uptime}%
                    </div>
                    <div className="text-gray-600 text-sm">System Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid with Videos */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[2 + index] = el)}
              className={`group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border ${
                feature.borderColor
              } cursor-pointer transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                visibleSections.has(2 + index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-50 rounded-3xl transition-all duration-500`}
              ></div>
              <div className="relative z-10">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <div className={feature.accentColor}>{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors mb-6">
                  {feature.description}
                </p>

                {/* Video Preview */}
                {/* <div className="relative  overflow-hidden mb-4 group-hover:shadow-lg transition-shadow h-68">
                  {feature.images.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={img}
                      alt={feature.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
        ${currentIndexes[index] === imgIdx ? "opacity-100" : "opacity-0"}`}
                    />
                  ))}
                </div> */}

                <div
                  className={`flex items-center ${feature.accentColor} font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Section */}
        <div
          ref={(el) => (sectionRefs.current[6] = el)}
          className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-16 shadow-xl border border-gray-100 transform transition-all duration-1000 ${
            visibleSections.has(6)
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Connect with your favorite tools and platforms for a unified
              support experience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className={`${integration.color} rounded-2xl p-6 text-center transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-lg`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="text-3xl mb-3 animate-bounce"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {integration.icon}
                </div>
                <div className="font-semibold text-sm">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Channel Support Section */}
        <div
          ref={(el) => (sectionRefs.current[7] = el)}
          className={`grid lg:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 ${
            visibleSections.has(7)
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          {[
            {
              icon: <Globe className="w-12 h-12" />,
              title: "Web Support",
              description:
                "Browser-based support with screen sharing capabilities",
              color: "from-pink-500 to-rose-500",
              bgColor: "bg-pink-50",
            },
            {
              icon: <Smartphone className="w-12 h-12" />,
              title: "Mobile Support",
              description: "Native mobile apps for iOS and Android support",
              color: "from-cyan-500 to-blue-500",
              bgColor: "bg-cyan-50",
            },
            {
              icon: <Monitor className="w-12 h-12" />,
              title: "Desktop Support",
              description: "Desktop applications with advanced features",
              color: "from-blue-500 to-indigo-500",
              bgColor: "bg-blue-50",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-3xl p-8 transform transition-all duration-700 hover:scale-105 hover:shadow-xl`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.color} text-white mb-6 transform transition-transform hover:scale-110 hover:rotate-6`}
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>


        {/* Knowledge Base Section */}
        <div
          ref={(el) => (sectionRefs.current[9] = el)}
          className={`bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 lg:p-16 text-white mb-16 transform transition-all duration-1000 ${
            visibleSections.has(9)
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-20 opacity-0 scale-95"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-8 h-8 animate-pulse" />
                <span className="text-cyan-200 font-semibold">
                  Knowledge Base
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Self-Service Support Hub
              </h2>
              <p className="text-cyan-100 text-lg leading-relaxed">
                Empower your customers with a comprehensive knowledge base
                featuring articles, tutorials, FAQs, and video guides. Reduce
                support tickets while improving customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-2xl font-semibold hover:bg-cyan-50 transition-all transform hover:scale-105 hover:shadow-lg">
                  Browse Articles
                </button>
                <button className="px-6 py-3 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                  Watch Tutorials
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 transform hover:scale-105 transition-transform">
                <div className="flex items-center space-x-4 mb-6">
                  <Search className="w-6 h-6 text-cyan-200 animate-pulse" />
                  <div className="flex-1 h-12 bg-white/20 rounded-2xl flex items-center px-4 hover:bg-white/30 transition-colors">
                    <span className="text-cyan-200">
                      Search our knowledge base...
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { title: "Getting Started Guide", color: "bg-pink-400" },
                    { title: "Account Management", color: "bg-cyan-400" },
                    { title: "Troubleshooting Tips", color: "bg-yellow-400" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors transform hover:translate-x-2"
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${item.color} animate-ping`}
                      ></div>
                      <span className="text-sm">{item.title}</span>
                      <CheckCircle className="w-4 h-4 ml-auto opacity-50" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Dashboard Section */}
        <div
          ref={(el) => (sectionRefs.current[10] = el)}
          className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-16 shadow-xl border border-gray-100 transform transition-all duration-1000 ${
            visibleSections.has(10)
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BarChart3 className="w-8 h-8 text-purple-600 animate-pulse" />
              <span className="text-purple-600 font-semibold text-lg">
                Analytics & Insights
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Data-Driven Support Decisions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get deep insights into your support performance with comprehensive
              analytics and reporting
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Resolution Rate",
                value: "94%",
                icon: <Trophy className="w-6 h-6" />,
                color: "text-green-600 bg-green-100",
              },
              {
                label: "First Contact Resolution",
                value: "87%",
                icon: <CheckCircle className="w-6 h-6" />,
                color: "text-blue-600 bg-blue-100",
              },
              {
                label: "Customer Effort Score",
                value: "4.8",
                icon: <Star className="w-6 h-6" />,
                color: "text-yellow-600 bg-yellow-100",
              },
              {
                label: "Growth Rate",
                value: "+23%",
                icon: <TrendingUp className="w-6 h-6" />,
                color: "text-purple-600 bg-purple-100",
              },
            ].map((metric, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-2xl p-6 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-lg`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`inline-flex p-3 rounded-xl ${
                    metric.color.split(" ")[1]
                  } mb-4 transform transition-transform hover:scale-110 hover:rotate-12`}
                >
                  <div className={metric.color.split(" ")[0]}>
                    {metric.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-gray-600 text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          ref={(el) => (sectionRefs.current[11] = el)}
          className={`text-center transform transition-all duration-1000 ${
            visibleSections.has(11)
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-pink-100 hover:shadow-2xl transition-shadow">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Support?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of companies delivering exceptional customer
              support with our help desk solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 text-white rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 hover:-translate-y-1">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-pink-300 hover:text-pink-600 transition-all transform hover:scale-105 hover:-translate-y-1">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDeskFeatures;
