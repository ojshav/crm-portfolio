import React from 'react';
import OneSollImg1 from '@/assets/home/one-sol1.png';
import OneSollImg2 from '@/assets/home/one-sol2.png';
import OneSollImg3 from '@/assets/home/one-sol3.png';
import OneSollImg4 from '@/assets/home/one-sol4.png';
import { Headphones, Megaphone, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const flipVariants = {
  hidden: { 
    opacity: 0,
    rotateY: -90,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8
    }
  }
};

const textVariants = {
  hidden: { 
    opacity: 0,
    x: -50
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      duration: 0.6
    }
  }
};

export default function OneSolution() {
    return (
        <>
            <motion.div 
                className="relative py-8 sm:py-12 md:py-16 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Responsive blur backgrounds */}
                <div className="absolute -inset-4 sm:-inset-8 md:-inset-16 lg:-inset-24 xl:-inset-32 bg-gradient-to-br from-purple-300 via-blue-300 to-purple-300 rounded-full blur-2xl sm:blur-4xl opacity-10 -z-10"></div>
                <div className="absolute -inset-8 sm:-inset-12 md:-inset-20 lg:-inset-32 xl:-inset-40 bg-gradient-to-br from-blue-300 via-blue-300 to-purple-400 rounded-full blur-4xl opacity-10 -z-10"></div>
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4"
                    variants={textVariants}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                        One Platform. Every GTM Need.
                    </h2>
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        Simplify your go-to-market strategy with a single, unified platform.
                        From customer engagement to performance insights, everything you need
                        to launch, grow, and scale your business is here—seamlessly connected.
                    </p>
                </motion.div>
            </motion.div>

            {/* Section 1 - Sales Management */}
            <motion.div 
                className="relative w-full border-t border-b border-blue-400 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Responsive blur backgrounds */}
                <div className="absolute -inset-4 sm:-inset-8 md:-inset-16 lg:-inset-24 xl:-inset-32 bg-gradient-to-br from-purple-300 via-blue-300 to-purple-300 rounded-full blur-2xl sm:blur-4xl opacity-10 -z-10"></div>
                <div className="absolute -inset-8 sm:-inset-12 md:-inset-20 lg:-inset-32 xl:-inset-40 bg-gradient-to-br from-blue-300 via-blue-300 to-purple-400 rounded-full blur-4xl opacity-10 -z-10"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left part - Text */}
                        <motion.div 
                            className="w-full lg:w-2/5 p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-l border-blue-400 flex flex-col justify-center"
                            variants={textVariants}
                        >
                            <div className="text-blue-600 text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 lg:mb-6">
                                $
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">Unified sales management</h2>
                            <p className="text-gray-700 mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                                Simplify your sales with streamlined pipelines, automated follow-ups, and powerful analytics. Gain real-time visibility into opportunities, quickly spot bottlenecks, and empower reps to focus more on selling.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                                Spend less time on administrative tasks and close deals faster through seamless automation.
                            </p>
                        </motion.div>

                        {/* Right part - Image */}
                        <motion.div 
                            className="w-full lg:w-3/5 p-4 sm:p-6 lg:pt-8 lg:pl-8 border-r border-blue-400 relative"
                            variants={flipVariants}
                        >
                            {/* dotted background */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,_#3b82f680_1.2px,_transparent_1px)] bg-[length:15px_15px] sm:bg-[length:20px_20px] opacity-80 rounded-l"></div>

                            {/* Image container */}
                            <div className="flex items-center justify-center rounded-l overflow-hidden relative z-10">
                                <motion.img
                                    src={OneSollImg1}
                                    alt="Sales Management Dashboard"
                                    className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-full object-cover rounded-lg"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Section 2 - Marketing Automation */}
            <motion.div 
                className="relative w-full border-b border-blue-400 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Responsive blur backgrounds */}
                <div className="absolute -inset-4 sm:-inset-8 md:-inset-16 lg:-inset-24 xl:-inset-32 bg-gradient-to-br from-purple-300 via-blue-300 to-purple-300 rounded-full blur-2xl sm:blur-4xl opacity-10 -z-10"></div>
                <div className="absolute -inset-8 sm:-inset-12 md:-inset-20 lg:-inset-32 xl:-inset-40 bg-gradient-to-br from-blue-300 via-blue-300 to-purple-400 rounded-full blur-4xl opacity-10 -z-10"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left part - Text */}
                        <motion.div 
                            className="w-full lg:w-2/5 p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-l border-blue-400 flex flex-col justify-center"
                            variants={textVariants}
                        >
                            {/* Icon */}
                            <div className="text-blue-600 mb-3 sm:mb-4 lg:mb-6">
                                <Megaphone size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10" strokeWidth={2} />
                            </div>

                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">Smart marketing automation</h2>

                            <p className="text-gray-700 mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                                Launch targeted, personalized campaigns that automatically engage and nurture leads. Deliver timely,
                                relevant content at every step of the customer journey.
                            </p>

                            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                                Capture attention with intelligent segmentation and behavior-driven triggers, moving leads smoothly.
                            </p>
                        </motion.div>

                        {/* Right part - Image */}
                        <motion.div 
                            className="w-full lg:w-3/5 p-4 sm:p-6 lg:pt-8 lg:pl-8 border-r border-blue-400 relative"
                            variants={flipVariants}
                        >
                            {/* dotted background */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,_#3b82f680_1.2px,_transparent_1px)] bg-[length:15px_15px] sm:bg-[length:20px_20px] opacity-80 rounded-l"></div>

                            {/* Image container */}
                            <div className="flex items-center justify-center rounded-l overflow-hidden relative z-10">
                                <motion.img
                                    src={OneSollImg2}
                                    alt="Marketing Automation Dashboard"
                                    className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-full object-cover rounded-lg"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Section 3 - Customer Support */}
            <motion.div 
                className="relative w-full border-b border-blue-400 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Responsive blur backgrounds */}
                <div className="absolute -inset-4 sm:-inset-8 md:-inset-16 lg:-inset-24 xl:-inset-32 bg-gradient-to-br from-purple-300 via-blue-300 to-purple-300 rounded-full blur-2xl sm:blur-4xl opacity-10 -z-10"></div>
                <div className="absolute -inset-8 sm:-inset-12 md:-inset-20 lg:-inset-32 xl:-inset-40 bg-gradient-to-br from-blue-300 via-blue-300 to-purple-400 rounded-full blur-4xl opacity-10 -z-10"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left part - Text */}
                        <motion.div 
                            className="w-full lg:w-2/5 p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-l border-blue-400 flex flex-col justify-center"
                            variants={textVariants}
                        >
                            {/* Icon */}
                            <div className="text-blue-600 mb-3 sm:mb-4 lg:mb-6">
                                <Headphones size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10" strokeWidth={2} />
                            </div>

                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">Customer support, redefined</h2>

                            <p className="text-gray-700 mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                                Provide exceptional support across every channel with fast, personalized responses.
                                Anticipate customer needs, automate routine tasks, and build lasting relationships.
                            </p>

                            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                                Exceed expectations effortlessly with integrated support tools like live chat and email automation.
                            </p>
                        </motion.div>

                        {/* Right part - Image */}
                        <motion.div 
                            className="w-full lg:w-3/5 p-4 sm:p-6 lg:pt-8 lg:pl-8 border-r border-blue-400 relative"
                            variants={flipVariants}
                        >
                            {/* dotted background */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,_#3b82f680_1.2px,_transparent_1px)] bg-[length:15px_15px] sm:bg-[length:20px_20px] opacity-80 rounded-l"></div>

                            {/* Image container */}
                            <div className="flex items-center justify-center rounded-l overflow-hidden relative z-10">
                                <motion.img
                                    src={OneSollImg3}
                                    alt="Customer Support Dashboard"
                                    className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-full object-cover rounded-lg"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Section 4 - AI Sales */}
            <motion.div 
                className="relative w-full border-b border-blue-400 overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Responsive blur backgrounds */}
                <div className="absolute -inset-4 sm:-inset-8 md:-inset-16 lg:-inset-24 xl:-inset-32 bg-gradient-to-br from-purple-300 via-blue-300 to-purple-300 rounded-full blur-2xl sm:blur-4xl opacity-10 -z-10"></div>
                <div className="absolute -inset-8 sm:-inset-12 md:-inset-20 lg:-inset-32 xl:-inset-40 bg-gradient-to-br from-blue-300 via-blue-300 to-purple-400 rounded-full blur-4xl opacity-10 -z-10"></div>

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        {/* Left part - Text */}
                        <motion.div 
                            className="w-full lg:w-2/5 p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-l border-blue-400 flex flex-col justify-center"
                            variants={textVariants}
                        >
                            {/* Icon */}
                            <div className="text-blue-600 mb-3 sm:mb-4 lg:mb-6">
                                <Sparkles size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10" strokeWidth={2} />
                            </div>

                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">Supercharge sales with AI</h2>

                            <p className="text-gray-700 mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                                Put our intelligent AI agents to work automating tasks like prospect research,
                                personalized email drafting, call transcription, and conversation summaries.
                            </p>

                            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                                Effortlessly scale sales, marketing, and support with Co-pilot and Auto-pilot,
                                letting your team focus on closing more deals.
                            </p>
                        </motion.div>

                        {/* Right part - Image */}
                        <motion.div 
                            className="w-full lg:w-3/5 p-4 sm:p-6 lg:pt-8 lg:pl-8 border-r border-blue-400 relative"
                            variants={flipVariants}
                        >
                            {/* dotted background */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,_#3b82f680_1.2px,_transparent_1px)] bg-[length:15px_15px] sm:bg-[length:20px_20px] opacity-80 rounded-l"></div>

                            {/* Image container */}
                            <div className="flex items-center justify-center rounded-l overflow-hidden relative z-10">
                                <motion.img
                                    src={OneSollImg4}
                                    alt="AI Sales Dashboard"
                                    className="w-full h-48 sm:h-64 md:h-72 lg:h-80 xl:h-full object-cover rounded-lg"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}