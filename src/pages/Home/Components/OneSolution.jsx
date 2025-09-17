import React, { useEffect, useRef, useState } from 'react';
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

                            <div className='flex justify-start'>
                                <AnimatedCounter
                                    endValue={120}
                                    duration={2500}
                                    suffix="%"
                                    label="More Sales Online"
                                    className="py-8"
                                />
                            </div>

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


                            <div className='flex justify-start items-start'>
                                <AnimatedCounter
                                    endValue={210}
                                    duration={2500}
                                    suffix="+"
                                    label="Marketing Automation"
                                    className="py-8"
                                />
                            </div>
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

                                                        <div className='flex justify-start'>
                                <AnimatedCounter
                                    endValue={100}
                                    duration={2500}
                                    suffix="%"
                                    label="Customer support"
                                    className="py-8"
                                />
                            </div>
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

                                                                                    <div className='flex justify-start'>
                                <AnimatedCounter
                                    endValue={180}
                                    duration={2500}
                                    suffix="+"
                                    label="AI automation tools"
                                    className="py-8"
                                />
                            </div>
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


const AnimatedCounter = ({
    endValue,
    duration = 2000,
    startValue = 0,
    suffix = "",
    prefix = "",
    label = "Counter",
    className = ""
}) => {
    const [currentValue, setCurrentValue] = useState(startValue);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = Date.now();
        const startVal = startValue;
        const endVal = endValue;
        const totalDuration = duration;

        const updateCounter = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / totalDuration, 1);

            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);

            const current = Math.floor(startVal + (endVal - startVal) * easeOutCubic);
            setCurrentValue(current);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    }, [isVisible, endValue, startValue, duration]);

    const progress = (currentValue - startValue) / (endValue - startValue);

    // Dynamic glow colors based on progress
    const getGlowColor = () => {
        if (progress >= 0.9) { // When 90% or more complete, transition to pink
            return {
                circleGlow: 'drop-shadow(0 0 8px rgba(36, 99, 235, 0.6))',
                svgGlow: 'drop-shadow(0 0 10px rgba(36, 99, 235, 0.4))',
                textShadow: '0 0 10px rgba(36, 99, 235, 0.5), 0 0 20px rgba(36, 99, 235, 0.3), 0 0 30px rgba(36, 99, 235, 0.2)',
                strokeColor: '#2463eb' // Light pink stroke
            };
        }
        return {
            circleGlow: 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.6))',
            svgGlow: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.4))',
            textShadow: '0 0 10px rgba(56, 189, 248, 0.5), 0 0 20px rgba(56, 189, 248, 0.3), 0 0 30px rgba(56, 189, 248, 0.2)',
            strokeColor: '#38bdf8' // Light blue stroke
        };
    };

    const glowStyle = getGlowColor();

    return (
        <div
            ref={counterRef}
            className={`text-center ${className}`}
        >
            {/* Circular Progress Ring */}
            <div className="relative inline-flex items-center justify-center mb-4">
                <svg className="w-32 h-32 transform -rotate-90 drop-shadow-lg" viewBox="0 0 120 120" style={{ filter: glowStyle.svgGlow }}>
                    {/* Background Circle */}
                    <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="#e0f2fe"
                        strokeWidth="6"
                        fill="none"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke={glowStyle.strokeColor}
                        strokeWidth="6"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 50}`}
                        strokeDashoffset={`${2 * Math.PI * 50 * (1 - progress)}`}
                        className="transition-all duration-300 ease-out"
                        style={{ filter: glowStyle.circleGlow }}
                    />
                </svg>

                {/* Counter Text Inside Circle */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div
                        className="text-2xl md:text-3xl font-bold text-sky-400 transition-all duration-300"
                        style={{
                            textShadow: glowStyle.textShadow,
                            color: progress >= 0.9 ? '#2463eb' : '#38bdf8'
                        }}
                    >
                        {prefix}{currentValue.toLocaleString()}{suffix}
                    </div>
                </div>
            </div>

            <div className="text-lg text-gray-600">
                {label}
            </div>
        </div>
    );
};