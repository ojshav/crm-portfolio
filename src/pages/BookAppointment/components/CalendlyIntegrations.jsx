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
        {companys.map((company, index) => (
          <div 
            key={index}
            className="aspect-square bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center hover:border-blue-300 hover:bg-blue-100/50 hover:shadow-sm hover:scale-105 transition-all"
          >
            <img 
              src={company} 
              alt="Integration logo" 
              className="w-12 h-12 object-contain"
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
              src={"https://calendly.com/media/googleLogo.svg"} 
              alt="Google Suite" 
              className="w-12 h-12 object-contain"
            />
            <ArrowUpRight className="w-6 h-6 text-black hover:text-blue-600 transition-colors cursor-pointer" />
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
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"} 
              alt="Microsoft Suite" 
              className="w-10 h-10 object-contain"
            />
            <ArrowUpRight className="w-6 h-6 text-black hover:text-blue-600 transition-colors cursor-pointer" />
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