import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/Emailautomation/img2.png"
const industries = [
 "Automated Campaigns",
  "Customer Segmentation",
  "Behavioral Triggers",
  "Personalization",
  "Analytics & Reporting",
];

const Fourthcomponent = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="w-full bg-white md:py-6  py-2 px-4 md:px-4  lg:py-16 lg:px-6 "
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={animate ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl lg:text-5xl md:text-4xl font-bold mb-4 text-black">
           Email Automation: From Triggers to Analytics
          </h2>

          <h3 className="text-xl font-semibold mb-6 mt-6 text-black">Key Capabilities :</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-black" >
            {industries.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={animate ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="flex items-center gap-2"
              >
                <CheckCircle size={18} className="text-[#280443]" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

         <Link  to = "/it-services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-12 px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-600 to-pink-500 text-black cursor-pointer rounded-full text-sm font-semibold  transition-all "
            
          >
            DISCOVER INDUSTRY SOLUTIONS
          </motion.button>
          </Link>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={animate ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[50%]"
        >
          <div className="rounded-[20px] overflow-hidden">
            <img
              src={img} // replace with your image path
              alt="Industry Visual"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Fourthcomponent;


// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { CheckCircle } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import img from "../../../assets/Emailautomation/img2.png";

// const capabilities = [
//   "Automated Campaigns",
//   "Customer Segmentation",
//   "Behavioral Triggers",
//   "Personalization",
//   "Analytics & Reporting",
  
// ];

// const Fourthcomponent = () => {
//   const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     if (inView) {
//       setAnimate(true);
//     }
//   }, [inView]);

//   return (
//     <section
//       ref={ref}
//       className="w-full bg-white md:py-6 py-2 px-4 md:px-4 lg:py-16 lg:px-6"
//     >
//       <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between gap-8">
//         {/* Left Section */}
//         <motion.div
//           initial={{ x: -50, opacity: 0 }}
//           animate={animate ? { x: 0, opacity: 1 } : {}}
//           transition={{ duration: 0.8 }}
//           className="w-full md:w-1/2"
//         >
//           <h2 className="text-3xl lg:text-5xl md:text-4xl font-bold mb-4 text-black">
//             Key Capabilities
//           </h2>

//           <div className="grid grid-cols-1 gap-4 text-sm text-black">
//             {capabilities.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={animate ? { opacity: 1, y: 0 } : {}}
//                 transition={{ delay: 0.1 * index, duration: 0.4 }}
//                 className="flex items-center gap-2"
//               >
//                 <CheckCircle size={18} className="text-[#280443]" />
//                 <span>{item}</span>
//               </motion.div>
//             ))}
//           </div>

//           <Link to="/it-services">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="mt-12 px-6 py-3 bg-[#DBD2FF] text-black cursor-pointer rounded-full text-sm font-semibold transition-all hover:bg-purple-300 shadow-[4px_4px_0px_#000]"
//               style={{ fontFamily: "Outfit" }}
//             >
//               DISCOVER INDUSTRY SOLUTIONS
//             </motion.button>
//           </Link>
//         </motion.div>

//         {/* Right Image Section */}
//         <motion.div
//           initial={{ x: 50, opacity: 0 }}
//           animate={animate ? { x: 0, opacity: 1 } : {}}
//           transition={{ duration: 0.8 }}
//           className="w-full md:w-1/2"
//         >
//           <div className="rounded-[20px] overflow-hidden">
//             <img
//               src={img}
//               alt="Key Capabilities Visual"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Fourthcomponent;
