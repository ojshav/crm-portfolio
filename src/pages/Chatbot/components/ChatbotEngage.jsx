import React from 'react';

const ChatbotEngage = () => {
  const cards = [
    {
      title: "Get 20% more conversations using proactive messages",
      description: "Create personalized interactions and craft unique, multilingual workflows that resonate with all your audiences across all your channels. With Crisp chatbot builder you can deliver precisely timed messages to meet your customers' needs, elevating engagement to new heights.",
      image: "https://crisp.chat/_ipx/w_2800&f_webp/components/chatbot/ChatbotEngage/engagement.png",
      buttonText: "Learn more"
    },
    {
      title: "Measure and improve satisfaction with CSAT surveys",
      description: "Seamlessly collect valuable feedback within the chat or across other channels, enabling immediate insights and improvements that empower your customer service team to continuously elevate customer satisfaction and drive business excellence.",
      image: "https://crisp.chat/_ipx/w_2800&f_webp/components/chatbot/ChatbotEngage/reviews.webp",
      buttonText: "Get started for free"
    },
    {
      title: "Multilingual and multichannel, in a few clicks",
      description: "Excel in multilingual conversations with custom chatbot experiences. Seamlessly connect with a global audience, communicating effortlessly in their language. Elevate user experience, broaden your reach, and nurture international connections through multilingual chatbot interactions.",
      image: "https://crisp.chat/_ipx/w_2800&f_webp/components/chatbot/ChatbotEngage/multilingual.png",
      buttonText: "Get started for free"
    },
    {
      title: "Transition elegantly between bots and teams",
      description: "Humans and chatbots are complementary because they offer powerful synergies and expertise. Chatbots excel at handling routine queries efficiently, while agents bring empathy, problem-solving skills, and a human touch to complex or emotionally charged interactions.",
      image: "https://crisp.chat/_ipx/w_2800&f_webp/components/chatbot/ChatbotEngage/human.webp",
      buttonText: "Get started for free"
    }
  ];

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight max-w-4xl mx-auto">
            Proactive and tailor-made 
            <br />
            interactions that delights customers
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              
              {/* Image Section - 70% */}
              <div className="h-[50vh]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content Section - 30% */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
                
                {/* <button className="mt-6 px-6 py-3 text-blue-600 font-semibold border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  {card.buttonText}
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatbotEngage;