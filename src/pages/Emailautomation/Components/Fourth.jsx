"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Users, Zap, Target, BarChart3 } from "lucide-react";

const EmailAutomationDiagram = ({
  className = "",
  features: customFeatures,
  centerBadgeText = "AI",
  centerBadgeSubtext = "Powered by",
  titleText = "Intelligent Email Automation System",
  infoBadges,
}) => {
  const defaultFeatures = [
    { label: "Automated Campaigns", icon: Mail },
    { label: "Segmentation", icon: Users },
    { label: "Behavioral Triggers", icon: Zap },
    { label: "Personalization", icon: Target },
    { label: "Analytics", icon: BarChart3 }
  ];

  const features = customFeatures || defaultFeatures;

  const defaultInfoBadges = {
    left: { icon: Zap, text: "Real-time Processing" },
    right: { icon: BarChart3, text: "Advanced Analytics" }
  };

  const badges = infoBadges || defaultInfoBadges;

  return (
    <div className={`relative flex h-[400px] w-full max-w-[600px] flex-col items-center mx-auto ${className}`}>
      {/* SVG Paths */}
      <svg
        className="h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 220 110"
        style={{ filter: "drop-shadow(0 0 8px rgba(147, 51, 234, 0.15))" }}
      >
        <g
          stroke="url(#path-gradient)"
          fill="none"
          strokeWidth="0.5"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 35 12 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path d="M 79 12 v 10 q 0 5 5 5 h 16 q 5 0 5 5 v 10" />
          <path d="M 123 12 v 10 q 0 5 5 5 h 17 q 5 0 5 5 v 10" />
          <path d="M 167 12 v 10 q 0 5 -5 5 h -17 q -5 0 -5 5 v 10" />
          <path d="M 211 12 v 15 q 0 5 -5 5 h -65 q -5 0 -5 5 v 10" />
          
          {/* Animation For Path Starting */}
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="1.5s"
            fill="freeze"
            calcMode="spline"
            keySplines="0.25,0.1,0.5,1"
            keyTimes="0; 1"
          />
        </g>

        {/* Animated Light Particles */}
        <g mask="url(#mask-1)">
          <circle className="email-light email-light-1" cx="0" cy="0" r="10" fill="url(#glow-gradient)" />
        </g>
        <g mask="url(#mask-2)">
          <circle className="email-light email-light-2" cx="0" cy="0" r="10" fill="url(#glow-gradient)" />
        </g>
        <g mask="url(#mask-3)">
          <circle className="email-light email-light-3" cx="0" cy="0" r="10" fill="url(#glow-gradient)" />
        </g>
        <g mask="url(#mask-4)">
          <circle className="email-light email-light-4" cx="0" cy="0" r="10" fill="url(#glow-gradient)" />
        </g>
        <g mask="url(#mask-5)">
          <circle className="email-light email-light-5" cx="0" cy="0" r="10" fill="url(#glow-gradient)" />
        </g>

        {/* Feature Badges */}
        {features.map((feature, index) => {
          const positions = [
            { x: 18, width: 34 },
            { x: 62, width: 34 },
            { x: 106, width: 34 },
            { x: 150, width: 34 },
            { x: 185, width: 42 }
          ];
          
          return (
            <g key={index} className="feature-badge">
              <rect
                fill="url(#badge-gradient)"
                x={positions[index].x}
                y="7"
                width={positions[index].width}
                height="10"
                rx="5"
                stroke="url(#badge-border)"
                strokeWidth="0.3"
              />
              <FeatureIcon 
                icon={feature.icon} 
                x={positions[index].x + 2} 
                y="9.5" 
              />
              <text
                x={positions[index].x + 9}
                y="13.5"
                fill="white"
                stroke="none"
                fontSize="4.5"
                fontWeight="600"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                {feature.label.split(' ')[0]}
              </text>
            </g>
          );
        })}

        <defs>
          {/* Masks for light paths */}
          <mask id="mask-1">
            <path d="M 35 12 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" strokeWidth="0.6" stroke="white" />
          </mask>
          <mask id="mask-2">
            <path d="M 79 12 v 10 q 0 5 5 5 h 16 q 5 0 5 5 v 10" strokeWidth="0.6" stroke="white" />
          </mask>
          <mask id="mask-3">
            <path d="M 123 12 v 10 q 0 5 5 5 h 17 q 5 0 5 5 v 10" strokeWidth="0.6" stroke="white" />
          </mask>
          <mask id="mask-4">
            <path d="M 167 12 v 10 q 0 5 -5 5 h -17 q -5 0 -5 5 v 10" strokeWidth="0.6" stroke="white" />
          </mask>
          <mask id="mask-5">
            <path d="M 211 12 v 15 q 0 5 -5 5 h -65 q -5 0 -5 5 v 10" strokeWidth="0.6" stroke="white" />
          </mask>

          {/* Gradients */}
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <radialGradient id="glow-gradient" fx="0.5" fy="0.5">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="badge-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          <linearGradient id="badge-border" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Content Box */}
      <div className="absolute bottom-12 flex w-full flex-col items-center px-4">
        {/* Bottom Shadow */}
        <div className="absolute -bottom-6 h-[120px] w-[70%] rounded-2xl bg-gradient-to-r from-purple-200/30 via-pink-200/30 to-blue-200/30 blur-2xl" />
        
        {/* Title Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -top-4 z-20 flex items-center justify-center rounded-full px-5 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-xl"
        >
          <Mail className="size-4 text-white mr-2" />
          <span className="text-white text-sm font-semibold">
            {titleText}
          </span>
        </motion.div>

        {/* Center Circle Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
          className="absolute -bottom-10 z-30 grid h-[70px] w-[70px] place-items-center rounded-full border-2 bg-gradient-to-br from-gray-900 to-gray-800 font-bold text-sm shadow-2xl"
          style={{
            borderImage: "linear-gradient(135deg, #3b82f6, #a855f7, #ec4899) 1"
          }}
        >
          <div className="text-center">
            <div className="text-xs text-gray-400 font-normal">{centerBadgeSubtext}</div>
            <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {centerBadgeText}
            </div>
          </div>
        </motion.div>

        {/* Main Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 flex h-[180px] w-full items-center justify-center overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 shadow-2xl"
        >
          {/* Info Badges */}
          {badges.left && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute bottom-10 left-8 z-10 h-9 rounded-full bg-white/80 backdrop-blur-sm px-4 text-sm border-2 border-purple-200 flex items-center gap-2 shadow-lg"
            >
              <badges.left.icon className="size-4 text-purple-600" />
              <span className="font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {badges.left.text}
              </span>
            </motion.div>
          )}

          {badges.right && (
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute right-8 top-10 z-10 hidden sm:flex h-9 rounded-full bg-white/80 backdrop-blur-sm px-4 text-sm border-2 border-pink-200 items-center gap-2 shadow-lg"
            >
              <badges.right.icon className="size-4 text-pink-600" />
              <span className="font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {badges.right.text}
              </span>
            </motion.div>
          )}

          {/* Animated Ripple Circles */}
          <motion.div
            className="absolute -bottom-16 h-[110px] w-[110px] rounded-full border-2 border-purple-200/50"
            animate={{
              scale: [0.98, 1.02, 0.98],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-24 h-[160px] w-[160px] rounded-full border-2 border-blue-200/40"
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute -bottom-32 h-[210px] w-[210px] rounded-full border-2 border-pink-200/30"
            animate={{
              scale: [0.98, 1, 0.98],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute -bottom-40 h-[260px] w-[260px] rounded-full border-2 border-purple-200/20"
            animate={{
              scale: [1, 1.01, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default EmailAutomationDiagram;

const FeatureIcon = ({ 
  icon: Icon, 
  x, 
  y 
}) => {
  return (
    <g>
      <foreignObject x={x} y={y} width="5" height="5">
        <div className="flex items-center justify-center h-full">
          <Icon className="text-white" style={{ width: "4px", height: "4px", strokeWidth: 2.5 }} />
        </div>
      </foreignObject>
    </g>
  );
};