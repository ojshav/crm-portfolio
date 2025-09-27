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
    <div className="min-h-screen sm:min-h-[80vh] lg:min-h-[70vh] bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT CONTENT */}
          <motion.div 
            className="space-y-6 sm:space-y-8 lg:pr-8 text-center lg:text-left order-2 lg:order-1" 
            variants={itemVariants}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
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
              className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-full lg:max-w-lg mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Join 20 million professionals who easily book meetings with the #1
              scheduling tool.
            </motion.p>

            <motion.div variants={buttonVariants} className="flex justify-center lg:justify-start">
              <motion.button
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl relative overflow-hidden group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-4 pt-4 sm:pt-8"
              variants={itemVariants}
            >
              <div className="text-xs sm:text-sm text-gray-500 text-center lg:text-left">
                Trusted by more than{" "}
                <span className="font-semibold text-gray-800">100,000</span> of
                the world's leading organizations
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT - SWIPER SLIDER */}
          <motion.div 
            className="relative order-1 lg:order-2" 
            variants={itemVariants}
          >
            <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[45vh] p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl
                            bg-white/20 sm:bg-white/30 backdrop-blur-lg border border-white/20">

              {/* Decorative blurred circles - Responsive sizes */}
              <div className="absolute -right-10 sm:-right-16 md:-right-20 -bottom-10 sm:-bottom-16 md:-bottom-20 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-pink-400 rounded-full blur-2xl sm:blur-3xl opacity-15 sm:opacity-20 -z-10"></div>
              <div className="absolute -right-16 sm:-right-24 md:-right-32 -top-5 sm:-top-8 md:-top-10 w-36 sm:w-56 md:w-72 h-36 sm:h-56 md:h-72 bg-purple-500 rounded-full blur-2xl sm:blur-3xl opacity-20 sm:opacity-25 -z-10"></div>
              <div className="absolute -left-10 sm:-left-16 md:-left-20 -bottom-16 sm:-bottom-24 md:-bottom-32 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-500 rounded-full blur-xl sm:blur-3xl opacity-15 sm:opacity-20 -z-10"></div>
              <div className="absolute -left-10 sm:-left-16 md:-left-20 -top-10 sm:-top-16 md:-top-20 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-indigo-400 rounded-full blur-xl sm:blur-3xl opacity-15 sm:opacity-20 -z-10"></div>

              {/* Swiper with responsive configuration */}
              <Swiper
                grabCursor={true}
                effect="creative"
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
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
                className="w-full h-full rounded-lg sm:rounded-xl overflow-hidden"
                breakpoints={{
                  // Mobile
                  320: {
                    creativeEffect: {
                      prev: {
                        shadow: true,
                        translate: [0, "50%", -100],
                      },
                      next: {
                        translate: [0, "-50%", 0],
                      },
                    },
                  },
                  // Tablet
                  768: {
                    creativeEffect: {
                      prev: {
                        shadow: true,
                        translate: [0, "75%", -150],
                      },
                      next: {
                        translate: [0, "-75%", 0],
                      },
                    },
                  },
                  // Desktop
                  1024: {
                    creativeEffect: {
                      prev: {
                        shadow: true,
                        translate: [0, "100%", -200],
                      },
                      next: {
                        translate: [0, "-100%", 0],
                      },
                    },
                  },
                }}
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`Business meeting slide ${idx + 1}`}
                      className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Mobile-specific overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none rounded-lg sm:rounded-xl lg:hidden"></div>
            </div>

            {/* Mobile slide indicators */}
            <div className="flex justify-center mt-4 space-x-2 lg:hidden">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className="w-2 h-2 bg-gray-300 rounded-full"
                  style={{
                    animation: `pulse 3s infinite ${idx * 1.5}s`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background gradient overlay for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 -z-20 lg:hidden"></div>
    </div>
  );
}
