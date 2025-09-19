import React from 'react';

const ChatBotHero = () => {
  const imageUrl = "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d1613330338_nnnn.webp";

  const cardData = [
    {
      title: "24x7",
      subtitle: "Customer Support",
      color: "bg-pink-500",
      img: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d1613330338_nnnn.webp"
    },
    {
      title: "Automated",
      subtitle: "Employee Support", 
      color: "bg-blue-500",
      img: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d1613330337_bbb.webp",
    },
    {
      title: "Conversational",
      subtitle: "Commerce",
      color: "bg-orange-500",
      img: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d161333033a_gr.webp",
    },
    {
      title: "AI Copilots",
      subtitle: "trained on your Data",
      color: "bg-purple-500",
      img: "https://cdn.prod.website-files.com/6643307d563d3d1613330141/6643307d563d3d1613330339_Intercom%20Widget.webp",
    }
  ];

  return (
    <div className="min-[80vh] bg-gradient-to-br from-sky-100 via-purple-100 to-pink-100 px-6 py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center space-y-8 mb-16">
          {/* Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 leading-tight">
            Create a Custom <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Chatbot</span> 
          </h1>
          
          {/* Description */}
          <p className="text-xl lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Bolsonic scans your website, files and help center to automatically handle 70% of customer queries,
            and automate customer engagement, support, sales, and more.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 text-lg font-bold text-white rounded-2xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 hover:shadow-2xl hover:scale-105 transform transition-all duration-200">
              BUILD YOUR AI CHATBOT - IT'S FREE
            </button>
            
            <button className="px-8 py-4 text-lg font-semibold text-gray-700 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200 hover:bg-white/80 transition-all duration-200">
              BOOK A DEMO
            </button>
          </div>
          
          {/* Small text */}
          {/* <p className="text-gray-500 text-sm">
            No credit card required
          </p> */}
        </div>

        {/* Cards Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-16">
          {cardData.map((card, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300">
              
              {/* Top 70% - Glassmorphism with Image */}
              <div className="h-54 bg-white/20 backdrop-blur-md border-b border-white/20 pt-8 pr-6 pl-6 relative">
                <div className="w-full h-full relative">
                  <img 
                    src={card.img} 
                    alt="Chatbot interface"
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                  
                  {/* Overlay gradient for better text visibility */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div> */}
                </div>
              </div>
              
              {/* Bottom 30% - Solid White */}
              <div className="bg-gray-50 p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-medium">
                  {card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        {/* <div className="text-center">
          <p className="text-xl lg:text-xl text-gray-700 leading-relaxed max-w-5xl mx-auto">
            Leverage your data to instantly resolve <span className="font-bold">70% of user inquiries</span> with{' '}
            <span className="bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">precise, verifiable responses,</span>
            <br />
            and deliver authentic customer experience in over{' '}
            <span className="font-bold">50 languages</span> across various channels.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ChatBotHero;