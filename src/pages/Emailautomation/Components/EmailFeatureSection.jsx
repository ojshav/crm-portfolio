"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Users,
  Target,
  Zap,
  BarChart3,
} from "lucide-react";

const tasks = [
  {
    title: "Smart Drip Campaigns",
    subtitle: "Automated email sequences",
    icon: Mail,
    color: "blue",
  },
  {
    title: "Customer Segmentation",
    subtitle: "Target the right audience",
    icon: Users,
    color: "purple",
  },
  {
    title: "Behavioral Triggers",
    subtitle: "Send at perfect moments",
    icon: Zap,
    color: "pink",
  },
  {
    title: "A/B Testing",
    subtitle: "Optimize performance",
    icon: Target,
    color: "blue",
  },
  {
    title: "Advanced Analytics",
    subtitle: "Track ROI & engagement",
    icon: BarChart3,
    color: "purple",
  },
];

export default function EmailFeatureSection() {
  return (
    <section className="relative w-full py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative">
        {/* LEFT SIDE - Task Loop */}
        <div className="relative w-full max-w-sm">
          <div className="overflow-hidden bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl border-2 border-white/50">
            <div className="relative h-[320px] p-0 overflow-hidden">
              {/* Scrollable Container */}
              <div className="relative h-full overflow-hidden">
                {/* Motion list */}
                <motion.div
                  className="flex flex-col gap-2 absolute w-full"
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 14,
                    ease: "linear",
                  }}
                >
                  {[...tasks, ...tasks].map((task, i) => {
                    const IconComponent = task.icon;
                    const iconColorClass = 
                      task.color === "blue" ? "text-blue-600" :
                      task.color === "purple" ? "text-purple-600" : "text-pink-600";
                    
                    return (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 relative hover:bg-gradient-to-r hover:from-blue-50/50 hover:via-purple-50/50 hover:to-pink-50/50 transition-colors"
                      >
                        {/* Icon + Content */}
                        <div className="flex items-center justify-between flex-1">
                          <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 w-10 h-10 rounded-xl shadow-md flex items-center justify-center">
                              <div className="bg-white w-8 h-8 rounded-lg flex items-center justify-center">
                                <IconComponent className={`w-4 h-4 ${iconColorClass}`} />
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{task.title}</p>
                              <p className="text-xs text-gray-600">{task.subtitle}</p>
                            </div>
                          </div>
                          <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-1.5 rounded-lg">
                            <IconComponent className={`w-4 h-4 ${iconColorClass}`} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>

                {/* Fade effect only inside card */}
                <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white/90 via-white/60 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/90 via-white/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg">
            Email Automation
          </div>
          
          <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-900 leading-relaxed">
            Automate your email campaigns{" "}
            <span className="text-gray-600 font-normal text-base sm:text-lg lg:text-xl block mt-2">
              We help you streamline your marketing with AI-driven email automation — from 
              drip campaigns and behavioral triggers to advanced segmentation and analytics. 
              Our solutions maximize engagement, boost conversions, and scale effortlessly 
              with your business growth.
            </span>
          </h3>

          <div className="flex gap-3 flex-wrap">
            <span className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-shadow">
              AI-Powered
            </span>
            <span className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow">
              1000+ Templates
            </span>
            <span className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg hover:shadow-xl transition-shadow">
              Enterprise Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}