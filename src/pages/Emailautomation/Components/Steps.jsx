




// import React, { useState, useEffect, useRef } from 'react';
// import { Target, Zap, BarChart3, Settings } from 'lucide-react';

// const Steps = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const componentRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (componentRef.current) {
//       observer.observe(componentRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     if (isVisible) {
//       const interval = setInterval(() => {
//         setActiveStep(prev => (prev + 1) % 4);
//       }, 4000);

//       return () => clearInterval(interval);
//     }
//   }, [isVisible]);

//   const steps = [
//     {
//       id: 1,
//       title: "Define Clear Goals and Audience Segments",
//       description: "Before we launch any campaign, we work with you to understand your business objectives, target audience, and customer journey. By defining clear goals and segmenting your audience, your emails reach the right people at the right time, increasing open rates and conversions.",
//       icon: Target,
//     },
//     {
//       id: 2,
//       title: "Create and Automate High-Impact Campaigns",
//       description: "Our CRM empowers you to design beautiful, mobile-friendly email templates, set up drip campaigns, and automate follow-ups without manual effort. Personalization, A/B testing, and trigger-based workflows ensure that each subscriber receives a message that resonates with their needs.",
//       icon: Zap,
//     },
//     {
//       id: 3,
//       title: "Track Performance with Advanced Analytics",
//       description: "Monitor key metrics such as open rates, click-through rates, bounce rates, and conversions from a single intuitive dashboard. Detailed reports and visual analytics help you measure ROI and understand customer behavior to refine your strategy.",
//       icon: BarChart3,
//     },
//     {
//       id: 4,
//       title: "Optimize, Integrate, and Scale Effortlessly",
//       description: "Using real-time data, we continuously optimize subject lines, send times, and content to maximize engagement. Our Email Automation CRM integrates seamlessly with your existing CRM, e-commerce, and marketing tools, ensuring smooth workflows as your campaigns and subscriber base grow.",
//       icon: Settings,
//     }
//   ];

//   return (
//     <div 
//       ref={componentRef}
//       className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 p-4 md:p-8 font-inter"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className={`text-center mb-16 transform transition-all duration-1200 ease-out ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
//         }`}>
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
//             Transform Your Email Marketing with Our{' '}
//             <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//               Email Automation CRM
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
//             Take your email marketing to the next level with our all-in-one Email Automation CRM. From planning and designing campaigns to real-time tracking and optimization, we help you build stronger relationships, increase engagement, and drive measurable results.
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           {/* Left Side - Image Container */}
//           <div className={`relative transform transition-all duration-1000 delay-200 ease-out ${
//             isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
//           }`}>
//             <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
//               {/* Background Decoration */}
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
              
//               {/* Image Containers for each step */}
//               <div className="relative z-10 p-8 min-h-[500px] flex items-center justify-center">
//                 {/* Step 1 Image Container */}
//                 <div className={`absolute inset-0 p-8 flex items-center justify-center transition-all duration-700 ${
//                   activeStep === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//                 }`}>
//                   <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
//                     <div className="text-gray-500 font-semibold text-lg">Step 1 Image</div>
//                   </div>
//                 </div>

//                 {/* Step 2 Image Container */}
//                 <div className={`absolute inset-0 p-8 flex items-center justify-center transition-all duration-700 ${
//                   activeStep === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//                 }`}>
//                   <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
//                     <div className="text-gray-500 font-semibold text-lg">Step 2 Image</div>
//                   </div>
//                 </div>

//                 {/* Step 3 Image Container */}
//                 <div className={`absolute inset-0 p-8 flex items-center justify-center transition-all duration-700 ${
//                   activeStep === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//                 }`}>
//                   <div className="w-full h-full bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center">
//                     <div className="text-gray-500 font-semibold text-lg">Step 3 Image</div>
//                   </div>
//                 </div>

//                 {/* Step 4 Image Container */}
//                 <div className={`absolute inset-0 p-8 flex items-center justify-center transition-all duration-700 ${
//                   activeStep === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//                 }`}>
//                   <div className="w-full h-full bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center">
//                     <div className="text-gray-500 font-semibold text-lg">Step 4 Image</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Steps */}
//           <div className={`space-y-8 transform transition-all duration-1000 delay-400 ease-out ${
//             isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
//           }`}>
//             {steps.map((step, index) => {
//               const Icon = step.icon;
//               const isActive = activeStep === index;
              
//               return (
//                 <div
//                   key={step.id}
//                   className={`relative transition-all duration-700 transform cursor-pointer ${
//                     isActive 
//                       ? 'scale-105 translate-x-4' 
//                       : 'scale-100 translate-x-0 hover:scale-102'
//                   }`}
//                   onClick={() => setActiveStep(index)}
//                   style={{ 
//                     transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
//                   }}
//                 >
//                   {/* Transparent Background Box */}
//                   <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
//                     isActive 
//                       ? 'bg-white/90 backdrop-blur-sm shadow-xl border border-white/20' 
//                       : 'bg-white/40 backdrop-blur-sm border border-white/10 hover:bg-white/60'
//                   }`}></div>

//                   {/* Step Content */}
//                   <div className="relative z-10 flex items-start gap-6 p-6">
//                     {/* Step Number */}
//                     <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl transition-all duration-500 ${
//                       isActive 
//                         ? 'bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 text-white shadow-lg scale-110' 
//                         : 'bg-gray-200/80 text-gray-600 backdrop-blur-sm'
//                     }`}>
//                       {String(step.id).padStart(2, '0')}
//                     </div>
                    
//                     {/* Content */}
//                     <div className="flex-1">
//                       <h3 className={`text-xl font-bold mb-3 transition-all duration-300 font-sans tracking-tight ${
//                         isActive ? 'text-gray-900' : 'text-gray-700'
//                       }`}>
//                         {step.title}
//                       </h3>
//                       <p className={`leading-relaxed transition-all duration-300 font-medium ${
//                         isActive ? 'text-gray-700 text-base' : 'text-gray-600 text-sm'
//                       }`}>
//                         {step.description}
//                       </p>
                      
//                       {/* Icon */}
//                       <div className={`mt-4 transition-all duration-300 ${
//                         isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-90'
//                       }`}>
//                         <Icon className={`transition-all duration-300 ${
//                           isActive ? 'text-purple-600' : 'text-gray-400'
//                         }`} size={24} />
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Active Step Highlight Line */}
//                   {isActive && (
//                     <div className="absolute left-8 top-20 w-0.5 h-3/4 bg-gradient-to-b from-cyan-400 via-blue-500 via-purple-500 to-pink-500 animate-pulse rounded-full"></div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Progress Indicator */}
//         <div className={`flex justify-center mt-16 transform transition-all duration-1000 delay-600 ease-out ${
//           isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//         }`}>
//           <div className="flex gap-3">
//             {steps.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveStep(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   activeStep === index 
//                     ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 scale-125 shadow-lg' 
//                     : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Steps;

import img4 from "../../../assets/Emailautomation/img4.png";
import img5 from "../../../assets/Emailautomation/img5.png";
import img6 from "../../../assets/Emailautomation/img6.png";
import React, { useState, useEffect, useRef } from 'react';
import { Target, Zap, BarChart3, Settings } from 'lucide-react';

const Steps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % 4);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      id: 1,
      title: "Define Clear Goals and Audience Segments",
      description: "Before we launch any campaign, we work with you to understand your business objectives, target audience, and customer journey. By defining clear goals and segmenting your audience, your emails reach the right people at the right time, increasing open rates and conversions.",
      icon: Target,
    },
    {
      id: 2,
      title: "Create and Automate High-Impact Campaigns",
      description: "Our CRM empowers you to design beautiful, mobile-friendly email templates, set up drip campaigns, and automate follow-ups without manual effort. Personalization, A/B testing, and trigger-based workflows ensure that each subscriber receives a message that resonates with their needs.",
      icon: Zap,
    },
    {
      id: 3,
      title: "Track Performance with Advanced Analytics",
      description: "Monitor key metrics such as open rates, click-through rates, bounce rates, and conversions from a single intuitive dashboard. Detailed reports and visual analytics help you measure ROI and understand customer behavior to refine your strategy.",
      icon: BarChart3,
    },
 
  ];

  return (
    <div 
      ref={componentRef}
      className="min-h-screen bg-white px-2  lg:px md:px-   md:py-20  py-10 font-inter"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1200 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}>
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-10 leading-tight tracking-tight">
            Transform Your Email Marketing with Our{' '}
            <span className="bg-gradient-to-r mt-4 from-cyan-400 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Email Automation CRM
            </span>
          </h1>
          <p className="text-md md:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-medium">
            Take your email marketing to the next level with our all-in-one Email Automation CRM. From planning and designing campaigns to real-time tracking and optimization, we help you build stronger relationships, increase engagement, and drive measurable results.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image Container */}
          <div className={`relative transform transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative bg-white rounded-2xl  overflow-hidden h-[500px]">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
              
              {/* Image Containers for each step */}
              <div className="relative z-10 p-4 h-full flex items-center justify-center">
                {/* Step 1 Image Container */}
                <div className={`absolute inset-4 flex items-center justify-center transition-all duration-700 ${
                  activeStep === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                   <img
                          src={img4}
                          alt="Professional woman"
                          className="w-full h-full object-contain"
                        />
                </div>

                {/* Step 2 Image Container */}
                <div className={`absolute inset-4 flex items-center justify-center transition-all duration-700 ${
                  activeStep === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                     <img
                          src={img5}
                          alt="Professional woman"
                          className="w-full h-full object-contain"
                        />
                </div>

                {/* Step 3 Image Container */}
                <div className={`absolute inset-4 flex items-center justify-center transition-all duration-700 ${
                  activeStep === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                     <img
                          src={img6}
                          alt="Professional woman"
                          className="w-full h-full object-contain"
                        />
                </div>

                {/* Step 4 Image Container */}
                <div className={`absolute inset-4 flex items-center justify-center transition-all duration-700 ${
                  activeStep === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                    <img
                          src={img4}
                          alt="Professional woman"
                          className="w-full h-full object-contain"
                        />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className={`space-y-4 transform transition-all duration-1000 delay-400 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={step.id}
                  className={`relative transition-all duration-700 transform cursor-pointer ${
                    isActive 
                      ? 'scale-102 translate-x-2' 
                      : 'scale-100 translate-x-0 hover:scale-101'
                  }`}
                  onClick={() => setActiveStep(index)}
                  style={{ 
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
                  }}
                >
                  {/* Transparent Background Box */}
                  <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                    isActive 
                      ? 'bg-white/90 backdrop-blur-sm shadow-lg border border-white/20' 
                      : 'bg-white/40 backdrop-blur-sm border border-white/10 hover:bg-white/60'
                  }`}></div>

                  {/* Step Content */}
                  <div className="relative z-10 flex items-start gap-4 p-4">
                    {/* Step Number */}
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 text-white shadow-lg scale-105' 
                        : 'bg-gray-200/80 text-gray-600 backdrop-blur-sm'
                    }`}>
                      {String(step.id).padStart(2, '0')}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-bold mb-2 transition-all duration-300 font-sans tracking-tight leading-tight ${
                        isActive ? 'text-gray-900' : 'text-gray-700'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`leading-relaxed transition-all duration-300 font-normal text-sm ${
                        isActive ? 'text-gray-700' : 'text-gray-600'
                      }`}>
                        {step.description}
                      </p>
                      
                      {/* Icon */}
                   
                    </div>
                  </div>
                  
                  {/* Active Step Highlight Line */}
                  {isActive && (
                    <div className="absolute left-6 top-14 w-0.5 h-16 bg-gradient-to-b from-cyan-400 via-blue-500 via-purple-500 to-pink-500 animate-pulse rounded-full"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className={`flex justify-center mt-16 transform transition-all duration-1000 delay-600 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex gap-3">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;