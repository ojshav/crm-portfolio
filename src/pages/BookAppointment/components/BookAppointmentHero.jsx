import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import HeroImg1 from "@/assets/BookAppointment/hero1.png"
import HeroImg2 from "@/assets/BookAppointment/hero2.png"

import "swiper/css";
import "swiper/css/effect-creative";

// ---------------------
// HERO COMPONENT
// ---------------------
export default function BookAppointmentHero() {
  const images = [
    HeroImg1,
    HeroImg2
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0.0, 0.2, 1] },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.4, 0.0, 0.2, 1] },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.2, ease: [0.4, 0.0, 0.2, 1] },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div className="min-h-[70vh] bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT CONTENT */}
          <motion.div className="space-y-8 lg:pr-8" variants={itemVariants}>
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Easy
              </span>
              <br />
              <span className="text-gray-800">scheduling</span>
              <br />
              <span className="text-gray-800">ahead</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Join 20 million professionals who easily book meetings with the #1
              scheduling tool.
            </motion.p>

            <motion.div variants={buttonVariants}>
              <motion.button
                className="px-8 py-4 text-lg font-semibold text-white rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl relative overflow-hidden group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 pt-8"
              variants={itemVariants}
            >
              <div className="text-sm text-gray-500">
                Trusted by more than{" "}
                <span className="font-semibold text-gray-800">100,000</span> of
                the world's leading organizations
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT - SWIPER SLIDER */}
{/* RIGHT - SWIPER SLIDER */}
<motion.div className="relative" variants={itemVariants}>
  <div className="relative w-full h-[45vh] lg:h-[45vh] p-6 rounded-2xl overflow-hidden shadow-2xl
                  bg-white/30 backdrop-blur-lg border border-white/20">

    {/* Decorative blurred circles */}
    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-pink-400 rounded-full blur-3xl opacity-20 -z-10"></div>
    <div className="absolute -right-32 -top-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-25 -z-10"></div>
    <div className="absolute -left-20 -bottom-32 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -z-10"></div>
    <div className="absolute -left-20 -top-20 w-64 h-64 bg-indigo-400 rounded-full blur-3xl opacity-20 -z-10"></div>

    {/* Swiper with reduced size to show background */}
    <Swiper
      grabCursor={true}
      effect="creative"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, "100%", -200],
        },
        next: {
          translate: [0, "-100%", 0],
        },
      }}
      modules={[EffectCreative, Autoplay]}
      className="w-full h-full rounded-xl overflow-hidden"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={img}
            alt={`Slide ${idx + 1}`}
            className="w-full h-full object-fit rounded-xl" // Changed to object-cover
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</motion.div>

        </motion.div>
      </div>
    </div>
  );
}
