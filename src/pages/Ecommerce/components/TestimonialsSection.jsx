import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "This CRM system transformed our e-commerce business. We're processing orders 5x faster now!",
    by: "Sarah Johnson, CEO at FashionHub",
    imgSrc: "https://i.pravatar.cc/150?img=1"
  },
  {
    tempId: 1,
    testimonial: "The inventory management is flawless. We haven't had a stockout since implementing this system.",
    by: "Michael Chen, Operations Manager at TechGear",
    imgSrc: "https://i.pravatar.cc/150?img=2"
  },
  {
    tempId: 2,
    testimonial: "Customer relationship tools are incredible! Our retention rate increased by 40% in just 3 months.",
    by: "Emily Rodriguez, Marketing Director at GreenLeaf",
    imgSrc: "https://i.pravatar.cc/150?img=3"
  },
  {
    tempId: 3,
    testimonial: "The analytics dashboard gives us insights we never had before. Game-changer for our business!",
    by: "David Park, CFO at HomeDecor Paradise",
    imgSrc: "https://i.pravatar.cc/150?img=4"
  },
  {
    tempId: 4,
    testimonial: "If I could give 11 stars, I'd give 12. Best e-commerce platform we've ever used!",
    by: "Lisa Anderson, Founder at Organic Essentials",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "SO HAPPY with this platform! Saved us hundreds of hours and thousands of dollars.",
    by: "James Wilson, COO at SportStyle",
    imgSrc: "https://i.pravatar.cc/150?img=6"
  },
  {
    tempId: 6,
    testimonial: "Took some convincing, but now that we're using it, we're never going back to our old system.",
    by: "Rachel Kim, Product Manager at Beauty Bliss",
    imgSrc: "https://i.pravatar.cc/150?img=7"
  },
  {
    tempId: 7,
    testimonial: "The ROI is EASILY 100X for us. Best investment we've made in our business infrastructure.",
    by: "Daniel Martinez, Data Analyst at Market Trends",
    imgSrc: "https://i.pravatar.cc/150?img=8"
  },
  {
    tempId: 8,
    testimonial: "It's just the best e-commerce CRM. Period.",
    by: "Sophia Taylor, CEO at Luxury Finds",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  {
    tempId: 9,
    testimonial: "Switched 2 years ago and never looked back. Our sales doubled since then!",
    by: "Ryan Thompson, Sales Director at TechStore",
    imgSrc: "https://i.pravatar.cc/150?img=10"
  }
];

const TestimonialCard = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={`absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out ${
        isCenter 
          ? "z-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white border-purple-700" 
          : "z-0 bg-white text-gray-800 border-gray-200 hover:border-purple-400"
      }`}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(147, 51, 234, 0.3)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-200"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by.split(',')[0]}
        className="mb-4 h-14 w-12 bg-gray-200 object-cover object-top rounded"
        style={{
          boxShadow: isCenter ? "3px 3px 0px rgba(255, 255, 255, 0.3)" : "3px 3px 0px rgba(0, 0, 0, 0.1)"
        }}
      />
      <h3 className={`text-base sm:text-xl font-medium ${
        isCenter ? "text-white" : "text-gray-900"
      }`}>
        "{testimonial.testimonial}"
      </h3>
      <p className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
        isCenter ? "text-white/90" : "text-gray-600"
      }`}>
        - {testimonial.by}
      </p>
    </div>
  );
};

const TestimonialsSection = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              💬 Client Testimonials
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Loved by{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Businesses Worldwide
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their experience with our e-commerce CRM platform.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative w-full overflow-hidden bg-white/50 backdrop-blur-sm rounded-3xl"
          style={{ height: 600 }}
        >
          {testimonialsList.map((testimonial, index) => {
            const position = testimonialsList.length % 2
              ? index - (testimonialsList.length + 1) / 2
              : index - testimonialsList.length / 2;
            return (
              <TestimonialCard
                key={testimonial.tempId}
                testimonial={testimonial}
                handleMove={handleMove}
                position={position}
                cardSize={cardSize}
              />
            );
          })}
          
          {/* Navigation Buttons */}
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4">
            <button
              onClick={() => handleMove(-1)}
              className="flex h-14 w-14 items-center justify-center text-2xl transition-all bg-white border-2 border-gray-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white hover:border-purple-600 rounded-xl shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleMove(1)}
              className="flex h-14 w-14 items-center justify-center text-2xl transition-all bg-white border-2 border-gray-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:text-white hover:border-purple-600 rounded-xl shadow-lg"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">Trusted by leading e-commerce businesses</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
              <span className="text-gray-700 font-semibold">⭐ 4.9/5 Rating</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
              <span className="text-gray-700 font-semibold">🚀 500+ Clients</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
              <span className="text-gray-700 font-semibold">💼 $50M+ Revenue</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;