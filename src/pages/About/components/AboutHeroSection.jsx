import React from 'react';
import heroCrm5Img from '@/assets/hero-crm5.png';

export default function AboutHeroSection() {
  return (
    <div className="relative w-full h-[80vh] bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-3xl overflow-hidden">
      {/* Content Section */}
      <div className="relative z-10 h-full">
        <div className="grid lg:grid-cols-2 gap-0 items-center h-full">
          
          {/* Left Text Content */}
          <div className="space-y-8 px-8 lg:px-20 flex flex-col justify-center h-full">
            {/* Purple subtitle */}
            <div className="text-purple-600 font-medium text-lg">
              About Us:
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
    {/* About Us:
    <br /> */}
    Redefining CRM for the Future
  </h1>
              
              {/* Description */}
              <p className="text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
     we believe customer 
    relationships are at the heart of every successful business. 
    Our mission is to empower organizations with an AI-powered CRM that 
    simplifies workflows, improves collaboration, and helps teams build 
    meaningful connections with their customers.
  </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                  <span>Discover Our Story</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                {/* <div className="text-sm text-gray-500 space-y-1">
                  <div>Free forever.</div>
                  <div>No credit card.</div>
                </div> */}
              </div>

              {/* Reviews Section */}
              <div className="flex items-center space-x-3">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 font-medium">25,000+ reviews from</span>
                {/* Platform Icons */}
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">G</div>
                  <div className="w-6 h-6 bg-orange-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">⌘</div>
                  <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">T</div>
                  <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center text-white text-xs font-bold">P</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex items-center justify-center h-full">
            {/* Glow effects */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-pink-400 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -right-32 -bottom-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-25"></div>
            <div className="absolute -right-10 -bottom-32 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
            
            {/* Glassmorphism Container */}
            <div className="relative backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-6 lg:p-8">
              <img 
                src={heroCrm5Img}
                alt="Operations Dashboard"
                className="rounded-2xl w-full h-auto max-w-lg lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-1/3 w-24 h-24 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse delay-1000"></div>
    </div>
  );
}
