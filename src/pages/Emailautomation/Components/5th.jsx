// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Mail, Rocket, BarChart3 } from "lucide-react";
// import video from "../../../assets/Emailautomation/automate.mp4";
// const Fifth = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//   };

//   return (
//     <section
//       ref={ref}
//       className="bg-purple-50 rounded-3xl py-12 lg:py-0 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center gap-10"
//     >
//           <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.6, delay: 0.4 }}
//         className="flex-1 w-full"
//       >
//         <div className="w-full h-full   overflow-hidden ">
//           <video
//             className="w-full h-full object-contain"
//             src={video}
//             autoPlay
//             muted
//             loop
//             playsInline
//           />
//         </div>
//       </motion.div>
//       {/* Left Content */}
//       <div className="flex-1">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
//         >
//           Email Automation CRM Tool
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={inView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="text-gray-600 mb-10 max-w-xl"
//         >
//           Our Email Automation CRM Tool streamlines your communication strategy,
//           enabling businesses to send targeted, personalized, and timely emails
//           at scale. Built for transparency, innovation, and measurable client
//           success.
//         </motion.p>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-4">
//           {[
//             {
//               icon: <Mail className="text-white w-6 h-6" />,
//               title: "Automated Campaigns",
//               desc: "Design and schedule personalized email sequences that nurture leads automatically.",
//             },
//             {
//               icon: <Rocket className="text-white w-6 h-6" />,
//               title: "Smart Segmentation",
//               desc: "Target the right audience with AI-powered segmentation and predictive analytics.",
//             },
//             {
//               icon: <BarChart3 className="text-white w-6 h-6" />,
//               title: "Real-Time Analytics",
//               desc: "Track open rates, click-throughs, and conversions to optimize performance.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               custom={i}
//               variants={cardVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//               className="flex flex-col items-start px-8 "
//             >
//               <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500 flex items-center justify-center mb-4">
//                 {item.icon}
//               </div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-xs">{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

    
//     </section>
//   );
// };

// export default Fifth;



import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Rocket, BarChart3 } from "lucide-react";
import video from "../../../assets/Emailautomation/automate.mp4";

const Fifth = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section
      ref={ref}
      className="bg-purple-50 rounded-3xl py-12 lg:py-0 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center gap-10"
    >
      {/* Video */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex-1 w-full"
      >
        <div className="w-full h-full overflow-hidden">
          <video
            className="w-full h-full object-contain"
            src={video}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </motion.div>

      {/* Content Side */}
      <div className="flex-1">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Email Automation CRM Tool
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mb-10 max-w-xl"
        >
          Our Email Automation CRM Tool streamlines your communication strategy,
          enabling businesses to send targeted, personalized, and timely emails
          at scale. Built for transparency, innovation, and measurable client
          success.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-2 mb-8">
          {[
            {
              icon: <Mail className="text-white w-6 h-6" />,
              title: "Automated Campaigns",
              desc: "Design and schedule personalized email sequences that nurture leads automatically.",
            },
            {
              icon: <Rocket className="text-white w-6 h-6" />,
              title: "Smart Segmentation",
              desc: "Target the right audience with AI-powered segmentation and predictive analytics.",
            },
            {
              icon: <BarChart3 className="text-white w-6 h-6" />,
              title: "Real-Time Analytics",
              desc: "Track open rates, click-throughs, and conversions to optimize performance.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-col items-start px-8"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 px-9 py-3 bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Get Tool -
        </motion.button>
      </div>
    </section>
  );
};

export default Fifth;
