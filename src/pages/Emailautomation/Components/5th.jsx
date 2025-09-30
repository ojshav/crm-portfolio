import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Lock, Sparkles, Zap, Mail, Users, Target, BarChart3 } from 'lucide-react';

export default function EmailAutomationFeatures() {
    const features = [
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Send millions of emails instantly with our high-performance infrastructure and real-time delivery.",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            icon: Target,
            title: "Smart Targeting",
            description: "Advanced segmentation and behavioral triggers ensure your message reaches the right audience.",
            gradient: "from-purple-500 to-purple-600"
        },
        {
            icon: Sparkles,
            title: "AI-Powered",
            description: "Machine learning optimizes send times, subject lines, and content for maximum engagement.",
            gradient: "from-pink-500 to-pink-600"
        },
        {
            icon: BarChart3,
            title: "Deep Analytics",
            description: "Comprehensive insights and reporting help you understand and improve campaign performance.",
            gradient: "from-blue-500 via-purple-500 to-pink-500"
        }
    ];

    return (
        <section className="relative overflow-hidden py-16 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-2xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block mb-4"
                    >
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                            ⚡ Email Automation Platform
                        </span>
                    </motion.div>
                    
                    <h2 className="text-4xl font-bold lg:text-5xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                        Built for Scaling Teams
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Empower your marketing team with intelligent automation that adapts to your needs, delivering personalized experiences at scale.
                    </p>
                </motion.div>

                {/* Main Visual Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative -mx-4 rounded-3xl p-3 md:-mx-12 lg:col-span-3"
                >
                    <div className="[perspective:800px]">
                        <div className="">
                            <div className="aspect-[88/36] relative rounded-2xl overflow-hidden border-2 border-white/50 shadow-2xl bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 backdrop-blur-sm">
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60 z-10"></div>
                                
                                {/* Content Area - Email Dashboard Mockup */}
                                <div className="absolute inset-0 p-8 md:p-12">
                                    {/* Top Bar */}
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 shadow-lg">
                                            <Mail className="size-4 text-purple-600" />
                                            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                                Campaign Dashboard
                                            </span>
                                        </div>
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                        </div>
                                    </div>

                                    {/* Stats Cards */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
                                        <motion.div 
                                            whileHover={{ scale: 1.05, y: -4 }}
                                            className="bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-blue-200 shadow-lg"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <Users className="size-3 md:size-4 text-blue-600" />
                                                <span className="text-xs font-medium text-gray-600">Subscribers</span>
                                            </div>
                                            <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                                                45.2K
                                            </div>
                                            <div className="text-xs text-green-600 font-medium">+12.5%</div>
                                        </motion.div>

                                        <motion.div 
                                            whileHover={{ scale: 1.05, y: -4 }}
                                            transition={{ delay: 0.1 }}
                                            className="bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-purple-200 shadow-lg"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <Zap className="size-3 md:size-4 text-purple-600" />
                                                <span className="text-xs font-medium text-gray-600">Open Rate</span>
                                            </div>
                                            <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                                                68.4%
                                            </div>
                                            <div className="text-xs text-green-600 font-medium">+8.2%</div>
                                        </motion.div>

                                        <motion.div 
                                            whileHover={{ scale: 1.05, y: -4 }}
                                            transition={{ delay: 0.2 }}
                                            className="bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-pink-200 shadow-lg"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <Target className="size-3 md:size-4 text-pink-600" />
                                                <span className="text-xs font-medium text-gray-600">Click Rate</span>
                                            </div>
                                            <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                                                24.7%
                                            </div>
                                            <div className="text-xs text-green-600 font-medium">+15.3%</div>
                                        </motion.div>

                                        <motion.div 
                                            whileHover={{ scale: 1.05, y: -4 }}
                                            transition={{ delay: 0.3 }}
                                            className="bg-white/80 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-blue-200 shadow-lg"
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                <BarChart3 className="size-3 md:size-4 text-blue-600" />
                                                <span className="text-xs font-medium text-gray-600">Revenue</span>
                                            </div>
                                            <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                                $124K
                                            </div>
                                            <div className="text-xs text-green-600 font-medium">+22.1%</div>
                                        </motion.div>
                                    </div>

                                    {/* Campaign List Preview */}
                                    <div className="space-y-2 md:space-y-3">
                                        {[
                                            { name: "Welcome Series", status: "Active", progress: 85 },
                                            { name: "Cart Abandonment", status: "Active", progress: 92 },
                                            { name: "Win-back Campaign", status: "Scheduled", progress: 45 }
                                        ].map((campaign, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 + index * 0.1 }}
                                                whileHover={{ x: 4 }}
                                                className="bg-white/60 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-gray-200/50 shadow-sm"
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs md:text-sm font-semibold text-gray-800">{campaign.name}</span>
                                                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                                                        campaign.status === "Active" 
                                                            ? "bg-green-100 text-green-700" 
                                                            : "bg-blue-100 text-blue-700"
                                                    }`}>
                                                        {campaign.status}
                                                    </span>
                                                </div>
                                                <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                                    <motion.div 
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${campaign.progress}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                                                    ></motion.div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Gradient Fade */}
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-20"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="relative mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="group relative"
                        >
                            <div className="relative space-y-3 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative">
                                    {/* Icon container */}
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-3`}>
                                        <feature.icon className="size-6 text-white" />
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    
                                    {/* Description */}
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Decorative corner accent */}
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-[100%] group-hover:opacity-10 transition-opacity`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}