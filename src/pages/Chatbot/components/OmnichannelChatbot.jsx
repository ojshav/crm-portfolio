import React from 'react';
import { ChevronRight } from 'lucide-react';

const OmnichannelChatbot = () => {
  const badgeImage = "https://crisp.chat/_ipx/s_30x30/common/messaging/whatsapp.svg";
  const mainImage = "https://crisp.chat/_ipx/w_2800&f_png/components/chatbot/ChatbotCompatibility/illustration.webp";

  const channels = [
    { img: badgeImage, name: "WhatsApp Business" },
    { img: "https://crisp.chat/_ipx/s_30x30/common/messaging/instagram.svg", name: "Instagram" },
    { img: "https://crisp.chat/_ipx/s_30x30/common/messaging/messenger.svg", name: "Messenger" },
    { img: "https://crisp.chat/_ipx/s_30x30/common/messaging/mailbox.svg", name: "Mailbox" },
    { img: "https://crisp.chat/_ipx/s_30x30/common/messaging/sms.svg", name: "SMS" },
    { img: "https://crisp.chat/_ipx/s_30x30/common/messaging/telegram.svg", name: "Telegram" },
    { img: "https://crisp.chat/_ipx/s_30x30/common/messaging/twitter.svg", name: "Twitter" },
    { img: "https://crisp.chat/_ipx/s_30x30/common/messaging/line.svg", name: "Line" },
    { img: "https://crisp.chat/_ipx/s_30x30/common/messaging/viber.svg", name: "Viber" },
    { img: "https://crisp.chat/_ipx/s_30x30/common/messaging/viber.svg", name: "Website" }
  ];

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 leading-tight max-w-4xl mx-auto">
            Fun on any channel, at the 
            <br />
            speed of a conversation
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Title and Description */}
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                An omnichannel chatbot for your inbound 
                messages, no matter the channel
              </h3>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                It only takes one chatbot scenario to trigger automated answers empowered by artificial intelligence
              </p>
            </div>

            {/* Channel Badges */}
            <div className="space-y-6">
              {/* First Row - 5 badges */}
              <div className="flex flex-wrap gap-4">
                {channels.map((channel, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 border-2 border-gray-100 hover:bg-gray-100 transition-colors duration-200 px-4 py-3 rounded-3xl cursor-pointer group"
                  >
                    <img
                      src={channel.img}
                      alt={channel.name}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-gray-700 font-medium text-sm">
                      {channel.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl shadow-lg overflow-hidden">
              <div className="relative h-96 lg:h-[500px]">
                <img
                  src={mainImage}
                  alt="Omnichannel chatbot interface"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-300 rounded-full blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmnichannelChatbot;