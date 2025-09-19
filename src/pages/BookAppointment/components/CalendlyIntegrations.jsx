import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const CalendlyIntegrations = () => {
  const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png";

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Left - Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Connect Calendly to the 
            <br />
            tools you already use
          </h2>
        </div>
        
        {/* Right - Description */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-600 text-lg mb-4">
            Boost productivity with 100+ integrations
          </p>
          <button className="flex items-center gap-2 text-slate-800 font-bold hover:text-blue-600 transition-colors w-fit">
            View all integrations 
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-9 gap-4 mb-16">
        {Array.from({ length: 18 }, (_, index) => (
          <div 
            key={index}
            className="aspect-square bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-300 transition-colors hover:shadow-sm"
          >
            <img 
              src={logoUrl} 
              alt="Integration logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Google Suite Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <img 
              src={logoUrl} 
              alt="Google Suite" 
              className="w-12 h-12 object-contain"
            />
            <ArrowUpRight className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
          </div>
          
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Google suite
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            Get your job done faster by connecting Calendly to Google Calendar, Meet, Analytics, and more.
          </p>
        </div>

        {/* Microsoft Suite Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
          <div className="flex justify-between items-start mb-6">
            <img 
              src={logoUrl} 
              alt="Microsoft Suite" 
              className="w-12 h-12 object-contain"
            />
            <ArrowUpRight className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
          </div>
          
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Microsoft suite
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            Make your day easier with Calendly integrations for Microsoft Teams, Outlook, Azure SSO, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendlyIntegrations;