// import React from 'react';


// const HeroHeader = () => {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12">
//         {/* Badge */}
//         <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-white/40 rounded-full shadow-lg">
//           <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-pulse"></div>
//           <span className="text-sm font-medium text-slate-600 tracking-wider uppercase">
//             #1 Email Automation Services
//           </span>
//         </div>

//         {/* Main heading */}
//         <div className="text-center max-w-7xl mx-auto mb-6">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//             <span className="text-slate-800 block mb-2">
//               Boost engagement & drive sales
//             </span>
//             <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent ">
//               with powerful Email Automation!
//             </span>
//           </h1>
//         </div>

//         {/* Subtitle */}
//         <div className="text-center max-w-5xl mx-auto mb-10">
//           <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed">
//             OneSecond empowers businesses with advanced Email Automation tools to drive engagement 
//             and conversions. Automate, personalize, and track every campaign for maximum impact.
//           </p>
//         </div>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
//           {/* Primary CTA */}
//           <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
//             <span className="relative z-10 flex items-center gap-2">
//               Get Started—It's Free!
//               <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
//             </span>
//           </button>

//           {/* Secondary CTA */}
//           {/* <button className="group relative px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-transparent bg-clip-padding text-slate-700 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//             <div className="absolute inset-0 p-[2px] bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500 rounded-full">
//               <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
//                 <span className="flex items-center gap-3 px-6 py-2">
//                   <Play className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
//                   Watch Demo
//                 </span>
//               </div>
//             </div>
//           </button> */}
//         </div>

//         {/* Floating elements */}
//         <div className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-bounce delay-700 hidden md:block"></div>
//         <div className="absolute top-32 right-20 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce delay-1000 hidden md:block"></div>
//         <div className="absolute bottom-32 left-20 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce delay-500 hidden md:block"></div>
//         <div className="absolute bottom-20 right-10 w-2 h-2 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full animate-bounce delay-300 hidden md:block"></div>

//         {/* Stats or features preview */}
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
//           {[
//             { stat: "99.9%", label: "Delivery Rate" },
//             { stat: "2.5x", label: "Higher Engagement" },
//             { stat: "500K+", label: "Happy Customers" }
//           ].map((item, index) => (
//             <div key={index} className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//               <div className="text-2xl sm:text-3xl font-bold  bg-clip-text text-gray-900 mb-2">
//                 {item.stat}
//               </div>
//               <div className="text-slate-600 font-medium">
//                 {item.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom gradient fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
//     </div>
//   );
// };

// export default HeroHeader;




import React from "react";
import { motion } from "framer-motion";

const HeroHeader = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden py-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-white/40 rounded-full shadow-lg">
          <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-slate-600 tracking-wider uppercase">
            #1 Email Automation CRM
          </span>
        </div>

        {/* Main heading */}
        <div className="text-center max-w-7xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-slate-800 block mb-2">
              Boost engagement & drive sales
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent ">
              with powerful Email Automation!
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed">
            Custria empowers businesses with advanced Email Automation tools to drive engagement 
            and conversions. Automate, personalize, and track every campaign for maximum impact.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500 text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <span className="relative z-10 flex items-center gap-2">
              Get Started—It's Free!
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            </span>
          </button>
        </div>

        
        {/* Stats or features preview */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { stat: "99.9%", label: "Delivery Rate" },
            { stat: "2.5x", label: "Higher Engagement" },
            { stat: "500K+", label: "Happy Customers" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl sm:text-3xl font-bold  bg-clip-text text-gray-900 mb-2">
                {item.stat}
              </div>
              <div className="text-slate-600 font-medium">{item.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/80 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroHeader;
