import React from 'react';
import Video1 from '@/assets/services/vid1.mp4';
import Video2 from '@/assets/services/vid2.mp4';

const VideoSection = () => {
    return (
        <div className="py-8 sm:py-12 lg:py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* Mobile Layout - Single column, stacked videos */}
            <div className="block sm:hidden">
              <div className="space-y-6">
                {/* Video 1 - Mobile */}
                <div className="w-full aspect-[9/16] bg-white rounded-2xl shadow-lg overflow-hidden mx-auto max-w-sm">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src={Video1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Video 2 - Mobile */}
                <div className="w-full aspect-[9/16] bg-black rounded-2xl shadow-lg overflow-hidden mx-auto max-w-sm">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src={Video2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
    
            {/* Tablet Layout - Two columns with responsive sizing */}
            <div className="hidden sm:block lg:hidden">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Video 1 - Tablet */}
                <div className="w-full h-[400px] md:h-[500px] bg-white rounded-2xl shadow-lg overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src={Video1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Video 2 - Tablet */}
                <div className="w-full h-[400px] md:h-[500px] bg-black rounded-2xl shadow-lg overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src={Video2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
    
            {/* Desktop Layout - Side by side with original sizing */}
            <div className="hidden lg:block">
              <div className="flex gap-8 justify-center">
                {/* Video 1 - Desktop */}
                <div className="w-80 xl:w-96 h-[500px] xl:h-[600px] bg-white rounded-2xl shadow-lg overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src={Video1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Video 2 - Desktop */}
                <div className="w-80 xl:w-96 h-[500px] xl:h-[600px] bg-black rounded-2xl shadow-lg overflow-hidden">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src={Video2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default VideoSection;