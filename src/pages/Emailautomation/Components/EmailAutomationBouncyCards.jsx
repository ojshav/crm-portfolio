import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const EmailAutomationBouncyCards = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <div>
          <div className="inline-block mb-3">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
              Powerful Features
            </span>
          </div>
          <h2 className="max-w-lg text-4xl font-bold md:text-5xl text-gray-900">
            Grow faster with our
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}email automation solution
            </span>
          </h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-6 py-3 font-medium text-white shadow-xl transition-all hover:shadow-2xl flex items-center gap-2"
        >
          Learn more
          <ArrowRight className="size-4" />
        </motion.button>
      </div>
      
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Smart Campaigns</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-blue-400 to-blue-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80" 
              alt="Email campaign dashboard"
              className="w-full h-full object-cover rounded-lg opacity-90"
            />
          </div>
        </BounceCard>
        
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Automated Workflows</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-purple-400 to-purple-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" 
              alt="Workflow automation interface"
              className="w-full h-full object-cover rounded-lg opacity-90"
            />
          </div>
        </BounceCard>
      </div>
      
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8">
          <CardTitle>Advanced Analytics</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-pink-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80" 
              alt="Analytics dashboard with charts"
              className="w-full h-full object-cover rounded-lg opacity-90"
            />
          </div>
        </BounceCard>
        
        <BounceCard className="col-span-12 md:col-span-4">
          <CardTitle>Segmentation</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] shadow-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80" 
              alt="Customer segmentation visualization"
              className="w-full h-full object-cover rounded-lg opacity-90"
            />
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-lg hover:shadow-2xl p-8 transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
      {children}
    </h3>
  );
};