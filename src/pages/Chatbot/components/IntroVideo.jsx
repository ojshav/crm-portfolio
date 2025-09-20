import React from 'react';

const IntroVideo = () => {
  const videoUrl = "https://content.app-sources.com/s/18447925404601697/uploads/Videos/fastbots_new_setup-6184231.mp4";

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Container with Gradient Background */}
        <div className="relative bg-gradient-to-br from-sky-400 via-purple-500 to-pink-500 rounded-3xl p-8 lg:p-12 overflow-hidden">
          
          {/* Shiny gradient overlay for extra shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 animate-pulse"></div>
          
          {/* Content */}
          <div className="relative z-10 space-y-8 text-center">
            
            {/* Heading */}
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              A Simple User Friendly AI Chatbot Platform
            </h2>
            
            {/* Description */}
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Anyone can set up a GPT chatbot in minutes to help with customer support or internal use
            </p>
            
            {/* Video */}
            <div className="mt-12">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video 
                autoPlay 
                loop 
                muted 
                // playsInline
                  className="w-full h-[40vh] md:h-[70vh] onject-fit md:object-cover"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect width='1200' height='800' fill='%23f3f4f6'/%3E%3C/svg%3E"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Optional play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-0 h-0 border-l-[15px] border-l-white border-y-[10px] border-y-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;