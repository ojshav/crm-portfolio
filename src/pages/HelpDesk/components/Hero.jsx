import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import vid from "../../../assets/Emailautomation/help.mp4"
const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardsData = [
    {
      title: "Multi-Platform Support",
      description: "Assistance for all CRM solutions we provide — Salesforce, HubSpot, Zoho, custom CRMs, and more.",
      image: "/images/crm-support.jpg" // Replace with your image path
    },
    {
      title: "24/7 Availability",
      description: "Our support team is available round-the-clock to handle urgent requests.",
      image: "/images/24-7-support.jpg" // Replace with your image path
    },
    {
      title: "Multi-Channel Communication",
      description: "Reach us via email, live chat, phone, or ticketing system.",
      image: "/images/multi-channel.jpg" // Replace with your image path
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 font-sans">
      {/* Hero Section */}
      <div
        ref={ref}
        className="container mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
          >
            24/7 Help Desk <span className=" bg-gradient-to-r from-cyan-500 via-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">Support for Your CRM Needs</span>          </motion.h1>
          
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            className="text-lg md:text-xl text-gray-600 max-w-lg"
          >
            Fast, reliable, and personalized support for all your CRM platforms and services.
          </motion.p>
          
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="pt-4"
          >
            <button className="bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-cyan-500 hover:to-blue-700 font-medium">
              Contact Our Support Team
            </button>
          </motion.div>
        </div>

        {/* Right Video Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="md:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-600/20 to-pink-500/20 rounded-3xl -z-10 transform rotate-3"></div>
            <div className="bg-gradient-to-br from-pink-50 to-cyan-50 rounded-3xl p-6 shadow-lg">
              <video
                autoPlay
                loop
                muted
                className="w-full h-auto rounded-2xl shadow-md"
              >
                {/* Replace with your video source */}
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cards Section */}
     
    </div>
  );
};

export default Hero;