const MissionSectionAlt = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="px-4 md:px-12 lg:px-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-purple-600 bg-purple-100 mb-6">
                MISSION
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Our mission.
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                While we absolutely love productivity software, we believe 
                productivity, in general, is broken. There's just too many tools to 
                keep track of, too many things in entirely separate ecosystems. 
                There has to be a better way to work.
              </p>
              
              <p>
                That's why we created our platform, first as an internal tool, now as a 
                way to fulfill our vision of making the world more productive and 
                giving people back their most valuable resource - time.
              </p>
              
              <p>
                Eventually, our goal is to streamline all work processes - thereby 
                making people more productive and giving back at least 20% 
                of time to dedicate to other things. One solution to replace them 
                all. We're just getting started!
              </p>
            </div>
          </div>

          {/* Right Side - Large Heading with Enhanced Dots */}
          <div className="relative">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-transparent to-blue-50 rounded-3xl"></div>
              
              {/* Animated dots pattern */}
              <div className="absolute top-0 right-0 w-40 h-40">
                {Array.from({ length: 100 }).map((_, i) => {
                  const row = Math.floor(i / 10);
                  const col = i % 10;
                  const opacity = Math.max(0, 0.8 - (row + col) * 0.08);
                  const delay = (row + col) * 100;
                  return (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
                      style={{
                        top: `${row * 16}px`,
                        right: `${col * 16}px`,
                        opacity: opacity,
                        animationDelay: `${delay}ms`
                      }}
                    />
                  );
                })}
              </div>
              
              <div className="absolute bottom-0 left-0 w-40 h-40">
                {Array.from({ length: 100 }).map((_, i) => {
                  const row = Math.floor(i / 10);
                  const col = i % 10;
                  const opacity = Math.max(0, 0.6 - (row + col) * 0.06);
                  const delay = (row + col) * 150;
                  return (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
                      style={{
                        bottom: `${row * 16}px`,
                        left: `${col * 16}px`,
                        opacity: opacity,
                        animationDelay: `${delay}ms`
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Main Heading with Better Typography */}
            <div className="relative z-10 p-10">
              <h3 className="text-4xl lg:text-6xl xl:text-7xl font-black leading-none tracking-tight">
                <span className="block text-transparent bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text">
                  Save people
                </span>
                <span className="block text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
                  time
                </span>
                <span className="block text-gray-900 mt-2">by making the world more productive.</span>
                {/* <span className="block text-gray-900">the world more</span>
                <span className="block text-gray-900">productive.</span> */}
              </h3>
            </div>

            {/* Floating elements */}
            {/* <div className="absolute top-20 right-16 w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-12 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSectionAlt;