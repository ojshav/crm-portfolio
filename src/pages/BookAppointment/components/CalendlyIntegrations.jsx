import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const CalendlyIntegrations = () => {
  const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/1200px-Superman_shield.svg.png";

  const companys = [
    "https://images.ctfassets.net/k0lk9kiuza3o/23iy41NdhiEpf1LEIEj8N6/c1f66cb1ca7a9bc48dfed5335bce594e/Zoom.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/10mFB6Lw4elL2kPZqwfl7f/2ac0b1a1f9dfaf9e4a8caa3a7944065b/Salesforce.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/6W5mnZM4eNVK6Y8cBCnTu5/a0d70a3a38423e2b206e3dbf50503da5/google-calendar.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/4UQZOyPUNAjKf3x7tV7WZh/874072c0fdc4485bf305e1ac5a8a6c26/slack-logo-icon.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/2rhQcGrSRD5qeBzfsUresc/d2ed5280c9c0279be9d943c85faf959e/teams.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/3x97SWL0ydKgcqT412HGr8/ed9ea1d8dea332dd74b125c89d689288/gmail-icon.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/7bQs7qA7sp83HJuE7EUETv/ac34c04b2206d7e049f38f41178ef9b2/outlook.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/1iXaOfSTG4LH14hl3jhgLV/9c262e7842e1e78a9e595a4477ecde7d/Chrome.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/4DaLXMiJ2kwAv3qpPblkwG/3e2dcf1bf1a4b80858cd321ad67691b8/webex-logomark-01.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/2APzJ2NNOwzzKC0mZam9mB/3158e0780a9db488ff243f5f08a48cef/hubspot.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/42r0sVudnFRBVKsZH5MKRv/e71cb6443dc2ffe75a4f990ce0af5ead/zapier-icon.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/3L8hrM2H4gJLD7s2UFhhxE/75734eb6c87362ba5386ef33c4760d3d/Logomark.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/nirfrq5tMDzXegZJxZHYr/626c4f558a197d841e926a6f53603aa3/linkedin.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/68QvXpmECJZjUTvmk1Qbxk/7c2198e75bf4761ccf6677fdb960a14d/stripe-logo.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/3YVXIhGtUTAzHkrMdGeEWh/65b2902b498aab7bd56ee6b481ad10f4/TypeformIcon.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/5iPdwT125pfQPNafr27mny/e866d175ee0169c23f90a3e438b65b21/intercom.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/5f4urpcDfUzxVFsvqHeuC/24ce8cc6a9e5269f5f749e4de21ad03b/activecampaign-logo-icon.svg",
    "https://images.ctfassets.net/k0lk9kiuza3o/263kzYvoG2EGkeRpsrnkrA/90dd1ddda05b6fe9a4e5010f99308c0d/paypal-icon.svg",
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {/* Left - Heading */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Connect Custria to the 
            <span className="block sm:inline">
              <br className="hidden sm:block" />
              tools you already use
            </span>
          </h2>
        </div>
        
        {/* Right - Description */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-gray-600 text-base sm:text-lg mb-4">
            Boost productivity with 100+ integrations
          </p>
          <button className="flex items-center justify-center md:justify-start gap-2 text-slate-800 font-bold hover:text-blue-600 transition-colors w-fit mx-auto md:mx-0">
            View all integrations 
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Icons Grid - Responsive grid columns */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-16">
        {companys.map((company, index) => (
          <div 
            key={index}
            className="aspect-square bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl flex items-center justify-center hover:border-blue-300 hover:bg-blue-100/50 hover:shadow-sm hover:scale-105 transition-all duration-200 p-2 sm:p-3"
          >
            <img 
              src={company} 
              alt={`Integration logo ${index + 1}`}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Google Suite Card */}
        <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-between items-start mb-4 sm:mb-6">
            <img 
              src="https://calendly.com/media/googleLogo.svg"
              alt="Google Suite" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0"
              loading="lazy"
            />
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black hover:text-blue-600 transition-colors cursor-pointer flex-shrink-0" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
            Google suite
          </h3>
          
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Get your job done faster by connecting Custria to Google Calendar, Meet, Analytics, and more.
          </p>
        </div>

        {/* Microsoft Suite Card */}
        <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-between items-start mb-4 sm:mb-6">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
              alt="Microsoft Suite" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
              loading="lazy"
            />
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-black hover:text-blue-600 transition-colors cursor-pointer flex-shrink-0" />
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 sm:mb-4">
            Microsoft suite
          </h3>
          
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Make your day easier with Custria integrations for Microsoft Teams, Outlook, Azure SSO, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CalendlyIntegrations;