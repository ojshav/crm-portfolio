import React, { useState, useEffect } from 'react';

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Tangible productivity gains",
      description: "Boost team efficiency with automated responses and smart routing that reduces response times and increases customer satisfaction.",
      icon: "🔒",
      image: "https://crisp.chat/_ipx/w_2800&f_webp/components/chatbot/ChatbotMainShowcase/information.webp"
    },
    {
      title: "Seamless conversations' handover",
      description: "Effortlessly transition from AI to human agents when complex issues arise, ensuring customers always get the right level of support.",
      icon: "💬",
      image: "https://crisp.chat/_ipx/w_2800&f_webp/components/chatbot/ChatbotMainShowcase/handover.webp"
    },
    {
      title: "AI-guided resolutions",
      description: "Leverage advanced AI to provide intelligent suggestions and solutions, helping resolve customer issues faster and more accurately.",
      icon: "🤖",
      image: "https://crisp.chat/_ipx/w_2800&f_webp/components/chatbot/ChatbotMainShowcase/ai.webp"
    },
    {
      title: "Flexibility by design",
      description: "Tailor-made workflow builder that offers flexibility, empowering your company to customize its behavior and responses to align with your unique customer service strategy.",
      icon: "⚙️",
      image: "https://crisp.chat/_ipx/w_2800&f_webp/components/chatbot/ChatbotMainShowcase/flexibility.webp"
    }
  ];

  // Auto-cycle through features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
              Uncover the secrets 
              <br />
              to a revolutionized 
              <br />
              experience
            </h2>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out cursor-pointer ${
                    activeFeature === index
                      ? 'bg-sky-50 border-2 border-sky-300 p-6 rounded-xl'
                      : 'p-4 border-2 border-transparent hover:bg-gray-50 rounded-xl'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    {/* <div className="text-2xl mt-1">{feature.icon}</div> */}
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${
                        activeFeature === index ? 'text-sky-600' : 'text-gray-600'
                      }`}>
                        {feature.title}
                      </h3>
                      
                      {/* Expanded Description for Active Feature */}
                      {activeFeature === index && (
                        <div className="space-y-3">
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                          {/* Progress Bar */}
                          <div className="w-full bg-sky-200 rounded-full h-1">
                            <div 
                              className="bg-sky-500 h-1 rounded-full transition-all duration-3000 ease-linear"
                              style={{
                                width: '100%',
                                animation: 'progress 3s linear infinite'
                              }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 via-blue-100 to-white p-8 rounded-3xl shadow-2xl overflow-hidden">
              <div className="relative h-96 lg:h-[500px]">
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="w-full h-full object-contain transition-opacity duration-500"
                  key={activeFeature} // Force re-render for smooth transition
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-sky-200 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default FeatureShowcase;