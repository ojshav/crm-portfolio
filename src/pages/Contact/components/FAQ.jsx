import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      question: "What is a CRM and why does my business need it?",
      answer: "A CRM (Customer Relationship Management) system helps businesses manage leads, track customer interactions, automate workflows, and improve sales & customer support. It ensures better efficiency, improved customer experience, and higher conversions."
    },
    {
      question: "How is a custom CRM better than ready-made solutions?",
      answer: "Unlike off-the-shelf CRMs, a custom CRM is tailored to your business needs. You get only the features you need, scalability as you grow, and full control over integrations, automation, and data security."
    },
    {
      question: "Can you build industry-specific CRMs?",
      answer: "Yes ✅ We specialize in building CRMs for industries like Sales, E-commerce, Real Estate, Healthcare, Education, Service Providers, and Retail. Each solution is customized to match your workflows."
    },
    {
      question: "Will my team need technical knowledge to use the CRM?",
      answer: "Not at all. Our CRMs are designed with user-friendly dashboards and intuitive navigation. We also provide training and documentation so your team can get started quickly."
    },
    {
      question: "Can your CRM integrate with tools we already use?",
      answer: "Yes. We can integrate with email, WhatsApp, SMS, payment gateways, marketing platforms, ERPs, and more depending on your requirements."
    },
    {
      question: "Is my business data secure?",
      answer: "Absolutely. We implement data encryption, role-based access, and secure cloud hosting to ensure your customer data remains safe and private."
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-sky-600 mb-6 shadow-lg">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sky-600 to-sky-800 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our custom CRM solutions
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Decorative background blur */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `
                    radial-gradient(circle at 10% 20%, rgba(135, 206, 235, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 90% 80%, rgba(173, 216, 230, 0.1) 0%, transparent 50%)
                  `,
                  filter: "blur(20px)",
                  transform: "scale(1.02)"
                }}
              ></div>

              <div
                className={`relative p-6 rounded-2xl shadow-lg border transition-all duration-300 cursor-pointer ${
                  openItems.has(index)
                    ? 'shadow-xl scale-[1.02]'
                    : 'hover:shadow-xl hover:scale-[1.01]'
                }`}
                style={{
                  background: openItems.has(index)
                    ? `linear-gradient(135deg, 
                        rgba(135, 206, 235, 0.15) 0%, 
                        rgba(173, 216, 230, 0.1) 50%,
                        rgba(240, 248, 255, 0.9) 100%
                      )`
                    : `rgba(255, 255, 255, 0.8)`,
                  backdropFilter: "blur(20px)",
                  borderColor: openItems.has(index) 
                    ? "rgba(135, 206, 235, 0.3)" 
                    : "rgba(135, 206, 235, 0.1)"
                }}
                onClick={() => toggleItem(index)}
              >
                {/* Question */}
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-semibold pr-8 transition-colors duration-300 ${
                    openItems.has(index) 
                      ? 'text-sky-800' 
                      : 'text-gray-800 group-hover:text-sky-700'
                  }`}>
                    {item.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openItems.has(index)
                      ? 'bg-sky-500 text-white rotate-180'
                      : 'bg-sky-100 text-sky-600 group-hover:bg-sky-200'
                  }`}>
                    {openItems.has(index) ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(index) ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}
                >
                  <div className="pt-4 border-t border-sky-200/50">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              {openItems.has(index) && (
                <div 
                  className="absolute -top-1 -left-1 w-full h-full rounded-2xl -z-10 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(135, 206, 235, 0.2) 0%, 
                      rgba(173, 216, 230, 0.1) 100%
                    )`,
                    filter: "blur(10px)"
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div 
            className="inline-block p-8 rounded-2xl shadow-xl"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(135, 206, 235, 0.2) 0%, 
                  rgba(173, 216, 230, 0.15) 50%,
                  rgba(240, 248, 255, 0.9) 100%
                )
              `,
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(135, 206, 235, 0.3)"
            }}
          >
            <h3 className="text-2xl font-bold text-sky-800 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We're here to help! Get in touch with our team for personalized assistance.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}